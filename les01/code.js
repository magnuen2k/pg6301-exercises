const quiz = [
    {
        question: "Whats nine plus ten?",
        answer_0: 30,
        answer_1: 21,
        answer_2: 19,
        answer_3: 42,
        indexOfCorrectAnswer: 1
    },
    {
        question: "Best CS:GO pro",
        answer_0: "Brax",
        answer_1: "Simple",
        answer_2: "Coldzera",
        answer_3: "M0E TV",
        indexOfCorrectAnswer: 0
    },
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

    Object.keys(quizObj).map(key => {
        if (key.includes("answer_")) {
            answers += `<button onclick="checkAnswer(this)" id="${key.charAt(key.length - 1)}">${quizObj[key]}</button>`;
        }

        if (key.includes(quizObj.indexOfCorrectAnswer)) {
            correctAnswer = quizObj[key];
        }
    });
    return answers;
}

// Get a random quiz
const getQuiz = () => {
    return quiz[Math.floor(Math.random() * 2)];
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