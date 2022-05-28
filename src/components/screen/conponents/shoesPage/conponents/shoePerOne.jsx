import React from "react";
import { NavLink } from "react-router-dom";
import "./shoePerOne.css";

class ShoePerOne extends React.Component {
  render() {
    const shoe = this.props.data.find(
      (current) => current.id === this.props.match.params.id
    );

    if (shoe) {
      return (
        <div className="contain_per_one">
          <h1>{shoe.brand}</h1>
          <p>price :{shoe.price} $</p>
          <img src={shoe.image} alt="#" />
          <NavLink to="../shoes">
            <button>back</button>
          </NavLink>
        </div>
      );
    }
    return <h1>404 Product not found </h1>;
  }
}

export default ShoePerOne;
