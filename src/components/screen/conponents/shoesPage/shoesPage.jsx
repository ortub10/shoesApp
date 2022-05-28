import React from "react";
import {
  handelerPostShoe,
  handelerDeleteShoe,
  handelerUpdateShoe,
} from "../../../../api/requests";
import ShoeDetailes from "./conponents/shoeDetailes";
import InputAdd from "./conponents/inputsAdd";
import { NavLink } from "react-router-dom";
import "./shoesPage.css";

class ShoesPage extends React.Component {
  state = {
    data: this.props.data,
    isLoad: this.props.isLoad,
    isUpdate: false,
    idToUpdate: -1,
    inputBrand: "",
    inputPrice: "",
    inputImage: "",
  };

  handelInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  edit = (id) => {
    const shoe = this.state.data.find((shoe) => shoe.id === id);
    this.setState({
      inputBrand: shoe.brand,
      inputPrice: shoe.price,
      inputImage: shoe.image,
      isUpdate: true,
      idToUpdate: shoe.id,
    });
  };

  update = async () => {
    this.setState({ isLoad: true });
    const updateShoe = {
      brand: this.state.inputBrand,
      price: this.state.inputPrice,
      image: this.state.inputImage,
    };

    try {
      const newShoeData = await handelerUpdateShoe(
        this.state.idToUpdate,
        updateShoe
      );

      const newData = this.state.data.map((shoe) => {
        if (shoe.id === this.state.idToUpdate) return newShoeData.data;
        return shoe;
      });
      this.setState({
        data: newData,
        isLoad: false,
        isUpdate: false,
        inputBrand: "",
        inputPrice: "",
        inputImage: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  deleteShoe = async (id) => {
    this.setState({ isLoad: true });
    try {
      await handelerDeleteShoe(id);
      const newData = this.state.data.filter((shoe) => shoe.id !== id);
      this.setState({ data: newData, isLoad: false });
    } catch (e) {
      console.log(e);
    }
  };

  addShoe = async () => {
    this.setState({ isLoad: true });
    const newShoe = {
      brand: this.state.inputBrand,
      price: this.state.inputPrice,
      image: this.state.inputImage,
    };
    try {
      const newShoeData = await handelerPostShoe(newShoe);
      const newData = [...this.state.data];
      newData.push(newShoeData.data);
      this.setState({
        data: newData,
        isLoad: false,
        inputBrand: "",
        inputPrice: "",
        inputImage: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        {this.state.isLoad ? (
          <div className="spinner"></div>
        ) : (
          <div className="shoes_pages">
            <div className="contain_inptus">
              <div className="inputs">
                <InputAdd
                  inputBrand={this.state.inputBrand}
                  inputPrice={this.state.inputPrice}
                  inputImage={this.state.inputImage}
                  isUpdate={this.state.isUpdate}
                  addShoe={this.addShoe}
                  update={this.update}
                  handelInput={this.handelInput}
                />
              </div>
              <button>
                <NavLink to="./">back</NavLink>
              </button>
            </div>
            <div className="contain_shoes">
              {this.state.data.map(({ id, brand, price, image }) => {
                return (
                  <ShoeDetailes
                    key={id}
                    brand={brand}
                    price={price}
                    image={image}
                    id={id}
                    deleteShoe={this.deleteShoe}
                    edit={this.edit}
                  />
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}
export default ShoesPage;
