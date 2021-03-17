import React, { Component } from "react";

import { Route, Switch, withRouter } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";

import Movies from "./containers/Movies/Movies";
import Genres from "./containers/Genres/Genres";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/genres" component={Genres} />
            <Route
              path="/search"
              render={() => <Movies searched={this.props.location.search} />}
            />
            <Route path="/" component={Movies} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
