import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./productCard";
export default ProductDetail()
{
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get(`https://localhost:7198/api/Products/${id}`)
             .then(res => setProduct(res.data));
    }, []);

    return(
        <>
            <div className="row mt-2">
            {
                <div className="col-sm-3 mb-3">
                    <ProductCard data={product} />
                </div>
            }
            </div>
        </>
    )
}