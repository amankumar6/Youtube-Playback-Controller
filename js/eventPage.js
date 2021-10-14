chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    if(request.todo == "showPageAction"){
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id)
        });
    }
});

chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab) => {
    if (tab.url.indexOf("https://www.youtube.com/") > -1 && changeInfo.url === undefined){
        chrome.tabs.executeScript(tabId, {file: "./js/executeScript.js"} );
    }
});