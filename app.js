const navCollapseButton = document.querySelector(".nav-collapse-button")
const navBar = document.querySelector(".nav-bar")
const allToHide = document.querySelectorAll(".nav-to-hide")
let navCollapsed = false;
navCollapseButton.addEventListener('click', () => {
    allToHide.forEach(element => {
        if (navCollapsed) {
            element.classList.add("nav-hide")
        } else {
            element.classList.remove("nav-hide")
        }
                
    });
    if (navCollapsed) {
        navBar.classList.add("nav-bar-collapsed")
        navCollapsed = false
    } else {
        navBar.classList.remove("nav-bar-collapsed")
        navCollapsed = true
    }

    
})