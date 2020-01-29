fadeOutElement = (elem) => {

    requestAnimationFrame(() => fadeOut(elem));
    const fadeOut = (elem) => {
        if (!elem.style.opacity) {
            elem.style.opacity = 1;
        }
        if (elem.style.opacity > 0) {
            elem.style.opacity -= 0.1;
            requestAnimationFrame(() => fadeOut(elem));
        } else {
            elem.style.display = "none";
        }
    }
};

animateVh = (dir, elem, setInitialState = false) => {
    const navbar = document.getElementById("navbar");

    if (setInitialState) {
        elem.style.display = "initial";
        elem.style.height = 0;
    }

    if (dir === "open") {
        if (parseInt(elem.style.height, 10) < window.innerHeight * 1.2) {

            const incr = String(parseInt(elem.style.height, 10) + window.innerHeight / 20); 
            elem.style.height = incr > window.innerHeight * 1.2 ? window.innerHeight * 1.2 + 1 + "px" : incr + "px";

            requestAnimationFrame(() => animateVh(dir, elem));
        }
        if (parseInt(elem.style.height, 10) > window.innerHeight * 0.8) {
            Array.from(elem.children).map((elem) => {
                requestAnimationFrame(() => animateOpacity(elem))
            })
        }
    } else if (dir === "close"){
        if (parseInt(elem.style.height, 10) > 0) {

            const subst = String(parseInt(elem.style.height, 10) - window.innerHeight / 13);
            elem.style.height = subst < 0 ? "0" + "px" : subst + "px";

            requestAnimationFrame(() => animateVh(dir, elem));
        } else {
            navbar.style.opacity = 0.8;
            elem.style.display = "none";
        }
        Array.from(elem.children).map((elem) => {
            elem.style.opacity = 0
        })
    }
};

animateOpacity = (elem) => {
    if (!elem.style.opacity) elem.style.opacity = 0;
    if (elem.style.opacity < 1) {
        elem.style.opacity = parseFloat(elem.style.opacity) + 0.2;
        requestAnimationFrame(() => { animateOpacity(elem) })
    }
};




module.exports = {
    fadeOutElement,
    animateVh,
}