let mainTitle = document.getElementById('main-title');
console.log(mainTitle);

// Let's change its color so we can see we've selected it correctly
mainTitle.style.color = 'blue';

let nonExistent = document.getElementById('not-here');
console.log(nonExistent); // null


let boxes = document.getElementsByClassName('box');
console.log(boxes);

// Let's modify all boxes to prove we selected them
for(let box of boxes) {
    box.style.borderColor = 'red';
}


let specialElements = document.getElementsByClassName('special');
for(let element of specialElements) {
    element.style.border = '2px dashed green';
}


let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// Change all paragraphs
for(let p of paragraphs) {
    p.style.fontSize = '32px';
}


// using querySelector

// Select by ID
let container = document.querySelector('#container');
container.style.padding = '100px';

// Select by class
let firstBox = document.querySelector('.box');
firstBox.style.backgroundColor = 'lightblue';

// More complex selections
let specialItem = document.querySelector('li.special');
specialItem.style.color = 'red';

// First paragraph inside container
let boxParagraph = document.querySelector('#container p');


// querySelectorAll returns all matching elements in a NodeList

// Select all boxes
let allBoxes = document.querySelectorAll('.box');
allBoxes.forEach(box => {
    box.style.margin = '100px';
});

// Select all special elements inside the list
let specialListItems = document.querySelectorAll('#list .special');
specialListItems.forEach(item => {
    item.style.fontWeight = 'bold';
});


// combining everything together

// Select all elements with class 'special' inside elements with class 'box'
let specialBoxes = document.querySelectorAll('.box .special');
specialBoxes.forEach(box => {
    box.style.backgroundColor = "red";
});

// Select the first paragraph that has both 'text' and 'special' classes
let specialText = document.querySelector('p.text.special');
specialText.style.textDecoration = 'underline';

// Select all list items except the special one
let regularItems = document.querySelectorAll('li.item:not(.special)');
regularItems.forEach(item => {
    item.style.color = 'gray';
});


// common pitfalls and solutions 

// trying to use array methods on HTMLCollections

boxes = document.getElementsByClassName('box');
// This won't work:
// boxes.forEach(box => {...})

// Instead, convert to array first:
Array.from(boxes).forEach(box => {
    box.style.padding = '20px';
});

// forgetting that getElementById returns null for non-existent elements

// Better way to handle potential null:
let element = document.getElementById('some-id');
if (element) {
    element.style.color = 'red';
} else {
    console.log('Element not found!');
}