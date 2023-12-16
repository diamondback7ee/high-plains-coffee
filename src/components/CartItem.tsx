import React from "react";
import menuItems from "../data/items.json";

import styles from "./CartItem.module.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const item = menuItems.find((item) => item.id === id);
  if (item == null) {
    return null;
  }

  const formattedPrice = `$${item.price.toFixed(2)}`;

  const total = item.price * quantity;
  const formattedTotal = `$${total.toFixed(2)}`;

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.name}>{item.name}</div>
        <img
          className={styles.image}
          src={item.imgUrl}
          alt="Image of menu item"
        />
      </div>
      <div className={styles["price-column"]}>
        <div className={styles.multipliers}>
          <div className={styles.price}>{formattedPrice}</div>
          <div className={styles.multiply}>
            <div>x</div>
            <div className={styles.quantity}>{quantity}</div>
          </div>
        </div>
        <div className={styles.total}>{formattedTotal}</div>
      </div>
    </div>
  );
}

export default CartItem;
