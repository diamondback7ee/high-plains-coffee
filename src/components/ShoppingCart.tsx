import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import menuItems from "../data/items.json";

import styles from "./ShoppingCart.module.css";

function ShoppingCart() {
  const { isOpen, closeCart, cartItems } = useShoppingCart();

  const totalPrice = cartItems
    .map((cartItem) => {
      const menuItem = menuItems.find(
        (menuItem) => menuItem.id === cartItem.id
      );
      if (menuItem) {
        return menuItem.price * cartItem.quantity;
      } else {
        return 1;
      }
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const totalPriceFormatted = `$${totalPrice.toFixed(2)}`;

  return (
    <>
      {isOpen && (
        <>
          <div className={styles.background} onClick={closeCart}></div>
          <div className={styles.sidebar}>
            <div className={styles["cart-header"]}>
              <h1 className={styles["cart-title"]}>Cart</h1>
              <button className={styles["cart-close"]} onClick={closeCart}>
                <CloseIcon />
              </button>
            </div>
            <div>
              {cartItems.map((item) => (
                <CartItem {...item} key={item.id} />
              ))}
            </div>
            <div className={styles["total-group"]}>
              <div className={styles["total-label"]}>Total</div>
              <div className={styles["total-price"]}>{totalPriceFormatted}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShoppingCart;
