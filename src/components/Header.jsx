import { useState } from "react";
import Nav from "./Nav";
import styles from "./Header.module.css";

function Header(){
    return (
        <header className={styles.headerContent}>
            <h1>Wally's Widgets</h1>
            <Nav />
        </header>
    )
}

export default Header;