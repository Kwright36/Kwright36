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

function generateTip() {
    const tips = [
        "Python uses indention. Remember to make sure that everything is in line when working.",
        "Tired of writing several different if loops? Consider combining them with elif.",
        "Semicolons got you down? Not with Python around.",
        "Check when it might be better to use a while loop.",
        "Remember: Python is case-sensitive."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('pythonTip').textContent = randomTip;
}