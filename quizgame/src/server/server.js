const express = require('express');
const path = require('path');
const app = express();

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
]

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.get("/api/quizzes", (req, res, next) => {
    console.log(quizzes);
    res.json(quizzes);
})

// Return correct page
app.use((req, res, next) => {
    if (req.method !== "GET") {
        return next();
    }
    res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Started on http://localhost:3000");
});