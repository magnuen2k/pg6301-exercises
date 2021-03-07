import React, {useState, useEffect} from "react";
import {getRandomQuiz} from "./quizzes";

export const Match = () => {
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        startNewMatch();
    }, [])

    const startNewMatch = async () => {
        const quiz = await getRandomQuiz(3);
        console.log("Dette er quizen: " + quiz);
        if (!quiz) {
            setError("Error connecting to server");
        }
        setError(null);
        setMatch({
            victory: false,
            defeat: false,
            quizzes: quiz,
            currentIndex: 0,
            numberOfQuizzes: quiz.length,
            score: 0
        })
    }

    const checkAnswer = (answerIndex) => {
        if (answerIndex === match.quizzes[match.currentIndex].indexOfCorrectAnswer) {
            if (match.currentIndex === match.numberOfQuizzes - 1) {
                setMatch({...match, victory: true, score: match.score + 1})
            } else {
                setMatch({
                    currentIndex: match.currentIndex + 1,
                    quizzes: match.quizzes,
                    numberOfQuizzes: match.numberOfQuizzes,
                    score: match.score + 1
                });
            }
        } else {
            setMatch({defeat: true});
        }
    };


    // If we didnt get a quiz, we display the error
    if (error) {
        return <h2>{error}</h2>
    }

    // Do this to make sure match state is set by useEffect, if not the match state will be null
    if (!match) {
        return (
            <h2>Loading...</h2>
        )
    }

    if (match.victory) {
        return (
            <div className="game-result">
                <div className="score">Score: {match.score}</div>
                <h2>You Won!</h2>
                <div className="action">
                    <button className="play new-game-button" onClick={startNewMatch}>New Match</button>
                </div>
            </div>
        )
    }

    if (match.defeat) {
        return (
            <div className="game-result">
                <h2>Wrong Answer! You Lost!</h2>
                <div className="action">
                    <button className="play new-game-button" onClick={startNewMatch}>New Match</button>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="question">{match.quizzes[match.currentIndex].question}</h2>
            {match.quizzes[match.currentIndex].answers.map((answer, index) => (
                <button
                    className="answer"
                    key={index}
                    onClick={() => checkAnswer(index)}
                >
                    {answer}
                </button>
            ))}
            <div className="score">Score: {match.score}</div>
        </div>
    );
};
