import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ChiTietSanPham extends Component {
  render() {
    let { id, name, price, description, quantity, image } =
      this.props.spChiTiet;

    return (
      <div className="container py-2">
        <h4 className="text-center">Info Item</h4>

        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center">{name}</h3>

            <img src={image} alt="..." height={350} width={350} />
          </div>
          <div className="col-md-6 ps-5">
            <table className="table w-75">
              <tbody>
                <tr>
                  <th>Id Item: </th>
                  <th>{id}</th>
                </tr>
                <tr>
                  <th>Desc Item: </th>
                  <th>{description}</th>
                </tr>
                <tr>
                  <th>Quantity: </th>
                  <th>{quantity} </th>
                </tr>
                <tr>
                  <th>Price: </th>
                  <th>{price}$</th>
                </tr>
              </tbody>
            </table>
            <NavLink to="/shop-shoe" className="btn btn-info">
              back to home <i className="fa fa-home"></i>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
