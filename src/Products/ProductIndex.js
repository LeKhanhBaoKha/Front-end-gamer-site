import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal,Row,Col,Button } from "react-bootstrap";
import axiosClient from "../axiosClient";
const ProductIndex = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product`)
      .then((res) => setProducts(res.data));
  }, []);

  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const handleShow = (id) => {
    setSelectedProduct(products.find((product) => product.id === id));
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="d-flex flex-wrap">
        {products.map((data) => (
          <div className="col-sm-3 mb-3 ">
            <div className="card h-100" style={{ margin: "0 10px 10px 0" }}>
              <img
                src={`http://localhost:8000/storage/${data.image}`}
                alt="img"
                className="card-img-top img-fluid"
                style={{ maxHeight: "120px", maxWidth: "300px" }}
              ></img>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="" style={{ color: "black" }}></a>
                  {data.name}
                </h4>
                <p className="card-text text-success">
                  $
                  {data.price
                    .toFixed(2)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                </p>
                <p className="card-text" id="des">
                  {data.description}
                </p>
              </div>
              <div className="card-footer bg-white border-0">
                    <Button variant="success" onClick={()=>handleShow(data.id)} >
                    Check out!
                    </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} size="lg" onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={7}>
              <img
                src={`http://localhost:8000/storage/${selectedProduct.image}`}
                alt="img"
                className="img-fluid"
                style={{ width: "100%" }}
              ></img>
            </Col>
            <Col md={4}>
              <dl>

                <dd><h2 className="d-inline">Price:</h2> <h2 className="text-success d-inline">${selectedProduct.price?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</h2></dd>

                <dd>{selectedProduct.description}</dd>
              </dl>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Add to card
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductIndex;
