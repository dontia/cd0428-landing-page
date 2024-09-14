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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 */

/** @type {HTMLElement} The unordered list element that will contain the navigation links. */
const navList = document.getElementById('navbar__list');

/** @type {NodeList} A collection of all section elements on the page. */
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
*/

/**
 * @description Creates a new list item element for the navigation menu.
 * @returns {HTMLLIElement} The newly created list item element.
 */
function createListItem() {
    const listItem = document.createElement("li"); // Create a new <li> element
    return listItem; // Return the created list item
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


