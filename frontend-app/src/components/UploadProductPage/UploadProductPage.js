import React, { useState } from "react";
import {Typography, Button, Form, Input,Radio} from 'antd';
import FileUpload from '../Utils/FileUpload';
import axios  from "axios";

const {Title} = Typography;
const {TextArea} = Input;

const FoodType = [
  { key: 1, value: "Food" },
  { key: 2, value: "Soft Drink" },
  { key: 3, value: "Alcohol" },
  { key: 4, value: "Vegetarian" },
];

function UploadProductPage(props) {


  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [Images, setImages] = useState([]);
  const [FoodValue,setFoodValue] = useState(1);


  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };


  const updateImages = (newImages) => {
    setImages(newImages);
  }

  const handleChange = (event) => {
    setFoodValue(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if(!TitleValue ||!DescriptionValue || !PriceValue || !Images || !FoodValue) {
      return alert("Please fill up all info");
    }

    // Send fillled out data to server by request
    const body = {

      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      foodtype: FoodValue
    };

    axios.post("/api/product",body)
         .then(response => {
           if(response.data.success) {
             console.log(response.data);
             alert("Upload Success");
             props.history.push("/AdminHome");
           } else {
             alert("Upload Failed");
           }
         });
  };



  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Title level={2}> Upload New Menu</Title>
        </div>


        <Form onSubmit={submitHandler} >

            {/* DropZone */}
            <FileUpload refreshFunction={updateImages}/>
         
            <br />

            <label>Title</label>
            <Input
                onChange={onTitleChange}
                value={TitleValue}
            />
            <br />

            <label>Description</label>
            <TextArea
                onChange={onDescriptionChange}
                value={DescriptionValue}
            />
            <br />

            <label>Price($)</label>
            <Input
                onChange={onPriceChange}
                value={PriceValue}
                type="number"
            />
            <br />

            <label>Menu Type</label>
            <br />
            <Radio.Group onChange={handleChange} value={FoodValue}>
                  {FoodType.map(item=>(
                    <Radio key={item.key} value={item.key}> {item.value}</Radio>
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

export default UploadProductPage;
