import React from "react";

class InputAdd extends React.Component {
  render() {
    return (
      <>
        <label htmlFor=""> brand</label>
        <input
          type="text"
          name="inputBrand"
          value={this.props.inputBrand}
          onChange={this.props.handelInput}
        />
        <label htmlFor="">price</label>
        <input
          type="number"
          name="inputPrice"
          value={this.props.inputPrice}
          onChange={this.props.handelInput}
        />
        <label htmlFor="">image</label>
        <input
          type="text"
          name="inputImage"
          value={this.props.inputImage}
          onChange={this.props.handelInput}
        />
        {this.props.isUpdate ? (
          <button onClick={this.props.update}>Update</button>
        ) : (
          <button
            onClick={this.props.addShoe}
            disabled={
              this.props.inputBrand.length &&
              this.props.inputPrice.length &&
              this.props.inputImage.length
                ? false
                : true
            }
          >
            Add shoe
          </button>
        )}
      </>
    );
  }
}

export default InputAdd;
