import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FeaturedProducts.module.css";

function FeaturedProductsTile({product}){
    return(
        <div className={styles.tile}>
            <div>
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
            </div>            
            <Link to={"/store#" + product.id}><img src={product.image} alt={product.name}/></Link>
        </div>
    );
}

export default FeaturedProductsTile;