import React from "react";
import Logo from "./logo/Logo";
import Nav_bar from "./nav-bar/Nav-bar";

import Search from "./search-bar/Search";
import Wishlit from "./wishlit/Wishlist";
import Shop from "./shop/Shop";
import Compte from "./compte/Compte";
import "../../assets/style/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <div className="top">
        <div className="Header">
          <div className="menu">
          <a><FontAwesomeIcon icon={faBars} /></a>
            
          </div>

          <Logo />
          <div className="nav-bar">
            <Nav_bar />
          </div>
          <div className="nav-search">
            <Search />
          </div>
          <div className="compte">
            <Shop />
            <Wishlit />
            <Compte />
          </div>
        </div>
      </div>
    </>
  );
}
