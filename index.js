const questionBox = document.querySelectorAll(".qa-flex");
const answer = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");
const arrow = document.querySelectorAll(".arrow-icon");

questionBox.forEach((question, index) => {
  question.addEventListener("click", () => {
    if (answer[index].classList.contains("hidden")) {
      answer[index].classList.remove("hidden");
      questions[index].classList.add("active-q");
      arrow[index].classList.add("active-arrow");
    } else {
      answer[index].classList.add("hidden");
      questions[index].classList.remove("active-q");
      arrow[index].classList.remove("active-arrow");
    }
  });
});
