import React from 'react';
import classes from './NavigationItem.module.css';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => (
  <li className={styles.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
