const insertImages = (title, text, images) => {
    const imageRegex = /{{img-(\d)}}/g;
    const matches = text.matchAll(imageRegex);
    let updatedText = text;
    for(let match of matches) {
        const regExp = new RegExp(match[0], "g");
        updatedText = updatedText.replace(regExp, createImageMarkdown(title, images[Number(match[1])]));
    }
    return updatedText;
}

const createImageMarkdown = (title, image) => {
    let imgLink;
    if (process.browser) {
        imgLink = window.location.href + '/' + image.identifier;
    } else {
        imgLink = `${process.env.ROOT_URL}/api/blog/images/${title}/${image.identifier}`;
    }
    return `{![${image.description}](${imgLink})}`;
}

module.exports = {
    insertImages
}