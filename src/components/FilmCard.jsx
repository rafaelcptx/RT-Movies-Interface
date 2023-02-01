import style from "./FilmCard.module.css";
import { Link } from "react-router-dom";

const FilmCard = (props) => {
  const imageURL = import.meta.env.VITE_IMG;
  const image = `${imageURL}${props.image}`;

  return (
    <div className={style.filmCardDiv}>
      <Link>
        <div className={style.filmCardPhoto}>
          <img className={style.filmImage} src={image} alt="poster do filme" />
        </div>
        <div className={style.filmCardContent}>
          <div className={style.filmCardTitle}>
            <p className={style.filmTitle}>{props.title}</p>
          </div>
          <div className={style.filmCardScore}>
            <p className={style.filmScore}>Nota: {props.score}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FilmCard;
