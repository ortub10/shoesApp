import React from "react";
import HomePage from "./conponents/homePage/homePage";
import ShoesPage from "./conponents/shoesPage/shoesPage";
import ShoePerOne from "./conponents/shoesPage/conponents/shoePerOne";
import { Route } from "react-router-dom";
import { handelerGetShoes } from "../../api/requests";
import "./screen.css";

class Screen extends React.Component {
  state = { data: [], isLoad: true };
  async componentDidMount() {
    try {
      const data = await handelerGetShoes();
      this.setState({ data: data, isLoad: false });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <>
        {this.state.isLoad ? (
          <div className="spinner"></div>
        ) : (
          <div>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/shoes"
              render={(props) => (
                <ShoesPage
                  {...props}
                  data={this.state.data}
                  isLoad={this.state.isLoad}
                />
              )}
            />
            <Route
              exact
              path="/shoes/:id"
              render={(props) => (
                <ShoePerOne {...props} data={this.state.data} />
              )}
            />
          </div>
        )}
      </>
    );
  }
}

export default Screen;
