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
export const getRandomQuiz = async (numberOfQuizzes) => {

    const url = "https://opentdb.com/api.php?amount=" + numberOfQuizzes + "&category=21&difficulty=medium&type=multiple"

    let response = await fetch(url);
    let data = await response.json();
    //console.log(data.results);

    return data.results.map(q => {
        const correct = Math.floor(Math.random() * Math.floor(3));
        const answers = q.incorrect_answers;
        answers.splice(correct, 0, q.correct_answer);

        return {
            question: q.question,
            answers: answers,
            indexOfRightAnswer: correct,
            id: 0
        }
    });

    /*if (numberOfQuizzes < 1) {
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

    return Array.from(selection).map((e) => quizzes[e]);*/
};
