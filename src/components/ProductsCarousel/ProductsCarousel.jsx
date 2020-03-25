/*
 *  Product carousel component
 *
 */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="product">
        {this.props.products &&
          <div>
            <div className="product__header">
              <h4>{this.props.title}</h4>
              <NavLink to="/">All Products</NavLink>
            </div>
            <div className="product__carousel">
              <Slider {...settings}>
                {this.props.products.map((val, index) => (
                  <div key={index} className="product__carouesl-item">
                    <div className="product-img">
                      <img src={require('../../assets/img' + val.image)} alt="Product" />
                    </div>
                    <div className="product-info">
                      <p>{val.name}</p>
                      <div className="product-price">
                        <span className="product-price__original"><i className="fas fa-rupee-sign"></i>{val.originalPrice}</span>
                        <span className="product-price__discount"> - <i className="fas fa-rupee-sign"></i>{val.discountPrice}</span>
                      </div>
                    </div>
                    <div className="product-cart">
                      <div className="product-cart__control" href="/">
                        <span className="remove-product">-</span>
                        <span>{this.state.quantity}</span>
                        <span className="add-product">+</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>}
      </div>
    );
  }
}

export default Products;
