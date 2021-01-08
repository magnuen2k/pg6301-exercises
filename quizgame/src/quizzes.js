const quiz = [
    {
        question: "Whats nine plus ten?",
        answers: [30, 21, 19, 50],
        indexOfCorrectAnswer: 1
    },
    {
        question: "Best CS:GO pro",
        answers: [
            "Brax",
            "Simple",
            "Coldzera",
            "M0E TV",
        ],
        indexOfCorrectAnswer: 0
    },
]

// Should take number of quizzes as input
export const getRandomQuiz = () => {
    return quiz[Math.floor(Math.random() * quiz.length)];
}