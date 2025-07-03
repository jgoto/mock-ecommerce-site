import { useState, useEffect } from "react";
import styles from './StoreModal.module.css'

function StoreModal({isOpen, onClose, storeTarget}){
    const [countdown, setCountdown] = useState(10);
    function handleClick(){
        onClose();
    }

    useEffect(()=>{
        if(!isOpen) return;
        const timer = setInterval(()=>{
            setCountdown(prev =>{
                if (prev <=1)
                {
                    clearInterval(timer);
                    setTimeout(()=>onClose(), 0);
                    return 0;
                }
                else
                {
                    return prev-1;
                }
            });
        }, 1000);
        return ()=>clearInterval(timer);
    },[isOpen]);

    return (
        <div className={styles.storeRedirectOverlay}>
            <div className={styles.storeRedirectContent}>
                <h1>Going to store</h1>
                <p>You are being directed to a 3rd party site</p>
                <p>Countdown: {countdown}</p>
                <button onClick={handleClick}>Close</button>
            </div>
        </div>
    )
}

export default StoreModal;