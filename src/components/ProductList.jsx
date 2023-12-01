import React, { Component } from "react";
import ListSP from "./ListSP";

export default class ProductList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="container">
        <ListSP
          data={data}
          addToCrat={this.props.addToCrat}
          spChiTiet={this.props.spChiTiet}
          xemChitiet={this.props.xemChitiet}
        />
      </div>
    );
  }
}
