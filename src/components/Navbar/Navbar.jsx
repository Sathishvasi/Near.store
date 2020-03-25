/*
 *  This is the main navigation bar shown in the dashboard
 *
 */
import React, { Component } from "react";
import menuicon from "../../assets/img/menuicon.png";
import logo from "../../assets/img/logo.png"
import location from "../../assets/img/icon_location.png";
import phone from "../../assets/img/phone.png";
import profileSelected from "../../assets/img/icon_profile_selected.png";
import heart from "../../assets/img/Icon_favourite.png";
import cart from "../../assets/img/Icon_cart.png";
import searchIcon from "../../assets/img/search_icon.png"
import { connect } from "react-redux";
import Slider from "react-slick";
import productData from "../../data/product-data";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showSearchBar = this.showSearchBar.bind(this);
    console.log("Store title in navbar: " + this.props.storeTitle);
  }

  showSearchBar() {
    this.props.bindActionCreators({
      hideSearchBar: false
    });
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      <div className="nav-container">
        <div className="header">
          <img className="header__hamburger" src={menuicon} alt="Hamburger icon" />
          <img className="header__logo" src={logo} alt="Logo" />
          {this.props.hideSearchBar &&
            <img className="header__search" src={searchIcon} alt="Search Icon" onClick={this.showSearchBar} />
          }
        </div>
        <div className="nav-container__border"></div>
        <div className="notification">
          <div className="notification__location">
            <img src={location} alt="Location pointer" />
            <p>Mumbai</p>
          </div>
          <div className="notification__icons">
            <div className="notification__icons-wrapper">
              <img src={phone} alt="Phone" />
            </div>
            <div className="notification__icons-wrapper">
              <img src={profileSelected} alt="Profile" />
            </div>
            <div className="notification__icons-wrapper count" data-count="7">
              <img src={heart} alt="Favourites" />
            </div>
            <div className="notification__icons-wrapper count" data-count="9">
              <img src={cart} alt="Cart Icon" />
            </div>
          </div>
        </div>
        {!this.props.hideSearchBar &&
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
            <img src={searchIcon} alt="Search Icon" />
          </div>
        }
         <b>Store title - {this.props.storeTitle}</b>
        {this.props.productListing &&
          <div className="product-carousel">
            <Slider {...settings}>
              {productData.map((val, index) => {
                return index > 0 &&
                  (<div key={index}>
                    <img className="product-carousel__icon" src={require("../../assets/img/products" + val.productIcon)} alt="Product Icon" />
                    <p className="product-carousel__text">{val.productCategory}</p>
                  </div>)
              })}
            </Slider>
          </div>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
