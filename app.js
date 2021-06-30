const navCollapseButton = document.querySelector(".nav-collapse-button")
const navBar = document.querySelector(".nav-bar")
const navIcons = document.querySelectorAll(".nav-item-icon")
const allToHide = document.querySelectorAll(".nav-to-hide")
let navCollapsed = false;

navCollapseButton.addEventListener('click', () => {
    addRemoveClassCollapse(navBar, "nav-bar-collapsed")
    hideLabels();
    addTooltips();
    addRemoveClassCollapse(navCollapseButton, "rotated-collapse-button")
    navCollapsed = !navCollapsed
    
})
function hideLabels() {
    allToHide.forEach(element => {
        addRemoveClassCollapse(element, "nav-hide")                
    });
}
function addTooltips() {
    navIcons.forEach(element => {
        addRemoveClassCollapse(element, "nav-tooltip")                
    });
}

function addRemoveClassCollapse(element, cssClass) {
    if (navCollapsed) {
        element.classList.add(cssClass)
    } else {
        element.classList.remove(cssClass)
    }
}