//1. Select the section with an id of container without using querySelector.
const container = document.getElementById('container');

//2. Select the section with an id of container using querySelector.
const container2 = document.querySelector('#container');

//3. Select all of the list items with a class of “second”.
const second = document.querySelector('li.second');

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
const third = document.querySelector('ol li.third');

//5. Give the section with an id of container the text “Hello!”.
//const container3 = document.querySelector('#container');
//container3.innerText = "Hello!";

//6. Add the class main to the div with a class of footer.
const footer = document.querySelector('div.footer');
footer.classList.add('main');

//7. Remove the class main on the div with a class of footer.
const footer2 = document.querySelector('div.footer');
footer2.classList.remove('main');

//8. Create a new li element.
//const newLi = document.createElement('li');

//9. Give the li the text “four”.
//newLi.innerText = "four";

//10. Append the li to the ul element.
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = "four";
ul.append(newLi);

//11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const list = document.querySelector('ol');
const listItems = list.children;
for (let listItem of listItems) {
    listItem.style.backgroundColor = "green";
    }
