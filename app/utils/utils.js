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

const formatDate = (date, monthFormat = 'short') => {
    const d = new Date(date);
    return {
        month: d.toLocaleString('en-US', {month: monthFormat}),
        year: d.getFullYear(),
        day: d.getDate(),
        time: `${d.getHours() < 10 ? '0' + d.getHours() : d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}`
    }
};

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const parsePostTitle = (title) => {
    let parsedTitle = title.replace(/\-/g, " ").replace(/\_/g, "-");
    return capitalize(parsedTitle);
};

const getColorScheme = (colorScheme) => {
    const colors = require('../jss-styles/colors').default;

    const resultColorScheme = {};
    const defaultColorScheme = {
        paragraph: `${colors.defaultParagraph}`,
        header: `${colors.mint}`,
        standOut: `${colors.lightMint}`,
        secondaryBackground: '#0d0d0d',
        background: "#111"
    }

    if (!colorScheme) {
        return defaultColorScheme;
    }

    Object.keys(defaultColorScheme).forEach(key => {
        colorScheme[key] ? 
        resultColorScheme[key] = colorScheme[key] : 
        resultColorScheme[key] = defaultColorScheme[key]
    });

    return resultColorScheme;
};

const getWebsiteRootUrl = () => {
    return process.browser ? 
            window.location.protocol + "://" + window.location.hostname
            : process.env.ROOT_URL;
}

const toggleLanguageSelector = (dir) => {
    const langSelect = document.getElementById('language');
    let setInitialState = false;

    if (dir === 'open') setInitialState = true;

    animateVh(dir, langSelect, setInitialState);
}


module.exports = {
    fadeOutElement,
    animateVh,
    formatDate,
    parsePostTitle,
    getColorScheme,
    getWebsiteRootUrl,
    toggleLanguageSelector
}