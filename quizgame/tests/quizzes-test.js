const { getRandomQuiz } = require("../src/quizzes");

test("Test get random quiz", () => {
    const quiz = getRandomQuiz(1)[0];
    expect(quiz.answers.length).toBe(4);
});
