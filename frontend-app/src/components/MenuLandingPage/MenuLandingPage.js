import React, { useEffect, useState } from "react";

import { Icon, Card, Col, Row } from "antd";

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
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          key={index}
          cover={<img src={`http://localhost:5000/${product.images}`} />}
        >
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
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
      <Row gutter={[16, 16]}>{renderCards}</Row>
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button> Show more </button>
      </div>
    </div>
  );
}

export default MenuLandingPage;
