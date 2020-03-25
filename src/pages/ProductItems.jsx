/*
 *  Product Items inside store
 *
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import productData from "../data/product-data";


class ProductItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log("Store title in product item: " + this.props.storeTitle);
        this.props.bindActionCreators({
            productListing: true,
            hideSearchBar: false
        });
    }

    render() {
        return (
            <div className="product-list">
                {productData.map((val, index) => (
                    <div key={index}>
                        <ProductsCarousel title={val.productCategory} products={val.products} />
                    </div>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        hideSearchBar: state.hideSearchBar,
        productListing: state.productListing,
        storeTitle: state.storeTitle
    };
}


function mapDispatchToProps(dispatch) {
    return {
        bindActionCreators: value => dispatch({ type: 'STORE', value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItems);
