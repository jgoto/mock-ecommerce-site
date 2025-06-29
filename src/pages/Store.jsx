import ProductList from "../components/ProductList";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Store(){
    const location = useLocation();

    useEffect(()=>{
        if(location.hash){
            const el = document.getElementById(location.hash.substring(1));

            if(el){
                el.scrollIntoView({behavior: 'smooth'});
            }
        }
    },[location]);
    
    return (
        <>
            <h2>Wally's Widgets Store</h2>
            <ProductList />
        </>        
    )
}