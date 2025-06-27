import { useState } from "react";
import products from "../data/products.json";

function FeaturedProducts(){
    return(
        <>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </>
    )
}

export default FeaturedProducts;