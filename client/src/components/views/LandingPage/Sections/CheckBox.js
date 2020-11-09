import React, {useState} from "react";
import { Collapse, Checkbox } from "antd";


const {Panel} = Collapse;

function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {
        //Find # of Index what user click
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    
    }


    const renderCheckLists = () => props.list && props.list.map((value,index) => (
        <React.Fragment key={index} >   
            <Checkbox
                onChange={() => handleToggle(value._id)}
                type="checkbox"
                checked={Checked.indexOf(value._id) === -1 ? false : true}
            />
                   <span>{value.name}</span>
        </React.Fragment>
    ))

  return (
    <div>

      <Collapse defaultActiveKey={["1"]} >
        <Panel header="This is panel header 1" key="1">
        {renderCheckLists()}
      
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
