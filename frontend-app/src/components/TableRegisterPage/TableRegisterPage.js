import React, { useState } from "react";
import {Typography, Button, Form, Input,Radio} from 'antd';
import FileUpload from '../Utils/FileUpload';
import axios  from "axios";

const {Title} = Typography;
const {TextArea} = Input;

const Location = [
  { key: 1, value: "Patio" },
  { key: 2, value: "Bar" },
  { key: 3, value: "Inside" },
];

function UploadTablePage(props) {


  const [TableName, setTableName] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [Time, setTime] = useState(0);
  const [Images, setImages] = useState([]);
  const [LocationValue,setLocationValue] = useState(1);
  const [Reservation,setReservation] = useState(false);


  const onTableChange = (event) => {
    setTableName(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onTimeChange = (event) => {
    setTime(event.currentTarget.value);
  };


  const updateImages = (newImages) => {
    setImages(newImages);
  }

  const handleChange = (event) => {
    setLocationValue(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if(!TableName ||!DescriptionValue || !Time || !Images || !LocationValue) {
      return alert("Please fill up all info");
    }

    // Send fillled out data to server by request
    const body = {

      tableName: TableName,
      description: DescriptionValue,
      time: Time,
      images: Images,
      location: LocationValue,
      reservation: Reservation
    };

    axios.post("/api/table",body)
         .then(response => {
           if(response.data.success) {
             console.log(response.data);
             alert("Table setting Success");
             props.history.push("/AdminHome");
           } else {
             alert("Upload Failed");
           }
         });
  };



  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Title level={2}>Add New Table Location</Title>
        </div>


        <Form onSubmit={submitHandler} >

            {/* DropZone */}
            <FileUpload refreshFunction={updateImages}/>
         
            <br />

            <label>Table Name</label>
            <Input
                onChange={onTableChange}
                value={TableName}
            />
            <br />

            <label>Description</label>
            <TextArea
                onChange={onDescriptionChange}
                value={DescriptionValue}
            />
            <br />

            <label>Time setting (Pm)</label>
            <Input
                onChange={onTimeChange}
                value={Time}
                type="number"
            />
            <br />

            <label>Table Location</label>
            <br />
            <Radio.Group onChange={handleChange} value={LocationValue}>
                  {Location.map(spot=>(
                    <Radio key={spot.key} value={spot.key}> {spot.value}</Radio>
                  ))}
            </Radio.Group>
         
            <br />
            <br />
            <Button onClick={submitHandler}>
                Submit
            </Button>

        </Form>

    </div>
)
}

export default UploadTablePage;
