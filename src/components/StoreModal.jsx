import { useState } from "react";
import styles from './StoreModal.module.css'

function StoreModal({isOpen, onClose, countdown, storeTarget}){
    function handleClick(){
        onClose();
    }

    return (
        <div className={styles.storeRedirectOverlay}>
            <div className={styles.storeRedirectContent}>
                <h1>Going to store</h1>
                <p>You are being directed to a 3rd party site</p>
                <button onClick={handleClick}>Close</button>
            </div>
        </div>
    )
}

export default StoreModal;