import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";
const { Panel } = Collapse;

function CheckBox(props) {

    const [Checked,setChecked] = useState([])


    const handleToggle = (value)=> {
        //Find thd clicked'index
        const currentIndex = Checked.indexOf(value);
        // If the clicked index is already exists in the Chcked state, 
        const newChecked  = [...Checked]

        if(currentIndex === -1) {//or add  State
            newChecked.push(value)
        } else {// remove it
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked);
        props.handleFilters(newChecked);
    };



    const renderCheckboxLists = () => props.list && props.list.map((value,index) => (
        <React.Fragment key={index} >   
            <Checkbox onChange={()=>handleToggle(value._id)} type="checkbox" checked={Checked.indexOf(value._id) === -1 ? false : true}/>
                   <span>{value.name}</span>
        </React.Fragment>
    ))



  return (
    <div>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Find Table" key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
