import React, { useEffect, useState } from "react";
import { Icon, Card, Col, Row } from "antd";
import ImageSlider from "../../components/Utils/ImageSlider";
import Checkbox from "../../components/TableLandingPage/Sections/CheckBox";
import RadioBox from "../../components/TableLandingPage/Sections/RadioBox";
import { locations, time } from "./Sections/Datas";
import axios from "axios";

const { Meta } = Card;

function TableLandingPage() {
  const [Tables, setTables] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({
    location: [],
    time: [],
  });

  useEffect(() => {
    // To make a body make rendering 8 items at first

    let body = {
      skip: Skip,
      limit: Limit,
    };

    getTables(body);
  }, []);

  const getTables = (body) => {
    //request table data (check the route in the back-end)
    axios.post("api/table/tables", body).then((response) => {
      if (response.data.success) {
        
        if (body.loadMore) {
          setTables([...Tables, ...response.data.tableInfo]);
        } else {
          setTables(response.data.tableInfo);
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

    getTables(body);
    setSkip(skip);
  };

  const showFilteredResults = (filters) => {
    let body = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };

    getTables(body);
    setSkip(0);
  };

  const handlTime = (value) => {
    const data = time;
    let array = [];
    for (let key in data) {
      if(data[key]._id === parseInt(value,10)) {
        array = data[key].array;
      }
    }
    return array;
  }

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if(category === "time") {
      let timeValues = handlTime(filters);
      newFilters[category] = timeValues;
    }

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const renderCards = Tables.map((table,index)=>{
    console.log("table", table);
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card cover={<a href={`/table/${table._id}`}> <ImageSlider images={table.images} /></a>}>
          <Meta title={table.tableName} description={`${table.description}`} />
        </Card>
      </Col>
    )
  })

  return (
    <div style={{ width: "100%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>
          Reservation Today! <Icon type="carry-out" />{" "}
        </h2>
      </div>

      {/* Filter */}
      <Row gutter={[16, 16]}>
        {/*CheckBox */}
        <Col lg={12} xs={24}>
          <Checkbox
            list={locations}
            handleFilters={(filters) => handleFilters(filters, "location")}
          />
        </Col>

        {/*RadioBox */}
        <Col lg={12} xs={24}>
          <RadioBox 
            list={time}
            handleFilters={(filters) => handleFilters(filters, "time")}
          />
        </Col>
      </Row>

      {/* Card */}

      <Row gutter={[16, 16]}>{renderCards}</Row>

      <br />
      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}> Show tables </button>
        </div>
      )}

    </div>
  );
}

export default TableLandingPage;
