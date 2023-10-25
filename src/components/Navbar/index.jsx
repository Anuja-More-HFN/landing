"use client";

import React, { useState } from "react";
import { Menu } from "primereact/menu";

import Logo from "./logo";
import "../../styles/navbar.scss";
import Lang from "./lang";
import SignIn from "./SignIn";
import MenuItems from "./MenuItems";

const menuItems = [
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => {
      // Handle Home menu item click
    },
  },
  {
    label: "Events",
    icon: "pi pi-info-circle",
    command: () => {
      // Handle About menu item click
    },
  },
  {
    label: "Contact",
    icon: "pi pi-info-circle",
    command: () => {
      // Handle About menu item click
    },
  },
  {
    label: "About us",
    icon: "pi pi-info-circle",
    command: () => {
      // Handle About menu item click
    },
  },
];

function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  let menu;

  const toggleMenu = (event) => {
    setMenuVisible(!menuVisible);
    menu.toggle(event);
  };

  const handleMenuRef = (el) => {
    menu = el;
  };

  const handleMenuHide = () => {
    setMenuVisible(false);
  };
  return (
    <nav>
      <div className="navbar_wrapper">
        <div className="container">
          <div className="navbar_container">
            <div className="d-flex justify-content-between align-items-center w-100">
              <Logo />
              <MenuItems />
              <div className="d-flex align-items-center">
                <button
                  className="menu_button"
                  type="button"
                  onClick={toggleMenu}
                >
                  <i className="pi pi-bars" />
                </button>
                <Lang />
                <SignIn />
              </div>
            </div>
            <Menu
              model={menuItems}
              popup
              ref={handleMenuRef}
              onHide={handleMenuHide}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
