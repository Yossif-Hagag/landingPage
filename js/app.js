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
const sections = document.querySelectorAll('section');
const links = document.getElementsByTagName('a');
let enableScroll = true;
let isScrolling;
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
        links[i].style.backgroundColor = '';
    };
    if (input != undefined) {
    	sections[input].scrollIntoView({behavior : 'smooth'});
    	sections[input].classList.add('your-active-class');
    	links[input].style.backgroundColor = 'orange';
    }
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
links[0].addEventListener('click', function (event) {
	event.preventDefault();
	enableScroll = false;
	addClassActive(0);
});

links[1].addEventListener('click', function (event) {
	event.preventDefault();
	enableScroll = false;
	addClassActive(1);
});

links[2].addEventListener('click', function (event) {
	event.preventDefault();
	enableScroll = false;
	addClassActive(2);
});

links[3].addEventListener('click', function (event) {
	event.preventDefault();
	enableScroll = false;
	addClassActive(3);
});
// Set sections as active
window.addEventListener('scroll', function () {
	window.clearTimeout( isScrolling );
	isScrolling = setTimeout(function() {
		enableScroll = true;
	}, 66);
	let oldScroll = window.scrollY;
	if (oldScroll == 0) {
		for (let i = 0; i < links.length; i++) {
	        links[i].style.backgroundColor = '';
    	};
	}
	sections.forEach((section, index) => {
        let rect = section.getBoundingClientRect();
        let isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
        if (isInViewport && enableScroll) {
            addClassActive(index);
        } 
    });
});