import React from "react";
import "./shoeDetailes.css";
import { NavLink } from "react-router-dom";

class ShoeDetailes extends React.Component {
  render() {
    return (
      <div className="contain_shoe">
        <img src={this.props.image} alt="#" />
        <NavLink to={`./shoes/${this.props.id}`}>
          <h1>{this.props.brand}</h1>
        </NavLink>

        <p>price: {this.props.price} $</p>
        <i
          onClick={() => {
            this.props.deleteShoe(this.props.id);
          }}
          class="fa fa-trash-o fa-2x"
        ></i>
        <i
          onClick={() => this.props.edit(this.props.id)}
          class="fa fa-edit  fa-2x"
        ></i>
      </div>
    );
  }
}

export default ShoeDetailes;
