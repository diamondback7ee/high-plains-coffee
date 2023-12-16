import React from "react";

import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <img className={styles.hero} src="/src/assets/store-front.jpg" alt="" />
    </div>
  );
}

export default Home;
