import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header numberGioHang={this.props.numberGioHang} />
        <Outlet />
      </div>
    );
  }
}
