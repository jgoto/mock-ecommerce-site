import { useState } from "react";
import ProductEntry from './ProductEntry';
import products from "../data/products.json";

function ProductList(){
    return (
        <>
            {
                products.map((product)=><ProductEntry key={product.id} product={product} /> )
            }
        </>
    )
}

export default ProductList;