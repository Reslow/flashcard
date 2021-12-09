import { useState } from "react";
import FlashCardList from "./FlashCardList";
import Input from "./Input";
import styles from "../src/layout/main.module.css";
import Header from "../src/Header";

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
    <div className={styles.main}>
      <Header />
      <Input addCard={addCard} />
      <FlashCardList flashcards={flashcards} setFlashcards={setFlashcards} />
    </div>
  );
}

export default App;
