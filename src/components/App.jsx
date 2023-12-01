import React, { Component } from "react";
import ProductList from "./ProductList";
//import { Navigate } from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import GioHang from "./GioHang";

import ChiTietSanPham from "./ChiTietSanPham";

let data = [
  {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  },
  {
    id: 2,
    name: "Adidas Prophere Black White",
    alias: "adidas-prophere-black-white",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 990,
    image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
  },
  {
    id: 3,
    name: "Adidas Prophere Customize",
    alias: "adidas-prophere-customize",
    price: 375,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 415,
    image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
  },
  {
    id: 4,
    name: "Adidas Super Star Red",
    alias: "adidas-super-star-red",
    price: 465,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 542,
    image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
  },
  {
    id: 5,
    name: "Adidas Swift Run",
    alias: "adidas-swift-run",
    price: 550,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 674,
    image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
  },
  {
    id: 6,
    name: "Adidas Tenisky Super Star",
    alias: "adidas-tenisky-super-star",
    price: 250,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 456,
    image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
  },
  {
    id: 7,
    name: "Adidas Ultraboost 4",
    alias: "adidas-ultraboost-4",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 854,
    image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
  },
  {
    id: 8,
    name: "Adidas Yeezy 350",
    alias: "adidas-yeezy-350",
    price: 750,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 524,
    image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
  },
  {
    id: 9,
    name: "Nike Adapt BB",
    alias: "nike-adapt-bb",
    price: 630,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 599,
    image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
  },
  {
    id: 10,
    name: "Nike Air Max 97",
    alias: "nike-air-max-97",
    price: 650,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 984,
    image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
  },
  {
    id: 11,
    name: "Nike Air Max 97 Blue",
    alias: "nike-air-max-97-blue",
    price: 450,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 875,
    image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
  },
  {
    id: 12,
    name: "Nike Air Max 270 React",
    alias: "nike-air-max-270-react",
    price: 750,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 445,
    image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
  },
];

export default class App extends Component {
  state = {
    arrGioHang: [],
    spChiTiet: {
      id: 0,
      name: "",
      price: 0,
      description: "",
      quantity: 0,
      image: "",
    },
  };
  clearGioHang = () => {
    this.setState({ arrGioHang: [] });
  };
  numberGioHang = () => {
    let count = this.state.arrGioHang.length;
    return count;
  };
  xemChitiet = (sanpham) => {
    this.setState({ spChiTiet: sanpham });
  };
  addToCrat = (add) => {
    let spGioHang = { ...add, soLuong: 1 };
    let updateArr = this.state.arrGioHang;

    let spCheck = updateArr.find((sp) => sp.id === add.id);
    if (spCheck) {
      if (
        window.confirm(
          "this item has been in cart, are you sure want to add this item to cart?"
        )
      ) {
        spCheck.soLuong += 1;
        alert("add to cart success");
      } else {
        return;
      }
    } else {
      updateArr.push(spGioHang);
      alert("add to cart success");
    }
    this.setState({ arrGioHang: updateArr });
  };

  removeItem = (remove) => {
    let updateArr = this.state.arrGioHang.filter((sp) => sp.id !== remove);
    this.setState({ arrGioHang: updateArr });
  };

  capNhatGioHang = (maSpClick, soLuong) => {
    //console.log(maSpClick, soLuong);
    let updateArr = this.state.arrGioHang;

    let spUpdate = updateArr.find((sp) => sp.id === maSpClick);

    if (spUpdate) {
      spUpdate.soLuong += soLuong;
      if (spUpdate.soLuong < 1) {
        if (window.confirm("do you want to del this item?")) {
          this.removeItem(maSpClick);

          return;
        } else {
          spUpdate.soLuong += 1;
        }
      }
    }

    this.setState({
      arrGioHang: updateArr,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={<HomePage numberGioHang={this.numberGioHang} />}
          >
            <Route
              path="shop-shoe"
              element={
                <ProductList
                  data={data}
                  addToCrat={this.addToCrat}
                  xemChitiet={this.xemChitiet}
                />
              }
            ></Route>
            <Route
              path="gio-hang"
              element={
                <GioHang
                  arrGioHang={this.state.arrGioHang}
                  removeItem={this.removeItem}
                  capNhatGioHang={this.capNhatGioHang}
                  clearGioHang={this.clearGioHang}
                />
              }
            ></Route>
            <Route
              path="info-item"
              element={
                <ChiTietSanPham
                  spChiTiet={this.state.spChiTiet}
                  addToCrat={this.addToCrat}
                />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
