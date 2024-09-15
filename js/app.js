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
 * @description Creates a navigation link for a given section.
 * @param {HTMLElement} section - The section to link to.
 * @returns {HTMLAnchorElement} The created link.
 */
function createSectionLink(section) {
    const link = document.createElement("a");
    link.href = `#${section.id}`;          // Link to the section
    link.textContent = section.dataset.nav; // Set link text
    link.classList.add("menu__link");       // Add styling class

    return link;
}

/**
 * @description Iterates over sections and adds corresponding navigation links.
 * @uses createListItem
 * @uses createSectionLink
 */
function addListItemsToNav() {
    // Iterate through each section element on the page
    for (const section of sections) {
        const listItem = createListItem();     // Create list item
        const link = createSectionLink(section); // Create link for section
        listItem.appendChild(link);            // Add link to list item
        navList.appendChild(listItem);         // Add list item to nav
    }
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


