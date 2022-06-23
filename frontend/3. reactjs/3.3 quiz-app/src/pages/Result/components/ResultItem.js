const ResultItem = ({ question, answerIndex }) => {
  const answer = answerIndex ? question.answers[answerIndex].text : null;
  const correctAnswer = question.answers.find((item) => item.isCorrect).text;
  const isCorrect = answer === correctAnswer;

  return (
    <div className="result-item">
      <h5>{question.question}</h5>
      <p
        className={isCorrect ? "result-correct-answer" : "result-wrong-answer"}
      >
        {answer ? `Your answer: ${answer}` : "Not answered yet"}
      </p>
      {!isCorrect && <p>Right answer: {correctAnswer}</p>}
    </div>
  );
};

export default ResultItem;
