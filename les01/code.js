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
    // Get a random quiz
    let quizObj = getQuiz();

    // Display question and answers
    let question = quizObj.question;

    let answers = "";

    Object.keys(quizObj).map(key => {
        if (key.includes("answer")) {
            answers += `<button onclick="checkAnswer(this)" id="${key.charAt(key.length-1)}">${quizObj[key]}</button>`;
        }

        if (key.includes(quizObj.indexOfCorrectAnswer)) {
            correctAnswer = quizObj[key];
        }
    });

    outputQuiz.innerHTML = `
        <h1>${question}</h1>
        <div>${answers}</div>
    `;
}

const getQuiz = () => {
    return quiz[Math.floor(Math.random() * 2)];
}

const checkAnswer = (e) => {
    if (e.innerHTML.toString() === correctAnswer.toString()) {
        alert("correct");
        newGame();
    } else {
        alert("Try again");
    }
}

newGame();