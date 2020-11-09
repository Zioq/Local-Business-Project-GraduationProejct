import React, { useEffect, useState } from "react";


import { Icon, Card, Col, Row } from "antd";
import ImageSlider from "../../components/Utils/ImageSlider";
import Checkbox from "./Sections/CheckBox";
import {foods} from "./Sections/Datas";

//To get the data from DB, use axios
import axios from "axios";

const { Meta } = Card;

function MenuLandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({
    foods:[],
    price:[]
  });

  useEffect(() => {
    // To make a body make rendering 8 items at first

    let body = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(body);
  }, []);

  const getProducts = (body) => {
    //request product data (check the route in the back-end)
    axios.post("api/product/products", body).then((response) => {
      if (response.data.success) {
        if (body.loadMore) {
          setProducts([...Products, ...response.data.productInfo]);
        } else {
          setProducts(response.data.productInfo);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("fail to get the data");
      }
    });
  };

  const loadMoreHandler = () => {
    let skip = Skip + Limit;

    let body = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    };

    getProducts(body);
    setSkip(skip);
  };

  const renderCards = Products.map((product, index) => {
    console.log("product", product);
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card cover={<ImageSlider images={product.images} />}>
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  const showFilteredResults = (filters) => {

    let body = {
      skip: 0,
      limit: Limit,
      filters: filters
    };


    getProducts(body)
    setSkip(0)
  }

  const handleFilters  = (filters, category) => {
      const newFilters = { ...Filters };

      newFilters[category] = filters;

      showFilteredResults(newFilters)
  }

  return (
    <div style={{ width: "100%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>
          Get What you want to <Icon type="shopping-cart" />{" "}
        </h2>
      </div>

      {/* Filter */}


      {/*CheckBox */}
      <Checkbox list= {foods} handleFilters={filters => handleFilters(filters,"foods")}/>

      {/*RadioBox */}

      {/* Search */}

      {/* Card */}

      <Row gutter={[16, 16]}>{renderCards}</Row>

      <br />
      {PostSize >= Limit && 
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}> Show more </button>
        </div>
      }
    </div>
  );
}

export default MenuLandingPage;
