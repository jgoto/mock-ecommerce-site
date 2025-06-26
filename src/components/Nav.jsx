import { useState } from "react";
import styles from './Nav.module.css'

function Nav(){
    return (
        <nav>
            <ul className={styles.navList}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">Store</a></li>
            </ul>
        </nav>
    )
}

export default Nav;