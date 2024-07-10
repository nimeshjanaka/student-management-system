// script.js
document.addEventListener("DOMContentLoaded", function () {
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  const chatBody = document.getElementById("chat-body");

  sendBtn.addEventListener("click", function () {
    const message = chatInput.value.trim();
    if (message) {
      addMessage(message, "self");
      chatInput.value = "";
      // Simulate a response (this would be replaced by actual chat logic)
      setTimeout(
        () => addMessage("This is an automated response.", "other"),
        1000
      );
    }
  });

  function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});
