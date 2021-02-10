import React, {useState} from "react";
import {getRandomQuiz} from "./quizzes";

export const Match = () => {
    const [quiz, setQuiz] = useState(getRandomQuiz(1)[0]);
    const [score, setScore] = useState(0);

    const checkAnswer = (answerIndex) => {
        if (answerIndex === quiz.indexOfCorrectAnswer) {
            alert("Correct");
            setScore(score + 1);
            setQuiz(getRandomQuiz(1)[0]);
        } else {
            alert("Try again!");
        }
    };

    return (
        <div className="container">
            <h2 className="question">{quiz.question}</h2>
            {quiz.answers.map((answer, index) => (
                <button
                    className="answer"
                    key={index}
                    onClick={() => checkAnswer(index)}
                >
                    {answer}
                </button>
            ))}
            <div className="score">Score: {score}</div>
        </div>
    );
};

//export default Match;

// CLASS COMPONENT VERSION
/*export class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: getRandomQuiz(1)[0],
            score: 0,
        };
    }

    checkAnswer(answerIndex) {
        if (answerIndex === this.state.quiz.indexOfCorrectAnswer) {
            alert("Correct!!");
            this.setState((prevState) => ({
                quiz: getRandomQuiz(1)[0],
                score: prevState.score + 1,
            }));
        } else {
            alert("Wrrrrong!!");
        }
    }

    render() {
        return (
            <div className="container">
                <h2 className="question">{this.state.quiz.question}</h2>
                {this.state.quiz.answers.map((answer, index) => (
                    <button
                        className="answer"
                        key={index}
                        onClick={() => this.checkAnswer(index)}
                    >
                        {answer}
                    </button>
                ))}
                <div className="score">Score: {this.state.score}</div>
            </div>
        );
    }
}*/
