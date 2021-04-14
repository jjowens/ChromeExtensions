function replaceContent(tagName, searchKeyword, replacement) {
    let objs = document.getElementsByTagName(tagName);

    let re = new RegExp(searchKeyword, 'g')

    for (let index = 0; index < objs.length; index++) {
        const element = objs[index];
        
        if (element.innerText.indexOf(searchKeyword) > -1) {
            element.innerText = element.innerText.replace(re, replacement);
        }
    }
}

function replaceMultipleTags(tagNames, searchKeyword, replacement) {
    let tagArray = tagNames.split(",");

    for (let index = 0; index < tagArray.length; index++) {
        const element = tagArray[index];
        replaceContent(element.trim(), searchKeyword, replacement);
    }
}

replaceMultipleTags("h1, h3, p", "Boris Johnson", "Skeletor");
replaceMultipleTags("h1, h3, p", "Piri Patel", "Evil-Lyn");
replaceMultipleTags("h1, h3, p", "Prince Philip", "Man At Arms");


