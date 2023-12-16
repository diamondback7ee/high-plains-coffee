import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import styles from "./MenuItem.module.css";
import { useShoppingCart } from "../context/ShoppingCartContext";

type MenuItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function MenuItem({ id, name, price, imgUrl }: MenuItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  const formattedPrice = `$${price.toFixed(2)}`;

  // const handleIncreaseQuantity = () => {
  //   setQuantity((prevValue) => prevValue + 1);
  // };

  // const handleDecreaseQuantity = () => {
  //   if (quantity > 0) {
  //     setQuantity((prevQuantity) => prevQuantity - 1);
  //   }
  // };

  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.content}>
        <img src={imgUrl} alt="" className={styles.image} />
        <div className={styles["order-group"]}>
          <div>{formattedPrice}</div>
          <div className={styles["quantity-actions"]}>
            <button
              className={styles["quantity-action"]}
              onClick={() => decreaseCartQuantity(id)}
            >
              <RemoveIcon className={styles.icon} />
            </button>
            <div className={styles["quantity-display"]}>{quantity}</div>
            <button
              className={styles["quantity-action"]}
              onClick={() => increaseCartQuantity(id)}
            >
              <AddIcon className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
