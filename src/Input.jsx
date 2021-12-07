import React, { useState } from "react";

const Input = ({ addCard }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    addCard(question, answer);
  };
  return (
    <div>
      <input
        type="text"
        name="question"
        value={question}
        placeholder="Question"
        onChange={(e) => setQuestion(e.target.value)}
      ></input>
      <input
        onChange={(e) => setAnswer(e.target.value)}
        type="text"
        name="answer"
        value={answer}
        placeholder="Answer"
      ></input>
      <button className="btn" onClick={handleSubmit}>
        OK
      </button>
    </div>
  );
};

export default Input;
