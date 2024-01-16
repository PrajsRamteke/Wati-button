/** @format */

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "createButtons") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Send a message to the content script of the active tab
      chrome.tabs.sendMessage(tabs[0].id, { action: "createButtons" });
    });
  }
});
