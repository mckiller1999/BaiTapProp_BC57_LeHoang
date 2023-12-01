import React, { Component } from "react";
import SanPham from "./SanPham";

export default class ListSP extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.data.map((sanpham, index) => {
            return (
              <div className="col-md-4" key={index}>
                <SanPham
                  sanpham={sanpham}
                  addToCrat={this.props.addToCrat}
                  xemChitiet={this.props.xemChitiet}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
