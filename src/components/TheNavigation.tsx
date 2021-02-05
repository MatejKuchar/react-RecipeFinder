import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./TheNavigation.module.scss";

interface Props {}

const TheNavigation = (props: Props) => {
  return (
    <nav className={styles.navigation}>
      <NavLink exact to="/" activeClassName={styles.active}>
        Home
      </NavLink>
      <NavLink to="/recipes" activeClassName={styles.active}>
        Recipes
      </NavLink>
      <NavLink to="/about" activeClassName={styles.active}>
        About
      </NavLink>
    </nav>
  );
};

export default TheNavigation;
