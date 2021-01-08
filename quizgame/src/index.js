import {getRandomQuiz} from "./quizzes";

const outputQuiz = document.getElementById("display-quiz");
let quizObj;
let correctAnswer;

const newGame = () => {
    quizObj = getRandomQuiz();
    let answers = getButtons();

    // Display on page
    outputQuiz.innerHTML = `
        <h1>${quizObj.question}</h1>
        <div>${answers}</div>
    `;
}

// Get all answers in html button tags
const getButtons = () => {
    let answers = "";

    quizObj.answers.map((answer, index) => {
        answers += `<button onclick="checkAnswer(this)" id="answer-${answer}">${answer}</button>`;

        // Set correct answer
        if(index === quizObj.indexOfCorrectAnswer) {
            correctAnswer = answer;
        }
    })

    return answers;
}

const checkAnswer = (e) => {
    if (e.innerHTML.toString() === correctAnswer.toString()) {
        displayCorrect();
    } else {
        displayWrong();
    }
}

const displayCorrect = () => {
    // Could add more styling here
    alert("correct");
    newGame();
}

const displayWrong = () => {
    // Could add more styling here
    alert("Try again");
}

newGame();