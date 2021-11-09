import React, { useState } from "react";

const Input = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = () => {
    setShowInput(true);
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
      {showInput && (
        <div>
          <p>{question}</p>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
