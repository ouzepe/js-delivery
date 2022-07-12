import React from "react";
import styles from "./nav.module.scss";
import { Link } from "react-router-dom";

interface NavProps {
  Title: string;
  Lists: {
    name: string;
    path: string | any;
  }[];
  contacts: {
    name: string;
    path: string | any;
  }[];
}

function Nav({ Title, Lists, contacts }: NavProps) {
  return (
    <nav className={styles.header}>
      <div className={styles.navLink}>
        <Link to="/" className={styles.title}>
          {Title}
        </Link>
        <ul className={styles.ul}>
          {Lists.map(({ name, path }, i) => (
            <Link className={styles.list} key={i} to={path}>
              {name}
            </Link>
          ))}
        </ul>
        {contacts.map(({ name, path }, i) => (
          <Link key={i} to={path} className={styles.contact}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
