import React, { useState } from "react";
import { Button, Descriptions, Typography, Input, InputNumber,Select } from "antd";
import axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;


function ProductInfo(props) {

  const [TableName, setTableName] = useState("");
  const [NumberOrder, setNumberOrder] = useState(1);
  const [SpecialValue, setSpecialValue] = useState("");

  const onTableChange = (event) => {
    setTableName(event.currentTarget.value);
  };
  const onNumberChange = (value) => {
    setNumberOrder(value);
  };
  const onSpecialChange = (event) => {
    setSpecialValue(event.currentTarget.value);
  };

  
  const clickHandler = (e) => {
    e.preventDefault();
    if(!TableName || !NumberOrder) {
      return alert("Please fill out order information");
    }

    //Information for order to send request
  const body = {
    productId: props.detail._id,
    tableName: TableName,
    numOfOrder:NumberOrder,
    specialOrder: SpecialValue,
    ItemName: props.detail.title,
    price: props.detail.price,
    confirmOrder: false
  }

  axios.post("/api/order/makeorder",body)
  .then(response => {
    if(response.data.success) {
      console.log(response.data);
      alert("Make order success! Servers will be come to you to make final confrim!");
      
    } else {
      alert("Order failed call the manager or server");
    }
  });


  };

  return (
    <div>
     
      <Descriptions title="Food/Drink Information & Make Order">

        <Descriptions.Item label="Price">
          {props.detail.price} 
        </Descriptions.Item>
        <Descriptions.Item label="Information for Food/Drink">
          {props.detail.description}
        </Descriptions.Item>
      
      </Descriptions>

      <div style={{ maxWidth: "400px", margin: "1rem auto" }}>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Title level={2}>Make Order</Title>
        </div>
        <lable>Table Name: </lable>
        <Input onChange={onTableChange} value={TableName} placeholder="Enter your Seat. ex)C1"/>
    
        <lable>Number of Orders:   </lable>
        <InputNumber min={1} max={10} defaultValue={NumberOrder} onChange={onNumberChange}/>
        <br />
        <br />
        <label>Special Memo</label>
        <TextArea onChange={onSpecialChange} value={SpecialValue} placeholder="Leave any information such as allergy"/>
        <br />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button size="large" shape="round" type="danger" onClick={clickHandler}>
          Make Order
        </Button>
      </div>
      </div>
  );
}

export default ProductInfo;
