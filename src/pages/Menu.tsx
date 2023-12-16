import MenuItem from "../components/MenuItem";
import menuItems from "../data/items.json";

import styles from "./Menu.module.css";

function Menu() {
  return (
    <>
      <h1>Menu</h1>
      <div className={styles.grid}>
        {menuItems.map((item) => (
          <MenuItem {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Menu;
