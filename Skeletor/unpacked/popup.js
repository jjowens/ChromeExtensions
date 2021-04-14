function updateContent(activeTab) {
    console.log("Current Active Tab");
    console.log({activeTab});
    console.log("My Tab ID is " + activeTab.id);

    executerScript(activeTab.id, 'document.all[0].innerText', false, 'document_start', updateTextArea);
}

function executerScript(tabID, code, allFrames, runAt, callback) {
    chrome.tabs.executeScript(tabID, {
        code: code,
        allFrames: allFrames,
        runAt: runAt,
    }, callback);
}

function parseResults(results) {
    console.log("Parsed Results");
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
        });
    })

});