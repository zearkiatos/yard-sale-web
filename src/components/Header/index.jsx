import React, { Fragment } from "react";
import Menu from '../Menu';
import "../../styles/header.scss";
const Header = () => {
  return (
    <Fragment>
      <nav className="secondary-menu">
        <Menu />
      </nav>
      <nav>
        <img className="menu" src="./icons/icon_menu.svg" alt="menu" />
        <div className="navbar-left">
          <img className="logo" src="./logos/logo_yard_sale.svg" alt="logo" />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email">caprilespe@outlook.com</li>
            <li className="navbar-shopping-cart">
              <img src="./icons/icon_shopping_cart.svg" alt="Shopping cart" />
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
