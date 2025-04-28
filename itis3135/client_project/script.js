window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (wdinwo.scrollY > 50) {
        header.classList.add("scrolled");

    } else {
        header.classList.remove("scrolled");
    }
});

function checkAnswer() {
    const answer = document.getElementById('quizAnswer').value.toLowerCase();
    const result = document.getElementById('quizResult');
    if (answer === 'string') {
        result.textContent = "Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "Not Quite!";
        result.style.color = "red";
    }
}