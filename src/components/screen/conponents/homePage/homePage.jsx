import React from "react";
import { NavLink } from "react-router-dom";
import "./homePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="contain_home_page">
        <h1>Welcome To Shoes Web </h1>
        <p>
          pres &nbsp;
          <strong>
            <NavLink to="/shoes">here</NavLink>
          </strong>
          &nbsp; to see shoes
        </p>
      </div>
    );
  }
}

export default HomePage;
