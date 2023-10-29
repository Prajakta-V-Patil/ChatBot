const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", function () {
    const userMessage = userInput.value;
    addMessage("user", userMessage);
    userInput.value = ""; // Clear the input field
    respondToUser(userMessage);
});

function addMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender + "-message");
    messageDiv.textContent = message;
    chatBody.appendChild(messageDiv);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;
}

function respondToUser(userMessage) {
    let botResponse;

    // Respond to specific user messages
    if (userMessage.toLowerCase().includes("hi")) {
        botResponse = "Hello!";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        botResponse = "I'm just a chatbot.";
    } else if (userMessage.toLowerCase().includes("who made you")) {
        botResponse = "I was created by Prajakta Vithal Patil.";
    } else if (userMessage.toLowerCase().includes("who created you")) {
        botResponse = "I was created by Prajakta Vithal Patil.";
    }else if (userMessage.toLowerCase().includes("current time")) {
        const currentTime = new Date().toLocaleTimeString();
        botResponse = "The current time is " + currentTime + ".";
    }else if (userMessage.toLowerCase().includes("bye")) {
        botResponse = "Bye have a good day. It was nice talking to you!!! ♡  ";
    }else {
        botResponse = "I'm not sure I understand that.";
    }

    setTimeout(function () {
        addMessage("bot", botResponse);
    }, 500);
}

addMessage("bot", "Hi there! How can I assist you today?");

