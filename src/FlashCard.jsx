import React, { useState } from "react";
import cn from "classnames";
import styles from "./layout/flashcard.module.css";
import logo from "./static/logo3.svg";

const FlashCard = ({ flashcard, removecard }) => {
  const [flip, setflip] = useState(false);

  return (
    <div className="container">
      <div
        className={cn(styles.card, { [styles.flip]: flip })}
        onClick={() => setflip(!flip)}
      >
        <button
          className={styles.delete}
          onClick={() => removecard(flashcard.id)}
        >
          <img src={logo} alt="Logo" width="30px" />
        </button>
        <div className={styles.front}>{flashcard.question}</div>
        <div className={styles.back}> {flashcard.answer}</div>
      </div>
    </div>
  );
};

export default FlashCard;
