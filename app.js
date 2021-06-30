const navCollapseButton = document.querySelector(".nav-collapse-button")
const navBar = document.querySelector(".nav-bar")
const allToHide = document.querySelectorAll(".nav-to-hide")
let navCollapsed = false;
navCollapseButton.addEventListener('click', () => {
    if (navCollapsed) {
        navBar.classList.add("nav-bar-collapsed")
    } else {
        navBar.classList.remove("nav-bar-collapsed")
    }
    allToHide.forEach(element => {
        if (navCollapsed) {
            element.classList.add("nav-hide")
        } else {
            element.classList.remove("nav-hide")
        }
                
    });
    rotateCollapseButton()

    navCollapsed = !navCollapsed
})
function rotateCollapseButton() {
    if (navCollapsed) {
        navCollapseButton.classList.add("rotated-collapse-button")
    } else {
        navCollapseButton.classList.remove("rotated-collapse-button")
    }
}