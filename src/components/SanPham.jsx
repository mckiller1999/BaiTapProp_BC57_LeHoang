import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SanPham extends Component {
  render() {
    const { sanpham, xemChitiet } = this.props;

    return (
      <div className="card m-3" key={sanpham.id}>
        <img className="card-img-top" src={sanpham.image} alt="Title" />
        <div className="card-body">
          <h5 className="card-title">{sanpham.name}</h5>
          <p className="card-text">{sanpham.shortDescription}</p>
          <p className="card-text">{sanpham.price}$</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.addToCrat(sanpham);
            }}
          >
            add to cart <i className="fa fa-cart-plus"></i>
          </button>
          <NavLink
            to="/info-item"
            className="btn btn-info ms-4"
            onClick={() => {
              xemChitiet(sanpham);
            }}
          >
            Show info <i className="fa fa-info"></i>
          </NavLink>
        </div>
      </div>
    );
  }
}
