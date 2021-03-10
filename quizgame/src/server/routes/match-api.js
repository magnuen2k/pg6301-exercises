const express = require('express');
const {getRandomQuizzes} = require("../db/quizzes");

const router = express.Router();

router.get("/quizzes", (req, res, next) => {
    const payload = getRandomQuizzes(2);

    res.status(201).json(payload);
})

module.exports = router;