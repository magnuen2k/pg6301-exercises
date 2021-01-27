const { getRandomQuiz } = require("../src/quizzes");

test("Test get random quiz", () => {
    const quiz = getRandomQuiz();
    expect(quiz.answers.length).toBe(4);
});
