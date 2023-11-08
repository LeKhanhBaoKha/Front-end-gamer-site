import axios from "axios";
import { faCheck, faEdit, faPlus, faTimes, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "./productCard";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductList =() =>{
    const [product, setProduct] = useState([]);
    var i = 0 ;

    useEffect(()=>{
        axios.get(`https://localhost:7238/api/Products`)
             .then(res => setProduct(res.data));
    }, []);



    return(
        <>  
            <Table>
                <thead className="table-dark">
                    <tr>
                        <th className="col">#</th>
                        <th className="col-2">Name</th>
                        <th className="col-2">description</th>
                        <th className="col-1">Price</th>
                        <th className="col-1">Stock</th>
                        <th className="col-1">Image</th>
                        <th className="col-2">ProductType</th>
                        <th className="col-2">Function</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(item =>
                            <tr className="align-middle">
                                <td>{i++}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td>
                                    <img src={`https://localhost:7238/images/products/${item.image}`} className="img-fluid "></img>
                                </td>
                                <td>{item.producttypeid}</td>
                                <td>
                                    <Button variant="info" style={{ marginRight: "5px" }}>
                                        <FontAwesomeIcon icon={faUser} />
                                    </Button>
                                    <Link to={``} className="btn btn-warning" style={{ marginRight: "5px" }}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>
                                    <Button variant="danger" >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
} 
export default ProductList;