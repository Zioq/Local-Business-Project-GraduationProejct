import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import { Row, Col } from "antd";

function DetailProductPage(props) {
  const producutId = props.match.params.productId;
  const [Product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`/api/product/products_by_id?id=${producutId}&type=single`)
      .then((response) => {
        if (response.data.success) {
          console.log("response:", response.data);
          setProduct(response.data.product[0]);
        } else {
          alert("Failed to get product info detail");
        }
      });
  }, []);

  return (
    <div>
      <div style={{ width: "100%", padding: "3rem 5rem" }}>
        <div sytle={{ display: "flex", justifyContent: "center" }}>
          <h1>{Product.title}</h1>
        </div>

        <br />
        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24}>
            {/**Menu Image */}
            <ProductImage detail={Product}/>
          </Col>

          <Col lg={12} sm={24}>
            {/**Menu Info */}
            <ProductInfo detail={Product}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DetailProductPage;
