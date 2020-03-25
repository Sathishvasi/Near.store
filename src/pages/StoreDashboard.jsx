/*
 *  Dashboard for store and popular products
 *
 */

import React, { Component } from "react";
import StoreCarousel from "../components/StoreCarousel/StoreCarousel";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import { connect } from "react-redux";
import productData from "../data/product-data";


class StoreDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.props.bindActionCreators({
      hideSearchBar: false
    });
  }

  render() {
    return (
      <div className="content dashboard">
        <StoreCarousel />
        {productData.map((val, index) => (
          <div key={index}>
            <ProductsCarousel title={val.productCategory} products={val.products} />
          </div>
        ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bindActionCreators: value => dispatch({ type: 'SEARCHBAR', value })
  }
}

export default connect(null, mapDispatchToProps)(StoreDashboard);