document.getElementById("send-button").addEventListener("click", () => {
    const input = document.getElementById("message-input");
    const message = input.value.trim();
    if (message) {
        const messagesContainer = document.getElementById("messages");

        // User message
        const userMessage = document.createElement("div");
        userMessage.className = "message user";
        userMessage.textContent = message;
        messagesContainer.appendChild(userMessage);

        // Bot response
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.textContent = "Thanks for your message!";
        messagesContainer.appendChild(botMessage);

        // Clear input
        input.value = "";

        // Auto-scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
