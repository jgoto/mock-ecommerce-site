import { useState } from "react";
import styles from './ProductEntry.module.css'

function ProductEntry({product}){
    return (
        <div id={product.id} className={styles.productContainer}>
            <img src={product.image} alt={product.name} />
            <div className={styles.productDetails}>
                <h3>{product.name}</h3>
                <ul>
                    <li>{product.description}</li>
                    <li>{product.dimensions}</li>
                    <li>{product.weight}</li>
                    <li>${product.price}</li>
                </ul>    
            </div>
        </div>
    )
}

export default ProductEntry;