import React, { Component } from "react";

import styles from "./Sidebar.module.css";

import { NavLink, withRouter } from "react-router-dom";

import Logo from "../../components/UI/Logo/Logo";
import Input from "../../components/UI/Input/Input";
import NavigationItem from "../../components/UI/NavigationItem/NavigationItem";

class Sidebar extends Component {
  state = {
    searchValue: "",
  };

  searchChangedHandler = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  searchClickedHandler = () => {
    this.props.history.push({
      pathname: "/search",
      search: "?" + this.state.searchValue,
    });
  };

  render() {
    return (
      <div className={styles.Sidebar}>
        <nav>
          <NavLink style={{ textDecoration: "none" }} to="/" exact>
            <div style={{ display: "inline-flex" }}>
              <Logo height="35px" width="35px" />
              <p className={styles.Title}>&#160; MovieStore</p>
            </div>
          </NavLink>
          <div
            onKeyPress={(e) => e.key === "Enter" && this.searchClickedHandler()}
            className={styles.Search}
          >
            <Input
              withButton
              placeholder="Search"
              buttonText="&#9740;"
              buttonTextStyle="Rotate"
              changed={(event) => this.searchChangedHandler(event)}
              clicked={this.searchClickedHandler}
            />
          </div>
          <ul>
            <NavigationItem path="/" name="Home" exact />
            <NavigationItem path="/genres" name="Genres" exact />
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Sidebar);
