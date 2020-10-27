/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');
const links = document.getElementsByTagName('a');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = 1; i <= sections.length; i++) {
	const list = document.createElement('li');
	const link = document.createElement('a');
	list.appendChild(link);
	link.innerHTML = "Section " + i;
	link.classList.add('menu__link');
	navList.appendChild(list);
}

// Add class 'active' to section when near top of viewport
let addClassActive = function(input){
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('your-active-class');
    };
    sections[input].classList.add('your-active-class');
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
links[0].addEventListener('click', function () {
links[0].href = "#section " + 1;});

links[1].addEventListener('click', function () {
links[1].href = "#section " + 2;});

links[2].addEventListener('click', function () {
links[2].href = "#section " + 3;});

links[3].addEventListener('click', function () {
links[3].href = "#section " + 4;});
// Set sections as active


