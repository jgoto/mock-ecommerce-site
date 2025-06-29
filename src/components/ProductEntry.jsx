import { useState } from "react";

function ProductEntry({product}){
    return (
        <>
            <h3>{product.name}</h3>
            <ul>
                <li>{product.description}</li>
                <li>{product.dimensions}</li>
                <li>{product.weight}</li>
                <li>${product.price}</li>
            </ul>
            <img src={product.image} />
        </>
    )
}

export default ProductEntry;