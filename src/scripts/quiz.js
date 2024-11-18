function toggleSidebar(index) {
    const sidebar = document.getElementById(`sidebar-${index}`);
    sidebar.classList.toggle("active");
  }

function checkAnswer(button, isCorrect) {
    const buttons = button.parentElement.parentElement.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true); // Disable all buttons after answering

    if (isCorrect) {
      button.classList.add("correct");
      showResult("Correct!");
    } else {
      button.classList.add("incorrect");
      showResult("Incorrect! Try the next question.");
    }
}

function showResult(message) {
    const resultDiv = document.querySelector(".result");
    resultDiv.textContent = message;
}