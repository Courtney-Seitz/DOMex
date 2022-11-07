//1. Select the section with an id of container without using querySelector.
const container = document.getElementById('container');

//2. Select the section with an id of container using querySelector.
const container2 = document.querySelector('#container');

//3. Select all of the list items with a class of “second”.
const second = document.querySelector('li.second');

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
const third = document.querySelector('ol li.third');

//5. Give the section with an id of container the text “Hello!”.
const container3 = document.querySelector('#container');
container3.innerText = "Hello!";

//6. Add the class main to the div with a class of footer.
const footer = document.querySelector('div.footer');
footer.classList.add('main');


