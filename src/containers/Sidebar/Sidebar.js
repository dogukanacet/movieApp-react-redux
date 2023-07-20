import React, { Component } from "react";

import styles from "./Sidebar.module.css";

import { NavLink, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Logo from "../../components/UI/Logo/Logo";
import Input from "../../components/UI/Input/Input";
import NavigationItem from "../../components/UI/NavigationItem/NavigationItem";

class Sidebar extends Component {
  state = {
    searchbarValue: "",
  };

  searchbarValueHandler = (e) => {
    this.setState({ searchbarValue: e.target.value });
    this.props.history.push({
      pathname: "/search",
      search: `?${e.target.value}`
    });
    setTimeout(() => {
      this.props.onSearch(e.target.value);
    }, 300);
  };

  searchHandler = () => {
    this.props.history.push({
      pathname: "/search",
      search: `?${this.state.searchbarValue}`
    });
    this.props.onSearch(this.state.searchbarValue);
  };

  clearSearchBar = () => {
    this.setState({ searchbarValue: "" });
  };

  render() {
    return (
      <div className={styles.Sidebar}>
        <nav>
          <NavLink style={{ textDecoration: "none" }} to="/" exact>
            <div
              onClick={this.props.onHomeClick}
              style={{ display: "inline-flex" }}
            >
              <Logo height="35px" width="35px" />
              <p className={styles.Title}>&#160; MovieApp</p>
            </div>
          </NavLink>
          <div
            onKeyPress={(e) => e.key === "Enter" && this.searchHandler()}
            className={styles.Search}
          >
            <Input
              withButton
              value={this.state.searchbarValue}
              placeholder="Search"
              buttonText="&#9740;"
              buttonTextStyle="Rotate"
              onChange={(e) => this.searchbarValueHandler(e)}
              onClick={this.searchHandler}
              onFocus={this.clearSearchBar}
            />
          </div>
          <ul>
            <span onClick={this.props.onHomeClick}>
              <NavigationItem path="/" name="Home" exact />
            </span>
            <NavigationItem path="/genres" name="Genres" exact />
          </ul>
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHomeClick: () => dispatch(actions.initMovies()),
    onSearch: (inputData) => dispatch(actions.searchMovies(inputData)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Sidebar));
