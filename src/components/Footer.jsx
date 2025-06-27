import { useState } from "react";
import Socials from "./Socials"
import styles from "./Footer.module.css";

function Footer(){
    return (
        <footer>
            <h3>© 2025 Wally's Widgets — All rights reserved.</h3>
            <Socials />
        </footer>
    )
}

export default Footer;