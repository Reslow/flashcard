import { useState } from "react";
import FlashCardList from "./FlashCardList";
import Input from "./Input";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  const addCard = (question, answer) => {
    let card = {
      id: flashcards.length + 1,
      question,
      answer,
    };
    setFlashcards([...flashcards, card]);
  };

  return (
    <div>
      <Input addCard={addCard} />
      <FlashCardList flashcards={flashcards} setFlashcards={setFlashcards} />
    </div>
  );
}

export default App;
