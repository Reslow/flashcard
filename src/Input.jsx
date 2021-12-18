import React, { useState } from "react";
import styles from "./layout/input.module.css";

const Input = ({ addCard }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    addCard(question, answer);
    setQuestion("");
    setAnswer("");
  };
  return (
    <div className={styles.inputCon}>
      <div className={styles.innerCon}>
        <div className={styles.inputInnerCon}>
          <label name="question" className={styles.cardHeadline}>set a question</label>
          <textarea
            className={styles.text}
            type="text"
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className={styles.inputInnerCon}>
          <label className={styles.cardHeadline} name="answer">set an answer</label>
          <textarea
            className={styles.text}
            onChange={(e) => setAnswer(e.target.value)}
            type="text"
            name="answer"
            value={answer}
          />
        </div>
      </div>
      <button className={styles.btn} onClick={handleSubmit}>
        Enter
      </button>
    </div>
  );
};

export default Input;
