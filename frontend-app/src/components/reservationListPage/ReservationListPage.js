import React,{ useEffect, useState} from 'react';
import axios from "axios";
import "./reservationListPage.css";
import {Icon} from "antd";
import { useHistory } from 'react-router-dom';

function ReservationListPage() {

    const histroy = useHistory();

    const [ReservationList, setReservationList] = useState([]);

    // Get the reservation list Data
    useEffect(()=>{
        fecthReservationList();
    },[]);

    const fecthReservationList = ()=> {

        axios.post("/api/makereservation/list")
        .then(response=>{
            if(response.data.success) {
                console.log(response.data);
                setReservationList(response.data.info);
                
            }else {
                alert("Failed to get the response data ");
            }
        });

    }

    const renderTableBody = ReservationList.map((reservation,index)=>{
        return (
            <tr key={index}>
                <td>{reservation.tableName}</td>
                <td>{reservation.reservationTime}( Pm)</td>
                <td>{reservation.customerName}</td>
            </tr>
        )
    })

    return (
        <div style={{width:"85%", margin: '3rem auto'}}>
        <div style={{ textAlign: "center" }}>
        <h2>
          Check Today's Reservation List <Icon type="schedule" />{" "}
        </h2>
      </div>
        
        <table>
            <thead>
            <tr>
                <th>Table Name</th>
                <th>Reservation Time</th>
                <th>Customer Name</th>
            </tr>
            </thead>
            <tbody>
                {renderTableBody}
            </tbody>
        </table>
        </div>
    )
}

export default ReservationListPage
