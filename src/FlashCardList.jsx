import React from "react";
import FlashCard from "./FlashCard";

const FlashCardList = ({ flashcards, setFlashcards }) => {
  const removecard = (id) => {
    let removedItemArr = flashcards.filter((e) => id !== e.id);
    setFlashcards(removedItemArr);
  };
  return (
    <div>
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
