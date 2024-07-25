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

    function showQuestion() {
        questionNumber.textContent = `Pertanyaan ${currentQuestionIndex + 1}`;
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