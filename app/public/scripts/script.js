window.onload = () => {
    const loader = document.getElementById('loader');
    fadeOut(loader);
}

const fadeOut = (elem) => {
    const fade = setInterval(function () {
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