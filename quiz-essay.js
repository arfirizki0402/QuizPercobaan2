document.addEventListener('DOMContentLoaded', function() {
    const questionText = document.getElementById('question-text');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const feedbackContainer = document.getElementById('feedback');

    const questions = [
        "Apa ibu kota dari Prancis?",
        "Siapa presiden pertama Indonesia?",
        "Apa nama planet terbesar di tata surya?"
    ];

    let currentQuestionIndex = 0;

    function showQuestion() {
        questionText.textContent = questions[currentQuestionIndex];
    }

    function checkAnswer() {
        let correctAnswers = ["Paris", "Soekarno", "Jupiter"];
        if (answerInput.value.trim().toLowerCase() === correctAnswers[currentQuestionIndex].toLowerCase()) {
            feedbackContainer.textContent = "Jawaban benar!";
        } else {
            feedbackContainer.textContent = "Jawaban salah. Coba lagi.";
        }
    }

    submitButton.addEventListener('click', function() {
        checkAnswer();
    });

    showQuestion();
});
