import { useState } from "react";
import products from "../data/products.json";
import ProductEntry from "./ProductEntry";
import styles from "./FeaturedProducts.module.css";
import FeaturedProductsTile from "./FeaturedProductTile";

function FeaturedProducts(){
    return(
        <div className={styles.featuredContent}>
            <h2>Featured</h2>
            <div className={styles.featuredGrid}>
            {
                products.map((product)=>{
                    if(product.featured===true){
                        return <FeaturedProductsTile key={product.id} product={product} />
                    }
                })
            }
            </div>            
        </div>
    )
}

export default FeaturedProducts;