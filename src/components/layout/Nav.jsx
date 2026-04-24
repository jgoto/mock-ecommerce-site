import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Nav.module.css'

function Nav(){
    return (
        <nav>
            <ul className={styles.navList}>
                <li><NavLink to="/" end className={
                    ({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link
                }>Home</NavLink></li>
                <li><NavLink to="/about" end className={
                    ({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link
                } >About</NavLink></li>
                <li><NavLink to="/contact" end className={
                    ({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link
                } >Contact</NavLink></li>
                <li><NavLink to="/store" end className={
                    ({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link
                } >Store</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;