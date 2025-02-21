// script.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Create a button element
    const button = document.createElement('button');
    button.textContent = 'Click me!';
    document.body.appendChild(button);

    // Create a paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a paragraph that will change.';
    document.body.appendChild(paragraph);

    // Add an event listener to the button
    button.addEventListener('click', function() {
        paragraph.textContent = 'The paragraph text has changed!';
    });
});