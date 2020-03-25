/*
 *  Product carousel component
 *
 */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import storeData from '../../data/store-data';
import ReactStars from 'react-rating-stars-component'
import { connect } from "react-redux";

const ratingChanged = (newRating) => {
  console.log(newRating)
}

class StoreCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.passStoreData = this.passStoreData.bind(this);
  }

  passStoreData(val) {
    this.props.bindActionCreators({
      storeTitle: val
    });
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="store">
        {storeData &&
          <div>
            <div className="store__header">
              <h4>NEAREST STORES</h4>
              <NavLink to="/stores">All Nearest Stores</NavLink>
            </div>
            <div className="store__carousel">
              <Slider {...settings}>
                {storeData.map((val, index) => (
                  <div key={index} className="store__carouesl-item">
                    <div className={val.default ? 'store-selected store-img' : 'store-img'}>
                      <img src={require('../../assets/img' + val.image)} alt="Store" />
                    </div>
                    <div className="store-info">
                      <p>{val.name}</p>
                      <ReactStars
                        count={5}
                        value={parseInt(val.rating)}
                        onChange={ratingChanged}
                        size={12}
                        color2={'#FED337'} />
                      <NavLink to="/products" onClick={() => this.passStoreData(val.name)}>Learn more</NavLink>
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

function mapDispatchToProps(dispatch) {
  return {
    bindActionCreators: value => dispatch({ type: 'STORE', value })
  }
}

export default connect(null, mapDispatchToProps)(StoreCarousel);