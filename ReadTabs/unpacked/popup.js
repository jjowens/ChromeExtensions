document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btnReadContent");

    btn.addEventListener('click', function() {
       chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            console.log("Review Tabs");
            console.log({tabs});

            var tabID = tabs[0].id;

            console.log("ID is " + tabs[0].id);
            //"document.all[0].innerText"
            chrome.tabs.executeScript(tabID, { code: `(${ reviseContent })()` });

            chrome.tabs.executeScript(tabID, { code: `(${ replaceName('Cameron', 'Doris') })()`});

        });
    })

});

function executerScript(tabID, code, allFrames, runAt, callback) {
    chrome.tabs.executeScript(tabID, {
        code: code,
        allFrames: allFrames,
        runAt: runAt,
    }, callback);
}

function updateContent() {
    let paraObjs = document.getElementsByTagName("p");

    document.getElementById("txtContent").val = "Diamond!";

    if (paraObjs !== undefined) {
        console.log("We have paragraphs!");

        console.log(paraObjs);
    } else {
        console.log("we have nothing!");
    }

    for (let index = 0; index < paraObjs.length; index++) {
        const element = paraObjs[index];

        console.log(element);
        
    }
}

function reviseContent() {
    let paraObjs = document.getElementsByTagName("p");

    for (let index = 0; index < paraObjs.length; index++) {
        const element = paraObjs[index];

        element.innerText = element.innerText + ". Finished!";
        
    }
}

function replaceName(oldName, newName) {
    let paraObjs = document.getElementsByTagName("p");

    console.log("Old name is " + oldName);
    console.log("New Name is " + newName);

    let re = new RegExp(oldName, 'g');

    for (let index = 0; index < paraObjs.length; index++) {
        const element = paraObjs[index];

        let txtContent = element.innerText.replace(re, newName);

        element.innerText = txtContent;
        
        console.log(element.innerText);
    }
}

function parseResults(results) {
    console.log("Reached callback");

    if (results !== undefined) {
        console.log("Got results");
        console.log({results});
    } else {
        console.log("No results. Meh...");
    }
    
}