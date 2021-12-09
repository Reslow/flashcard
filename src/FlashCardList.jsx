import React from "react";
import FlashCard from "./FlashCard";
import styles from "./layout/flashCardList.module.css";

const FlashCardList = ({ flashcards, setFlashcards }) => {
  const removecard = (id) => {
    let removedItemArr = flashcards.filter((e) => id !== e.id);
    setFlashcards(removedItemArr);
  };
  return (
    <div className={styles.conOfCreatedCards}>
      {flashcards.map((flashcard) => {
        return (
          <FlashCard
            flashcard={flashcard}
            key={flashcard.id}
            removecard={removecard}
          />
        );
      })}
    </div>
  );
};

export default FlashCardList;
