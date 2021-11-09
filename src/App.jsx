import { useState } from "react";
import FlashCardList from "./FlashCardList";
import Input from "./Input";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  return (
    <div>
      <Input />
      <FlashCardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "Question1",
    answer: "answer1",
  },
  {
    id: 2,
    question: "Question2",
    answer: "answer2",
  },
  {
    id: 3,
    question: "Question3",
    answer: "answer3",
  },
  {
    id: 4,
    question: "Question4",
    answer: "answer4",
  },
  {
    id: 5,
    question: "Question5",
    answer: "Answer5",
  },
];

export default App;
