import React from "react";
import FlashCard from "./FlashCard";

const FlashCardList = ({ flashcards }) => {
  return (
    <div>
      {flashcards.map((flashcard) => {
        return <FlashCard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashCardList;
