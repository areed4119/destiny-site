function enterOrbit() {
    document.getElementById("enter-screen").classList.add("hidden");
    document.getElementById("main-site").classList.remove("hidden");
}

function showMessage() {
    const message = `
Final Transmission

I started this project because Destiny means a lot to you.

I wanted to create something from your world,
even though I am still learning about it.

Thank you for all the conversations,
the laughs,
and all the time we've spent together.

Eyes up, Guardian.
    `;

    typeText("secret-message", message);
}

function typeText(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerText = "";

    let index = 0;

    const typing = setInterval(function () {
        element.innerText += message[index];
        index++;

        if (index >= message.length) {
            clearInterval(typing);
        }
    }, 35);
}

function easterEgg() {
    document.getElementById("easter-egg").innerText =
        "Classified File Unlocked: You are secretly my favorite side quest.";
}

function checkCode() {
    const code =
        document.getElementById("codeInput").value.toLowerCase();

    if (code === "fireteam") {
        document.getElementById("codeResult").innerText =
            "ACCESS GRANTED";

        document
            .getElementById("classified-file")
            .classList.remove("hidden");

    } else {
        document.getElementById("codeResult").innerText =
            "ACCESS DENIED.";
    }
}

const statusMessages = [
    "Connecting to Tower...",
    "Scanning Fireteam Records...",
    "Guardian Detected...",
    "Personal Archive Loaded..."
];

let current = 0;

setInterval(() => {
    document.getElementById("statusText").innerText =
        statusMessages[current];

    current++;

    if (current >= statusMessages.length) {
        current = 0;
    }
}, 3000);

const ghostMessages = [
    "Ghost: I have scanned the archive. This Guardian appears to be important to Amber.",
    "Ghost: Warning. High levels of appreciation detected.",
    "Ghost: Mission update: make him smile at least once.",
    "Ghost: This website has made the creator happy and determined again.",
    "Ghost: Guardian, your presence has improved morale by 100%.",
    "Ghost: Final analysis: you are not just part of the fireteam. You are the favorite."
];

let ghostIndex = 0;

function ghostTalk() {
    const chat = document.getElementById("ghostChat");

    const newMessage = document.createElement("p");
    newMessage.className = "ghost-message";
    newMessage.innerText = ghostMessages[ghostIndex];

    chat.appendChild(newMessage);

    ghostIndex++;

    if (ghostIndex >= ghostMessages.length) {
        ghostIndex = 0;
    }
}