import style from "./FilmCard.module.css";

const FilmCard = () => {
  return (
    <div className={style.filmCardDiv}>
      <div className={style.filmCardPhoto}></div>
      <div className={style.filmCardContent}>
        <div className={style.filmCardTitle}></div>
        <div className={style.filmCardScore}></div>
        <p className={style.filmCardGender}></p>
      </div>
    </div>
  );
};

export default FilmCard;
