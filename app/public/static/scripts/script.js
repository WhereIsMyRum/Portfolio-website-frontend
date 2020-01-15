window.onload = () => {
    const navbar = document.getElementById('navbar');
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 770) {
        new Waypoint({
            element: document.getElementById('home'),
            handler: (direction) => { rightToZero(navbar, direction) },
            offset: -70
        });
    }

    setupScrolling();
    const moreLinks = document.getElementsByClassName("more");
    setInterval(() => {
        setupScrolling(moreLinks);
    }, 500);

    const loader = document.getElementById('loader');
    fadeOut(loader);
}

const fadeOut = (elem) => {
    const fade = setInterval(() => {
        if (!elem.style.opacity) {
            elem.style.opacity = 1;
        }
        if (elem.style.opacity > 0) {
            elem.style.opacity -= 0.1;
        } else {
            elem.style.display = "none";
            clearInterval(fade);
        }
    }, 40);
}

const rightToZero = (elem, direction) => {
    if (direction === "down") {
        elem.style.right = 0
    }
    if (direction === "up") {
        elem.style.right = "-100%"
    }
}

const setupScrolling = (elems) => {
    let links = elems;
    let setNavbarClosing = false
    let navbarToggler;
    if (!links) {
        navbarToggler = document.getElementsByClassName("navbar-toggler")[0];
        links = document.getElementsByClassName("nav-link");
        if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 770) {
            setNavbarClosing = true;
        }
    }

    for (let link of links) {
        link.addEventListener("click", () => {
            if (setNavbarClosing) navbarToggler.click();
            const targetedElement = document.getElementById(link.getAttribute('data-link'))
            if (targetedElement) {
                targetedElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        })
    }
}