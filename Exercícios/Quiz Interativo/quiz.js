let score = 0;

    function checkAnswer(questionNumber, selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
            score++;
        }
    }

    function showResult() {
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = `Você acertou: ${score} / 5`;
    }