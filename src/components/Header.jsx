import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg text-bg-secondary  ">
          <div className="container ">
            <NavLink className="navbar-brand text-white" to="/shop-shoe">
              Home
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="navbar-brand text-white" to="/gio-hang">
                    Cart ( {this.props.numberGioHang()} )
                  </NavLink>
                </li>
                <li className="nav-item"></li>
              </ul>
            </div>
          </div>
        </nav>
        <h3 className="text-center py-4">Shop Shoe</h3>
      </div>
    );
  }
}
