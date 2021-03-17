import React, { Component, Fragment } from "react";
import styles from "./Layout.module.css";

import { withRouter } from "react-router-dom";

import Sidebar from "../../containers/Sidebar/Sidebar";
import { Container, Col, Row } from "react-bootstrap";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid className={styles.Layout}>
          <Row style={{ width: "100%" }}>
            <Col style={{ padding: "0" }} sm={2}>
              <Sidebar />
            </Col>
            <Col style={{ padding: "0" }} sm={10}>
              <main>{this.props.children}</main>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(Layout);
