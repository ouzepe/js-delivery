import React from "react";
import Section from "../../Common/Section/Section";
import Menu from "../Menu/Menu";
import styles from "./home.module.scss";

function Home() {
  return (
    <div className={styles.background}>
      <Menu />
      <Section
        firstTitle="Rapide"
        secondTitle="Livraison Sécurisée"
        subTitle="Notre équipe se fait un devoir 
        de vous livrai de façon courtoise et rapide"
       
      />
    </div>
  );
}

export default Home;
