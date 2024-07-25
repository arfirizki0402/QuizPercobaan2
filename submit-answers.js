document.addEventListener('DOMContentLoaded', function() {
    const answersSummaryContainer = document.getElementById('answers-summary');
    const submitButton = document.getElementById('submit');
    const feedbackContainer = document.getElementById('feedback');

    // Assume answers are stored in local storage for simplicity
    const answers = JSON.parse(localStorage.getItem('quizAnswers')) || [];

    function displayAnswers() {
        answersSummaryContainer.innerHTML = '';
        answers.forEach((answer, index) => {
            const answerItem = document.createElement('div');
            answerItem.className = 'answer-item';
            answerItem.textContent = `Pertanyaan ${index + 1}: ${answer}`;
            answersSummaryContainer.appendChild(answerItem);
        });
    }

    function submitAnswers() {
        // Here you would send the answers to the server
        // For now, just display a confirmation message
        feedbackContainer.textContent = 'Jawaban berhasil dikirim!';
        localStorage.removeItem('quizAnswers'); // Clear the answers from local storage
    }

    submitButton.addEventListener('click', function() {
        submitAnswers();
    });

    displayAnswers();
});
