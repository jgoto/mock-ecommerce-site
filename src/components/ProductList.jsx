import { useState } from "react";
import ProductEntry from './ProductEntry';
import products from "../data/products.json";

function ProductList({openStoreModal}){
    return (
        <>
            {
                products.map((product)=><ProductEntry openStoreModal={openStoreModal} key={product.id} product={product} /> )
            }
        </>
    )
}

export default ProductList;