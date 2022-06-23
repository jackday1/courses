import { useContext } from "react";

import { AppContext } from "../../contexts/app.context";
import "./Result.css";
import ResultItem from "./components/ResultItem";

const Result = () => {
  const { username, questions, answers } = useContext(AppContext);

  return (
    <div className="result-container">
      <div className="result-header">
        <span>{username}</span>
      </div>
      <div className="result-content">
        <h3>RESULT</h3>
        {questions.map((question, index) => (
          <ResultItem
            key={question.id}
            question={question}
            answerIndex={
              answers.find((item) => item.questionIndex === index)?.answerIndex
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
