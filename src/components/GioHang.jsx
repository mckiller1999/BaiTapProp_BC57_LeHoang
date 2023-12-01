import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class GioHang extends Component {
  render() {
    return (
      <div className="container py-3">
        <h3>My Cart</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.arrGioHang.map((sanpham, index) => {
                return (
                  <tr key={index}>
                    <td>{sanpham.id}</td>
                    <td>{sanpham.name}</td>
                    <td>
                      <img
                        src={sanpham.image}
                        alt="..."
                        width={100}
                        height={100}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.props.capNhatGioHang(sanpham.id, 1);
                        }}
                      >
                        +
                      </button>
                      <span className="mx-2">{sanpham.soLuong}</span>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.capNhatGioHang(sanpham.id, -1);
                        }}
                      >
                        -
                      </button>
                    </td>
                    <td>{sanpham.price}$</td>
                    <td>
                      {(sanpham.price * sanpham.soLuong).toLocaleString()}$
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          this.props.removeItem(sanpham.id);
                        }}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between">
          <NavLink to="/shop-shoe" className="btn btn-info">
            Back to home <i className="fa fa-home"></i>
          </NavLink>
          <NavLink
            to="/shop-shoe"
            className="btn btn-success"
            onClick={() => {
              if (window.confirm("are you confirm to buy this items")) {
                this.props.clearGioHang();
                window.alert("thank for your order");
              }
            }}
          >
            go to payment <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
      </div>
    );
  }
}
