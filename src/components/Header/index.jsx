import React, { Fragment, useState, useContext } from "react";
import Menu from "@components/Menu";
import "@styles/header.scss";
import AppContext from "@context/AppContext";
import iconMenu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCartIcon from "@icons/icon_shopping_cart.svg";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = () => setToggle(!toggle);
  const renderMenu = () => toggle && <Menu />;
  return (
    <Fragment>
      <nav className="secondary-menu">{renderMenu()}</nav>
      <nav>
        <img className="menu" src={iconMenu} alt="menu" />
        <div className="navbar-left">
          <img className="nav-logo" src={logo} alt="logo" />
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
            <li className="navbar-email" onClick={handleToggle}>
              caprilespe@outlook.com
            </li>
            <li className="navbar-shopping-cart">
              <img src={shoppingCartIcon} alt="Shopping cart" />
              {state.cart.length > 0 && <div>{state.cart.length}</div>}
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
