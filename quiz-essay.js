document.addEventListener('DOMContentLoaded', function() {
    const questionText = document.getElementById('question-text');
    const answerInput = document.getElementById('answer');
    const nextButton = document.getElementById('next');
    const feedbackContainer = document.getElementById('feedback');

    const questions = [
        "Apa ibu kota dari Prancis?",
        "Siapa presiden pertama Indonesia?",
        "Apa nama planet terbesar di tata surya?"
    ];

    let currentQuestionIndex = 0;

    function showQuestion() {
        questionText.textContent = questions[currentQuestionIndex];
        answerInput.value = '';
        feedbackContainer.textContent = '';
    }

    function handleNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            feedbackContainer.textContent = 'Anda telah menyelesaikan semua pertanyaan.';
            nextButton.disabled = true;
        }
    }

    nextButton.addEventListener('click', function() {
        handleNextQuestion();
    });

    showQuestion();
});