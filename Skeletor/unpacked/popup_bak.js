function updateContent(activeTab) {
    console.log("Current Active Tab");
    console.log({activeTab});
    console.log("My Tab ID is " + activeTab.id);

    /*
    chrome.tabs.executeScript(activeTab.id, {
        code: 'document.all[0].getElementsByTagName("p")',
        allFrames: false, // this is the default
        runAt: 'document_start', // default is document_idle. See https://stackoverflow.com/q/42509273 for more details.
    }, function(results) {
        // results.length must be 1
        var result = results[0];
        console.log("Page Results");
        console.log({result});

        console.log({results});
    });
    */

    //activeTab.title = "This is a test";

    chrome.tabs.executeScript(activeTab.id, {
        code: 'document.all[0].innerText',
        allFrames: false, // this is the default,
        runAt: 'document_start',
    }, function(results) {
        // results.length must be 1
        var result = results[0];
        //console.log("Single Result");
        //console.log({result});

        //console.log("Multiple Results");
        //console.log({results});

        console.log(result);
        result = result.replace(/Prince Philip/g, 'Skeletor');    

        document.getElementById("txtOutput").value = result;

    });
}

function executerScript(tabID, code, allFrames, runAt, callback) {
    chrome.tabs.executeScript(tabID, {
        code: code,
        allFrames: allFrames,
        runAt: runAt,
    }, callback(results));
}

function parseResults(results) {
    console.log({results});
}

function updateTextArea(results) {
    let result = results[0];
    document.getElementById("txtOutput").value = result;
}
 
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btnFindReplace");

    btn.addEventListener('click', function() {
       chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            updateContent(tabs[0]);
            //console.log({tabs});
            //console.log(tabs[0]);

        });
    })

});