// Basic GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())  // Parse JSON response
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Same request using async/await
async function getPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

getPost();


async function examineResponse() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    console.log('Status:', response.status);  // 200 if successful
    console.log('OK?', response.ok);          // true if status is 200-299
    console.log('Status Text:', response.statusText);
    console.log('Headers:', response.headers);
}

examineResponse();


async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'My Post',
                body: 'This is my new post',
                userId: 1
            })
        });

        const data = await response.json();
        console.log('Created post:', data);
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

createPost();


async function updatePost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 1,
                title: 'Updated Title',
                body: 'Updated content',
                userId: 1
            })
        });

        const data = await response.json();
        console.log('Updated post:', data);
    } catch (error) {
        console.error('Error updating post:', error);
    }
}

updatePost();


async function deletePost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Post deleted successfully');
        } else {
            console.log('Failed to delete post');
        }
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}

async function fetchWithErrorHandling(url) {
    try {
        const response = await fetch(url);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'TypeError') {
            console.log('Network error or CORS issue');
        } else {
            console.log('Other error:', error.message);
        }
        throw error;  // Re-throw to handle it in the calling function
    }
}

// Using our error handling function
async function getDataSafely() {
    try {
        const data = await fetchWithErrorHandling('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data:', data);
    } catch (error) {
        console.error('Failed to get data:', error);
    }
}

async function getPostsWithParams() {
    // Creating URL with parameters
    const baseUrl = '<https://jsonplaceholder.typicode.com/posts>';
    const params = new URLSearchParams({
        userId: 1,
        _limit: 5
    });

    try {
        const response = await fetch(`${baseUrl}?${params}`);
        const data = await response.json();
        console.log('Posts:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getPostAndComments(postId) {
    try {
        // Get post and its comments in parallel
        const [postResponse, commentsResponse] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        ]);

        // Parse both responses
        const post = await postResponse.json();
        const comments = await commentsResponse.json();

        return {
            post,
            comments
        };
    } catch (error) {
        console.error('Error fetching post and comments:', error);
        throw error;
    }
}

// Using the function
getPostAndComments(1)
    .then(data => {
        console.log('Post:', data.post);
        console.log('Comments:', data.comments);
    })
    .catch(error => console.error('Error:', error));