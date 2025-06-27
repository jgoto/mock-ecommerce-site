import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Nav.module.css'

function Nav(){
    return (
        <nav>
            <ul className={styles.navList}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/store">Store</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;