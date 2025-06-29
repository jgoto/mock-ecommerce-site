import { useState } from "react";
import products from "../data/products.json";
import ProductEntry from "./ProductEntry";
import styles from "./FeaturedProducts.module.css";
import FeaturedProductsTile from "./FeaturedProductTile";

function FeaturedProducts(){
    return(
        <>
            {
                products.map((product)=>{
                    if(product.featured===true){
                        return <FeaturedProductsTile key={product.id} product={product} />
                    }
                })
            }
        </>
    )
}

export default FeaturedProducts;