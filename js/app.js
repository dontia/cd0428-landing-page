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
const createListItem = () => {
    const listItem = document.createElement("li"); // Create a new <li> element
    return listItem; // Return the created list item
}

/**
 * @description Creates a navigation link for a given section.
 * @param {HTMLElement} section - The section to link to.
 * @returns {HTMLAnchorElement} The created link.
 */
const createSectionLink = (section) => {
    const link = document.createElement("a");
    link.href = `#${section.id}`;          // Link to the section
    link.textContent = section.dataset.nav; // Set link text
    link.classList.add("menu__link");       // Add styling class

    return link;
}

/**
 * @description Debounces a function to limit the rate at which it can fire.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to wait before allowing the function to be called again.
 * @returns {Function} The debounced function.
 */
const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}


/**
 * End Helper Functions
 * Begin Main Functions
 */

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
 * @description Highlights the currently active section and its navigation link.
 * @param {Event} event - The scroll event (for potential future enhancements).
 */
function highlightActiveSection(event) {
    for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Check if section is in viewport
        const isInViewport = sectionTop <= 150 && sectionBottom >= 150;

        if (isInViewport) {
            section.classList.add("section--active");

            // Find and highlight corresponding nav link
            const navItem = navList.querySelector(`a[href="#${section.id}"]`);
            if (navItem) {
                navItem.classList.add("active-link");
            }
        } else {
            section.classList.remove("section--active");

            // Find and un-highlight corresponding nav link
            const navItem = navList.querySelector(`a[href="#${section.id}"]`);
            if (navItem) {
                navItem.classList.remove("active-link");
            }
        }
    }
}

/**
 * @description Scrolls smoothly to the target section when a navigation link is clicked.
 * @param {Event} event - The click event object.
 */
function scrollToSection(event) {
    event.preventDefault(); // Prevent the default link behavior (jumping to the section)
    const targetSectionId = event.target.getAttribute("href"); // Get the target section's ID from the link's href
    const targetSection = document.querySelector(targetSectionId); // Find the target section element

    targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section with smooth behavior
}

/**
 * @description Adds click event listeners to all navigation links to trigger smooth scrolling.
 */
function addClickEventListeners() {
    // Select all elements with the class 'menu__link'
    const navLinks = document.querySelectorAll(".menu__link");

    // Iterate through each navigation link
    for (const link of navLinks) {
        // Add a 'click' event listener to each link
        link.addEventListener("click", scrollToSection);
    }
}


/**
 * End Main Functions
 * Begin Events
*/

// Build menu
addListItemsToNav();

// Scroll to section on link click
addClickEventListeners();

// Set sections as active
document.addEventListener('scroll', highlightActiveSection);

