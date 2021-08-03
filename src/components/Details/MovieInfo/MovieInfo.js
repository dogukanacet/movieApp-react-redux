import React from "react";

import { Icon } from "semantic-ui-react";

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
        </div>

        <div className={styles.ReleaseDate}>
          <Icon name="clock outline" />

          {props.infos.release_date}
        </div>
        <div className={styles.Runtime}>
          <Icon name="calendar alternate outline" />

          {props.infos.runtime + " min"}
        </div>
        <div className={styles.Metascore}>
          <a
            href={"https://www.imdb.com/title/" + props.infos.imdb_id}
            target="_blank"
          >
            <Icon name="imdb" size="large " />
          </a>
          <span>{props.infos.metascore} Metascore </span>
        </div>
      </div>
      <div className={styles.synopsisText}>{props.infos.synopsis}</div>
    </div>
  );
};

export default movieInfo;
