import React, { Component } from "react";
import styles from "./App.module.css";

import Movies from "./containers/Movies/Movies";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container, Col, Row } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container fluid className={styles.App}>
        <Row>
          <Col sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>
            <Movies />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
