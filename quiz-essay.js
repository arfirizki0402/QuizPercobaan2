document.addEventListener('DOMContentLoaded', function() {
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const answerInput = document.getElementById('answer');
    const nextButton = document.getElementById('next');
    const feedbackContainer = document.getElementById('feedback');

    const questions = [
        "Apa ibu kota dari Prancis?",
        "Siapa presiden pertama Indonesia?",
        "Apa nama planet terbesar di tata surya?",
        "Apa bahasa resmi Brasil?",
        "Siapa penulis novel '1984'?",
        "Di mana Tembok Besar China berada?",
        "Apa mata uang Jepang?",
        "Siapa penemu telepon?",
        "Apa ibu kota Italia?",
        "Berapa banyak benua di dunia?",
        "Siapa yang menulis 'Hamlet'?",
        "Apa yang merupakan simbol kimia untuk air?",
        "Siapa yang pertama kali menginjakkan kaki di bulan?",
        "Apa warna primer dalam seni rupa?",
        "Siapa presiden Amerika Serikat saat ini?"
    ];

    let currentQuestionIndex = 0;
    const answers = [];

    function showQuestion() {
        questionNumber.textContent = `Pertanyaan ${currentQuestionIndex + 1}`;
        questionText.textContent = questions[currentQuestionIndex];
        answerInput.value = '';
        feedbackContainer.textContent = '';
    }

    function handleNextQuestion() {
        // Save the current answer
        answers.push(answerInput.value);

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            localStorage.setItem('quizAnswers', JSON.stringify(answers));
            window.location.href = 'submit-answers.html';
        }
    }

    nextButton.addEventListener('click', function() {
        handleNextQuestion();
    });

    showQuestion();
});