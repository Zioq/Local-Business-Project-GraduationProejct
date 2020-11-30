import React, { useState } from "react";
import { Button, Descriptions, Typography, Input } from "antd";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const { Title } = Typography;
const { TextArea } = Input;

function TableInfo(props) {

  const history = useHistory();

  const [NameValue, setNameValue] = useState("");
  const [PhoneValue, setPhoneValue] = useState("");
  const [SpecialValue, setSpecialValue] = useState("");

  const onNameChange = (event) => {
    setNameValue(event.currentTarget.value);
  };
  const onPhoneNumberChange = (event) => {
    setPhoneValue(event.currentTarget.value);
  }
  const onSpecialChange = (event) => {
    setSpecialValue(event.currentTarget.value);
  }

  const clickHandler = (e) => {
      e.preventDefault();
    if(!NameValue || !PhoneValue) {
        return alert("Please fill up the reservation information");
    }

    //send filled out data to server by request

    const body = {
        customerName:NameValue,
        customerPhone:PhoneValue,
        specialOrder: SpecialValue,
        tableId:props.detail._id,
        tableName:props.detail.tableName,
        reservationTime:props.detail.time
    }
    console.log("Body",body);

    const tableStatus = {
      tableId:props.detail._id,
        tableName:props.detail.tableName,
        reservationTime:props.detail.time
    };


    axios.post("/api/makereservation",body)
    .then(response => {
      if(response.data.success) {
        console.log(response.data);
        //alert("Reservation Success");
        
      } else {
        alert("Reservation Failed");
      }
    });

    axios.put("/api/table/confirmReservation",tableStatus)
    .then(response=> {
      if(response.data.success) {
        console.log("Reservation Confirm", response.data)
        alert("Reservation Success");
        history.goBack();

      } else {
        alert("Reservation Failed");
      }
    })
  };

  return (
    <div>
      <Descriptions title="Table Reservation">
        <Descriptions.Item label="Table Name">
          {props.detail.tableName}{" "}
        </Descriptions.Item>

        <Descriptions.Item label="Reservation Time (PM)">
          {props.detail.time} Pm
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {props.detail.description}
        </Descriptions.Item>
      
      </Descriptions>
      <div style={{ maxWidth: "400px", margin: "1rem auto" }}>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Title level={2}>Make reservation</Title>
        </div>
        <lable>Name</lable>
        <Input onChange={onNameChange} value={NameValue} />
        <lable>Phone Number</lable>
        <Input onChange={onPhoneNumberChange} value={PhoneValue} />
        <label>Speical Meno</label>
        <TextArea onChange={onSpecialChange} value={SpecialValue} />
        <br />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button size="large" shape="round" type="danger" onClick={clickHandler}>
          Make a reservation
        </Button>
      </div>
    </div>
  );
}

export default TableInfo;
