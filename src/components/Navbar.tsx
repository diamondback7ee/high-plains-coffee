import React from "react";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styles from "./Navbar.module.css";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div className={styles["nav-container"]}>
      <nav className={styles.nav}>
        <div className={styles["nav-links"]}>
          <NavLink to={"/menu"} className={styles["nav-link"]}>
            Menu
          </NavLink>
          <NavLink to={"/locations"} className={styles["nav-link"]}>
            Locations
          </NavLink>
          <NavLink to={"/about"} className={styles["nav-link"]}>
            About
          </NavLink>
        </div>

        <Link to={"/"} className={styles.brand}>
          High Plains Coffee Co.
        </Link>

        <button className={styles["cart-circle"]} onClick={openCart}>
          <ShoppingCartIcon />
          <div className={styles["cart-count"]}>{cartQuantity}</div>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
