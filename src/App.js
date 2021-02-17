import React, { Component } from "react";
import styles from "./App.module.css";

import Movies from "./containers/Movies/Movies";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Movies />;
      </div>
    );
  }
}

export default App;
