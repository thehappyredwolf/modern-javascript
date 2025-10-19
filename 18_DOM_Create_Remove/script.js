// Create a new paragraph element
let newParagraph = document.createElement('p');

// Add some text to it
newParagraph.textContent = "I'm a new paragraph!";

// Add a class to style it
newParagraph.className = 'new-element';

// Find the container where we want to add it
let container1 = document.getElementById('container1');

// Add the new paragraph to the container
container1.appendChild(newParagraph);


// Create a button
let newButton = document.createElement('button');
newButton.textContent = 'Click Me!';
container1.appendChild(newButton);

// Create an image
let newImage = document.createElement('img');
newImage.src = 'https://placehold.co/150';
newImage.alt = 'Placeholder image';
container1.appendChild(newImage);

// Create a new heading
let newHeading = document.createElement('h3');
newHeading.textContent = 'New Section';

// Get the first paragraph in container1
let firstParagraph = container1.getElementsByTagName('p')[0];

// Insert the heading before the paragraph
container1.insertBefore(newHeading, firstParagraph);


// Get containers
container1 = document.getElementById('container1');
let container2 = document.getElementById('container2');

// Get the button we created earlier
let button = container1.querySelector('button');

// Move it to container2
if (button) {
    container2.appendChild(button);
    // The button will move from container1 to container2
}


// Get the image we created
let image = document.querySelector('img');
if (image) {
    image.remove();
    // The image should disappear
}

// Get container and paragraph
let container = document.getElementById('container2');
let paragraph = container.querySelector('p');

if (paragraph) {
    container.removeChild(paragraph);
    // The paragraph in container2 should disappear
}

// Create a new list
let ul = document.createElement('ul');
container2.appendChild(ul);

// Function to add a new item
function addListItem(text) {
    let li = document.createElement('li');
    li.textContent = text;

    // Add a delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = ' x ';
    deleteButton.style.marginLeft = '10px';

    /* When clicked, remove the list item. This is an event that we will cover in 
    the next section!*/
    
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);
    ul.appendChild(li);
}

// Add some items
addListItem('First item');
addListItem('Second item');
addListItem('Third item');
