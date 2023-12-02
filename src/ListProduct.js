import { useEffect, useState } from "react";

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [convert, setConvert] = useState(false);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setConvert(true);
      });
  }, []);
  useEffect(() => {
    console.log(products);
    const updatedProducts = products.slice();
    // const updatedProducts = products.map((item) => {
    //   updatedItem.image = JSON.parse(item.image);
    //   return updatedItem;
    // });
    updatedProducts.forEach((item) => {
      item.image = JSON.parse(item.image);
    });
    console.log(123);
    console.log(updatedProducts);
    console.log(123);
    setProducts(updatedProducts);
  }, [convert]);
  return (
    <>
      <h1>List Products</h1>
      {products.map((item, index) => {
        return (
          <div className="border border-primary mb-4 p-4">
            <li>{item.name}</li>
            <li>{item.price}</li>
            <div>
              {Object.keys(item.image).map((data, index) => (
                <img src={item.image[data]} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
