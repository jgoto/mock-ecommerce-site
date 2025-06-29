import { useState } from "react";
import styles from './Banner.module.css';

function Banner(){
    return(
        <div className={styles.banner}>
            <h1>Wally's Widgets</h1>
            <h2>Quality widgets for every need</h2>
            <button>Browse Widgets</button>
        </div>
    )
}

export default Banner;