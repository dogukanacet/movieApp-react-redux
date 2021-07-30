import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

import styles from "./MovieInfo.module.css";

const movieInfo = (props) => {
  return (
    <div className={styles.MovieInfo}>
      <div className={styles.Title}>{props.infos.title}</div>
      <div className={styles.TitleInfo}>
        <div className={styles.Genre}>
          {props.infos.genres
            ? props.infos.genres.map((genre) => {
                return genre.name;
              }) + ""
            : ""}
          &nbsp;&nbsp;
        </div>

        <div className={styles.ReleaseDate}>
          <FontAwesomeIcon icon={faCalendar} />
          &nbsp;
          {props.infos.release_date}
          &nbsp;
        </div>
        <div className={styles.Runtime}>
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faClock} />
          &nbsp;
          {props.infos.runtime + " min"}
          &nbsp;&nbsp;
        </div>
        <div>
          <a target="_blank">{/* <FontAwesomeIcon icon={"imdb"} /> */}</a>
          <span>{props.infos.metascore} Metascore </span>
        </div>
      </div>
      <div className={styles.synopsisText}>{props.infos.synopsis}</div>
    </div>
  );
};

export default movieInfo;
