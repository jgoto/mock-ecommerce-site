import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Banner.module.css';

function Banner(){
    const navigate = useNavigate();

    const goToStore = () =>{
        navigate('/store')
    }

    return(
        <div className={styles.banner}>
            <h1>Wally's Widgets</h1>
            <h2>Quality widgets for every need</h2>
            <button onClick={goToStore}>Browse Widgets</button>
        </div>
    )
}

export default Banner;