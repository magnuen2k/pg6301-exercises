const quiz = [
    ["Best CS:GO pro?", "Brax", "Simple", "Coldzera", "M0E TV", 1],
]

const outputQuiz = document.getElementById("display-quiz");
let quizObj;
let correctAnswer;

const newGame = () => {
    quizObj = getQuiz();
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

    for (let i = 0; i < quizObj.length; i++) {
        console.log(quizObj[i])
    }

    /*Object.keys(quizObj).map(key => {
        if (key.includes("answer_")) {
            answers += `<button onclick="checkAnswer(this)" id="${key.charAt(key.length - 1)}">${quizObj[key]}</button>`;
        }

        if (key.includes(quizObj.indexOfCorrectAnswer)) {
            correctAnswer = quizObj[key];
        }
    });*/
    return answers;
}

// Get a random quiz
const getQuiz = () => {
    return quiz[Math.floor(Math.random() * quiz.length)];
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