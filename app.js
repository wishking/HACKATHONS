"use strict";
function toggleVisibility2(sectionId) {
    // Get the section by its ID
    const section = document.getElementById(sectionId);
    // If the section exists, toggle the 'hidden' class
    if (section) {
        section.classList.toggle('hidden');
    }
}
