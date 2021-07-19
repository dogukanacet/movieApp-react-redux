import React, { Component } from "react";

import { Route, Switch, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";

import Movies from "./containers/Movies/Movies";
import Genres from "./containers/Genres/Genres";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route
              path={"/genres/" + this.props.genreName}
              component={Movies} exact
            />
            <Route path="/genres" component={Genres} exact />
            <Route path="/" component={Movies}  />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genreName: state.genreName,
  };
};

export default connect(mapStateToProps)(withRouter(App));
