import React from "react";
import "@styles/mobileMenu.scss";
const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
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
          <a href="/">Other</a>
        </li>
      </ul>
      <div className="footer-menu-container">
        <ul>
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="email" href="/">
              caprilespe@outlook.com
            </a>
          </li>
          <li>
            <a className="sign-out" href="/">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
