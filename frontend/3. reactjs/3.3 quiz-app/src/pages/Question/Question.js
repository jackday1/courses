import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AppContext } from "../../contexts/app.context";
import "./Question.css";

const Question = () => {
  const navigate = useNavigate();
  const { index } = useParams();
  const { questions, answers, setAnswers, username } = useContext(AppContext);

  const questionIndex = Number(index);
  const question = questions[questionIndex];
  const questionAnswer = answers.find(
    (item) => item.questionIndex === questionIndex
  );
  const isFirstQuestion = questionIndex === 0;
  const isLastQuestion = questionIndex === questions.length - 1;

  const back = () => {
    if (isFirstQuestion) return;
    navigate(`/questions/${questionIndex - 1}`);
  };

  const next = () => {
    const url = isLastQuestion ? "/result" : `/questions/${questionIndex + 1}`;
    navigate(url);
  };

  const chooseAnswer = (answerIndex) => {
    if (!questionAnswer) {
      setAnswers([...answers, { questionIndex, answerIndex }]);
      return;
    }

    setAnswers(
      answers.map((item) => {
        if (item.questionIndex !== questionIndex) return item;
        return { ...item, answerIndex };
      })
    );
  };

  if (!question) return null;

  return (
    <div className="question-container">
      <div className="question-header">
        <span>{username}</span>
        <div className="question-btn-container">
          <button
            className="question-btn question-previous-btn"
            disabled={isFirstQuestion}
            onClick={back}
          >
            Back
          </button>
          <button className="question-btn question-next-btn" onClick={next}>
            {isLastQuestion ? "Go to result" : "Next"}
          </button>
        </div>
      </div>
      <div className="question-content">
        <h4>{question.question}</h4>
        {question.answers.map((answer, answerIndex) => (
          <div
            key={`${questionIndex}-${answerIndex}`}
            className={`question-answer ${
              questionAnswer && questionAnswer.answerIndex === answerIndex
                ? "choosen-question-answer"
                : ""
            }`}
            onClick={() => chooseAnswer(answerIndex)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
