import React, { useState } from "react";
import ReactDOM from "react-dom";
import { getRandomQuiz } from "./quizzes";

// FUNCTIONAL COMPONENT VERSION
const App = () => {
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
        <div>
            <h2>{quiz.question}</h2>
            <div className="anwers">
                {quiz.answers.map((answer, index) => (
                    <button
                        className="answer"
                        key={index}
                        onClick={() => checkAnswer(index)}
                    >
                        {answer}
                    </button>
                ))}
            </div>
            <div className="score">{score}</div>
        </div>
    );
};

// CLASS COMPONENT VERSION
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             quiz: getRandomQuiz(1)[0],
//             score: 0,
//         };
//     }

//     checkAnswer(answerIndex) {
//         if (answerIndex === this.state.quiz.indexOfCorrectAnswer) {
//             alert("Correct!!");
//             this.setState((prevState) => ({
//                 quiz: getRandomQuiz(1)[0],
//                 score: prevState.score + 1,
//             }));
//         } else {
//             alert("Wrrrrong!!");
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.state.quiz.question}</h2>
//                 <div className="anwers">
//                     {this.state.quiz.answers.map((answer, index) => (
//                         <button
//                             className="answer"
//                             key={index}
//                             onClick={() => this.checkAnswer(index)}
//                         >
//                             {answer}
//                         </button>
//                     ))}
//                 </div>
//                 <div className="score">{this.state.score}</div>
//             </div>
//         );
//     }
// }

ReactDOM.render(<App />, document.getElementById("root"));
