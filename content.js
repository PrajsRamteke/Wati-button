/** @format */


setInterval(function () {
  var chatInput = document.querySelector(".sc-jzgbtB.dRmhTs"); // .sc-jzgbtB.dRmhTs
  if (chatInput !== null) {
    chatInput.style.top = "-50%";
  }
}, 3000);

setInterval(function () {
  var shortcuts = document.querySelectorAll(".shortcut-content-text"); 
  for (var i = 0; i < shortcuts.length; i++) {
    shortcuts[i].style.color = "#1b00a9";
  }
}, 100);

// Function to create the buttons
function createButton(text, data, index) {
  var container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = "-16%";
  container.style.left = index * 100 + "px";
  container.style.zIndex = "9999";

  var button = document.createElement("div");
  button.innerHTML = text;
  button.style.position = "relative";
  button.style.color = "Black";
  button.style.cursor = "pointer";
  button.style.fontSize = "13px";
  button.style.fontWeight = "bolder";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.style.width = "90px";
  button.style.height = "24px";
  button.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
  button.style.backgroundColor = "#F5F5F5";
  button.style.borderRadius = "5px";
  button.style.margin = "0 5px";

  var chatArea = document.querySelector(".sc-emmjRN.buffs.chat-area"); // .sc-emmjRN.buffs.chat-area || Done
  chatArea.style.marginBottom = "20px";

  // var chatInput = document.querySelector(".chat-input-typing-status-bar");
  // chatInput.style.top = "-80%";

  button.addEventListener("click", function () {
    var inputField = document.querySelector("#box-chat"); // #box-chat || Done .sc-fhYwyz.dBOxRe 
    if (inputField) {
      inputField.value = data;
      inputField.focus();
      updateCode(data);
    }
  });

  container.appendChild(button);

  // var targetNode = document.querySelector(".sc-laTMn.kcXlau"); // .sc-bUrKqX.hWrzoq
  var targetNode = document.querySelector(".sc-laTMn.kcXlau") || document.querySelector(".sc-bUrKqX.hWrzoq");
  if (targetNode) {
    targetNode.appendChild(container);
  }
}

// Function to update the code
function updateCode(data) {
  var pasteButton = document.querySelector("#pasteButton");
  if (pasteButton) {
    pasteButton.innerHTML = data;
  }
}

// .sc-kTUwUJ.giHtTy | .sc-fhYwyz.dBOxRe  .active-chat-input.active-chat-input_false.false

// Function to check if the desired div is present and run the code
function checkDivAndRunCode() {
  // const targetNode = document.querySelector(".sc-laTMn.kcXlau"); //same || Done  sc-laTMn kcXlau
  var targetNode = document.querySelector(".sc-laTMn.kcXlau") || document.querySelector(".sc-bUrKqX.hWrzoq");


  if (targetNode) {
    // Div is present, run the code
    createButton("Welcome", "You're welcome 😀 👍", 0);
    createButton("Thanks", "Thank you so much😊😊🙏", 1);
    createButton(
      "Hello",
      "Hello, my name is Prajwal from Habuild. ",
      2
      );
      createButton(
        "Batchs",
        "We have three morning batches and three evening batches: (IST)\n\n⏰ Batch 1: 6:30 AM - 7:15 AM\n⏰ Batch 2: 7:30 AM - 8:15 AM\n⏰ Batch 3: 8:30 AM - 9:15 AM\n\n⏰ Batch 4: 5:00 PM- 5:45 PM\n⏰ Batch 5: 6:00 PM - 6:45 PM\n⏰ Batch 6: 7:00 PM - 7:45 PM\n\nThe joining link for all batches is the same, and you can join any of the above 6 batches. All timings are in Indian Standard Time",
        3
      );
    createButton(
      "Dance-WC",
      "Hello Habuilders😃\nGet fit with Trishala Bothra \n\n*Timings*\nMorning:\n⏰8:30 - 9:15 AM IST (Mor)\n\nEvening:\n⏰7:00 - 7:45 PM IST (Eve)\n⏰8:00 - 8:45 PM IST (Eve)\n\n*Session Format*\n🤸‍♀Stretching session : Every Monday, Wednesday, and Friday\n\n💃🏻Dance sessions : Every Tuesday, Thursday, and Sunday\n\nPlease join this whatsapp Community to get the joining link and updates:\n\n*Link:*\nhttps://i.habuild.in/dance-stretch-community",
      4
    );
    createButton(
      "Start-Later",
      "Yes, it is possible after you make the payment, you will be redirected to a form where you can choose your Start date.\n\n*Here's the payment link:*\nhttps://i.habuild.in/membershipplan",
      5
    );
    createButton(
      "TQ",
      "Thank you for your subscription  :)\n\nWe are excited to have you on board and start the journey for Yoga every day.\n\nClick here to check if you have received a confirmation of Payment:\n\nLink:➡️ wa.me/918600039721",
      6
    );
    createButton(
      "SS",
      "Could you please share the screenshot of the payment made? Which has the date, time, and transaction id in it 🙏🙏",
      8
    );
    createButton(
      "UPIForm",
      "*Thanks a lot for subscribing:* \n*Please fill this form to get the links:*\n\nhttps://habuild.in/memberpayment\n_Please reply back with a YES when done_ ",
      10
    );

    createButton(
      "Bank",
      "HDFC A/C: 59203000100100\n\nIFSC Code: HDFC0004704\n\nName : Habuild Healthtech Pvt Ltd\n\nShare screenshot of transfer on 8600039721",
      7
    );
    createButton(
      "DanceLink",
      "LIVE Dance and stretch Zumba session link \n\nhttps://i.habuild.in/dance-stretch-live",
      5
    );
    createButton(
      "CloseChat",
      "Thank you for contacting us. If you have any further questions, feel free to reach out. Have a wonderful day!",
      9
    );

    // Disconnect the observer after running the code
    observer.disconnect();
  }
}

// Create a new MutationObserver
const observer = new MutationObserver(checkDivAndRunCode);

// Wait for 2 seconds before checking for the div
setTimeout(function () {
  // Start observing the body for changes
  observer.observe(document.body, { childList: true, subtree: true });
}, 2000);
