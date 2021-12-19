import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/card.module.css";
import CustomPopUp from "./CustomPopUp";
import Popup from "reactjs-popup";
import PopUpComp from "./PopUpComp";

function Card({ movie, onSelect }) {
  const [modalMovie, setModalMovie] = useState(false);

  console.log(movie?.id);

  return (
    <div className={styles.card}>
      <img
        alt="movie_image_ph"
        src={movie.image}
        width="140px"
        height="160px"
        className={styles.avatarImg}
      />
      <span className={styles.name}>{movie.name}</span>
      <div className={styles.heartDiv}>
        {/* <Image
          className={styles.heart}
          alt="heart"
          src="/heart.svg"
          width="20px"
          height="20px"
        ></Image> */}
      </div>

      <button
        className={styles.button}
        onClick={() => {
          setModalMovie(!modalMovie);
        }}
      >
        See Episodes <Image width="55" height="10px" src="/arrow.svg"></Image>
      </button>

      <CustomPopUp open={modalMovie} movie={[]} />
    </div>
  );
}
export default Card;
