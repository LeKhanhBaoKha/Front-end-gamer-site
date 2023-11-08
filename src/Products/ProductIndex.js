import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductIndex = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product`)
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap">
        {products.map((data) => (
          <div className="col-sm-3 mb-3 ">
            <div className="card h-100" style={{ margin: '0 10px 10px 0' }}>
              <img
                src={data.image}
                alt="img"
                className="card-img-top img-fluid"
                style={{ maxHeight: "120px", maxWidth: "252px" }}
              ></img>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="" style={{ color: "black" }}></a>
                  {data.name}
                </h4>
                <p className="card-text text-success">$
                  {data.price
                    .toFixed(2)
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                </p>
                <p className="card-text" id="des">
                  {data.description}
                </p>
              </div>
              <div className="card-footer bg-white border-0">
                <a href="" className="btn btn-primary">
                  Check out!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductIndex;
