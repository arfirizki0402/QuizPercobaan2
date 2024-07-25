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

    function handleAnswerSubmission() {
        feedbackContainer.textContent = `Jawaban telah disimpan: ${answerInput.value}`;
        answerInput.value = '';
    }

    submitButton.addEventListener('click', function() {
        handleAnswerSubmission();
        // Optionally move to the next question or keep the current question
        // currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        // showQuestion();
    });

    showQuestion();
});