import React, { useEffect,useState } from "react";

import { Icon, Col, Card, Row, Carousel } from "antd";

//To get the data from DB, use axios
import axios from "axios";
const { Meta } = Card;

function MenuLandingPage() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.post("api/product/products").then((response) => {
      if (response.data.success) {
        console.log(response.data);

        setProducts(response.data.productInfo);
      } else {
        alert("Failed to get the data");
      }
    });
  }, []);

  const renderCards = Products.map((product, index) => {
    console.log("product", product);
    return (
      <Card cover={<img src= {`http://localhost:5000/${product.images}`}/>} >
        <Meta  
            title = {product.title}
            description = {`$${product.price}`}

        />
      </Card>
    );
  });

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>
          Get What you want to eat <Icon type="shop" />{" "}
        </h2>
      </div>

      {/* Filter */}

      {/*CheckBox */}

      {/* Search */}

      {/* Card */}
      {renderCards}

      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button> Show more </button>
      </div>
    </div>
  );
}

export default MenuLandingPage;
