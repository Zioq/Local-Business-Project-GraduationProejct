import React, { useState } from "react";
import {Typography, Button, Form, Input} from 'antd';
import FileUpload from "../../Utils/FileUpload";
import axios  from "axios";

const {Title} = Typography;
const {TextArea} = Input;

const Continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

function UploadProductPage(props) {


  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [ContinentValue,setContinentValue] = useState(1);
  const [Images, setImages] = useState([]);


  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const onContinentsSelectChange = (event) => {
    setContinentValue(event.currentTarget.value);
  }

  const updateImages = (newImages) => {
    setImages(newImages);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if(!TitleValue ||!DescriptionValue || !PriceValue || !ContinentValue || !Images) {
      return alert("Please fill up all info");
    }

    // Send fillled out data to server by request
    const body = {

      writer : props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      continent: ContinentValue
    };

    axios.post("/api/product",body)
         .then(response => {
           if(response.data.success) {
             alert("Upload Success");
             props.history.push("/");
           } else {
             alert("Upload Failed");
           }
         });
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Title level={2}> Upload Travel Product</Title>
        </div>


        <Form onSubmit={submitHandler} >

            {/* DropZone */}
            <FileUpload refreshFunction={updateImages}/>
         
            <br />
            <br />
            <label>Title</label>
            <Input
                onChange={onTitleChange}
                value={TitleValue}
            />
            <br />
            <br />
            <label>Description</label>
            <TextArea
                onChange={onDescriptionChange}
                value={DescriptionValue}
            />
            <br />
            <br />
            <label>Price($)</label>
            <Input
                onChange={onPriceChange}
                value={PriceValue}
                type="number"
            />
            <br /><br />
            <select onChange={onContinentsSelectChange} value={ContinentValue}>
                {Continents.map(item => (
                    <option key={item.key} value={item.key}>{item.value} </option>
                ))}
            </select>
            <br />
            <br />

            <Button onClick={submitHandler}>
                Submit
            </Button>

        </Form>

    </div>
)
}

export default UploadProductPage;