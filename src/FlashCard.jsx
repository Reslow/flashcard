import React, {useState} from "react";
import cn from 'classnames'
import styles from './layout/flashcard.module.css'

const FlashCard = ({flashcard}) => {
  const [flip, setflip] = useState(false)

return <div className={cn(styles.card, {[styles.flip]:flip})} onClick={() => setflip(!flip)}>
  <div className={styles.front}> 
  {flashcard.question}
  </div>
  <div className={styles.back}> {flashcard.answer}
  </div>
</div>;
};

export default FlashCard;
