import { useState } from "react";
import styles from "./Socials.module.css";

function Socials(){
    return (
        <div>
            <ul className={styles.socialsList}>
                <li><a href="#" target="_blank"><img src="/public/assets/icons/logo-black.png"  className = {styles.socialIcon} alt = "X" rel="noopener noreferrer" /></a></li>
                <li><a href="#" target="_blank"><img src="/public/assets/icons/facebook_logo.png" className = {styles.socialIcon} alt="Facebook" rel="noopener noreferrer" /></a></li>
                <li><a href="#" target="_blank"><img src="/public/assets/icons/instagram-logo.png" className = {styles.socialIcon} alt = "Instagram" rel="noopener noreferrer" /></a></li>
                <li><a href="https://github.com/jgoto" target="_blank"><img src="/public/assets/icons/github-mark.png" className = {styles.socialIcon} alt = "GitHub" rel = "noopener noreferrer" /></a></li>
            </ul>
        </div>
    )
}

export default Socials;