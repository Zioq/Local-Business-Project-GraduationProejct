import React from "react";
import {Row,Col} from "antd";


const Table = (props) => {

    const getRow1 = () => {
        let chairs = []
        for (var i =0; i<Math.ceil(props.chair /2 ); i ++ ) {
            chairs.push(
                <span
                    key={i}
                    className= {props.empty ?  "empty-table" : "full-table"}
                >
                </span>
            )
        }
        return chairs;
    }

    const getRow2 = () => {
        let chairs2 = []
        for (var i =0; i<Math.floor(props.chair /2 ); i ++ ) {
            chairs2.push(
                <span
                    key={i}
                    className= {props.empty ?  "empty-table" : "full-table"}
                >
                </span>
            )
        }
        return chairs2;
    }
    
    return(
        <div className= "table-container" style={{margin: "0 3%", border: "solid 2px black", padding: "15px"}}>
            <Col
                className={props.empty ? "table selected-table": "table"}
                onClick = {()=> {
                    props.empty ?
                    props.selectTable(props.name, props.id)
                    : console.log("Tried to select full table");
                }}
            >

            <Row noGutters className="table-rpw" sytle={{padding: "15px"}}>
                <Col className="text-center">
                    {getRow1()}
                </Col>
            </Row>

            <Row noGutters className="table-rpw">
                <Col className="text-center">
                    {getRow2()}
                </Col>
            </Row>
            <p className="text-center table-name">{props.name}</p>

            </Col>
        </div>
    )
}

export default Table