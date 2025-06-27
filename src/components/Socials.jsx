import { useState } from "react";
import styles from "./Socials.module.css";

function Socials(){
    return (
        <div>
            <ul className={styles.socialsList}>
                <li><a href="#" target="_blank"><img src="src/assets/icons/logo-black.png"  className = {styles.socialIcon} alt = "X" /></a></li>
                <li><a href="#" target="_blank"><img src="src/assets/icons/facebook_logo.png" className = {styles.socialIcon} alt="Facebook" /></a></li>
                <li><a href="#" target="_blank"><img src="src/assets/icons/instagram-logo.png" className = {styles.socialIcon} alt = "Instagram" /></a></li>
            </ul>
        </div>
    )
}

export default Socials;