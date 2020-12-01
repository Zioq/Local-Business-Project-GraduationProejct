import React, { useEffect, useState } from "react";
import ImageSlider from "../../components/Utils/ImageSlider";
import { Icon, Card, Col, Row } from "antd";
import axios from "axios";
const { Meta } = Card;

function RecommandationLandingPage() {
  const [RecommandationsList, setRecommandationsList] = useState([]);

  useEffect(() => {
    getRecommandationsList();
  }, []);

  const getRecommandationsList = () => {
    axios.post("api/product/recommandationList").then((response) => {
      if (response.data.success) {
        setRecommandationsList(response.data.info);
      } else {
        console.log("Failed to get the data");
      }
    });
  };

  const renderCards = RecommandationsList.map((recommandation, index) => {

    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          cover={
            <a href={`/product/${recommandation._id}`}>
              {" "}
              <ImageSlider images={recommandation.images} />
            </a>
          }
        >
          <Meta
            title={recommandation.title}
            description={`$${recommandation.price}`}
          />
        </Card>
      </Col>
    );
  });

  return (
    <div style={{ width: "100%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Today Chef's Choice</h2>
      </div>

      {/* Card */}

      <Row gutter={[16, 16]}>{renderCards}</Row>

    </div>
  );
}

export default RecommandationLandingPage;
