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

  var targetNode = document.querySelector(".sc-fhYwyz.dBOxRe"); // full box
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
  var targetNode = document.querySelector(".sc-fhYwyz.dBOxRe");  // full box


  if (targetNode) {
    // Div is present, run the code
    createButton("Welcome", "You're welcome 😀 👍", 0);
    createButton("Thanks", "Thank you for contacting us. If you have any further questions, feel free to reach out. Have a wonderful day!", 1);
    createButton(
      "free vs paid",
      "Our paid sessions are conducted Everyday online (all 7 days) and we provide other services like personal habit tracking, habit building, water reminder  physiotherapist, juice fast, mindful journaling and many more.\n\nHere's the link to check our membership plan pricing:\nhttps://habuild.in/membershipplan",
      2
      );
      createButton(
        "Start later",
        "Yes, it is possible after you make the payment, you will receive additional information form where you can change the joining date\n\nHere's the link to make the payment:\n\nhttps://habuild.in/membershipplan",
        3
      );
      createButton(
        "Gift Status",
        "So sorry for the inconvenience please let us know your registered name and number for the challenge we will forward that to our concern team and they will look into that.\n\nEmail: referralgift@habuild.in\nContact Number: 917969213330 or wa.me/917969213330",
        4
      );
      createButton(
        "upgrade",
        "Yes you can upgrade your subscription within a week from your dashboard.\n\nLogin to your dashboard using this link:\n\nhttps://me.habuild.in",
        5
      );
      createButton(
        "1-On-1",
        "As our focus is Habit building we keep the session simple & as the number of people in session if more it is difficult to give personal attention during the session. However, if you have any queries you can ask on whatsapp or you can book a call with physiotherapist for an online consultation.",
        6
      );
      createButton(
        "certificate",
        "Please go to your dashboard to download the certificate:\n\nLink: https://habit.yoga/profile",
        7
      );
      createButton(
        "Schedule",
        "Monday- Breathing and Light Yoga\nTuesday- Lower Body\nWednesday-Upper Body\nThursday- Core and Laughter Yoga\nFriday-Flexibility\nSaturday- Stamina\nSunday- Surya Namaskars and Variations\n\nFirst 30 mins will be warm-ups, exercise and yoga according to the day wise schedule. The last 15 minutes each day is fixed for the 16 set of asanas.",
        8
      );
      createButton(
        "yoga query",
        "You can ask your  problems and queries  on our official communication number which will be allocated to you after your payment is processed.",
        9
      );
      createButton(
        "attendance",
        "We track your habits/attendance through your personal link. Please join through your personal link daily to mark attendance",
        10
      );
      createButton(
        "juice fast",
        "Juice Fast is a form of detox. It is a powerful and effective way to keep the body's systems in check. Benefits of a 2 day Juice Fast:\n- increases beneficial gut bacteria,\n- clears skin,\n- improves heart health,\n- improves general well-being,\n- boosts levels of important vitamins and antioxidants, including folate, vitamin C, vitamin E, and beta carotene.\n\n You will also learn more about it in a guided orientation. Following which we will have meet up sessions, and access to video recipes, written recipes, PDF, FAQs will be provided.",
        11
      );
      createButton(
        "MJW",
        "Mindful Journaling is a 5-day workshop that covers the importance of journaling as a self-care practise. In this workshop, you'll learn:\n- how to release stress and find emotional relief\n- how to improve self-awareness\n- how to rewire mind to build positivity\n- how to build a self care practise\n- how to make a journaling habit\n\nUsing these 5 tools will help you lead a calmer and happier life.",
        12
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
