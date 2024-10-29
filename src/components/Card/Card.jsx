import { useState } from "react";
import styles from "./Card.module.scss";

function Card({ title, imageUrl, price, onClickFavorite, onClickPlus }) {
  const [isChoose, setIsChoose] = useState(false);

  const onPlus = () => {
    onClickPlus({ title, imageUrl, price });
    setIsChoose(!isChoose);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={() => onClickFavorite}>
        <img src="/img/heart-unlike.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>{price} грн.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onPlus}
          src={isChoose ? "/img/btn-choose.svg" : "/img/button.svg"}
          alt="add to cart"
        />
      </div>
    </div>
  );
}

export default Card;
