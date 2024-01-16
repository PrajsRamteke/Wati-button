/** @format */

document.addEventListener("DOMContentLoaded", function () {
  var createButtonsButton = document.getElementById("createButtons");

  createButtonsButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "createButtons" });
  });
});
