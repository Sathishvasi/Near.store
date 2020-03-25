/*
 *  Dashboard for store and popular products
 *
 */

import React, { Component } from "react";
import storeData from '../data/store-data';
import ReactStars from 'react-rating-stars-component'
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const ratingChanged = (newRating) => {
    console.log(newRating)
}


class StoreItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.props.bindActionCreators({
            hideSearchBar: true
        });
    }

    render() {
        return (
            <div className="store">
                {storeData && <div>
                    <div className="store__header">
                        <h4>SELECT NEAREST STORE</h4>
                    </div>
                    <div className="store__items">
                        {storeData.map((val, index) => (
                            <div key={index} className="store__carouesl-item">
                                <div className={val.default ? 'store-selected store-img' : 'store-img'}>
                                    <img src={require('../assets/img' + val.image)} alt="Store" />
                                </div>
                                <div className="store-info">
                                    <p>{val.name}</p>
                                    <ReactStars
                                        count={5}
                                        value={parseInt(val.rating)}
                                        onChange={ratingChanged}
                                        size={12}
                                        color2={'#FED337'} />
                                    <NavLink to="/products">Learn more</NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        bindActionCreators: value => dispatch({ type: 'SEARCHBAR', value })
    }
}

export default connect(null, mapDispatchToProps)(StoreItems);
