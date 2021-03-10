const quizzes = [
    {
        question: "Whats nine plus ten?",
        answers: [30, 21, 19, 50],
        indexOfCorrectAnswer: 1,
    },
    {
        question: "Best CS:GO pro",
        answers: ["Brax", "Simple", "Coldzera", "M0E TV"],
        indexOfCorrectAnswer: 0,
    },
];

// Should take number of quizzes as input
const getRandomQuizzes = (numberOfQuizzes) => {

    if (numberOfQuizzes < 1) {
        throw "Invalid number of requested quizzes: " + n;
    }

    if (numberOfQuizzes > quizzes.length) {
        throw "Too many quizzes";
    }

    const selection = Array(numberOfQuizzes);

    let i = 0;
    while (i < numberOfQuizzes) {
        const k = Math.floor(quizzes.length * Math.random());
        if (selection.includes(k)) {
            continue;
        }

        selection[i] = k;
        i++;
    }

    return Array.from(selection).map((e) => quizzes[e]);
};

// Return all quizzes in the database
const getAllQuizzes = () => {
    return quizzes;
}

module.exports = {getAllQuizzes, getRandomQuizzes};