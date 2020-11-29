import React,{ useEffect, useState} from 'react';
import axios from "axios";
import "./reservationListPage.css";
import {Button} from "antd";

function ReservationListManagementPage() {

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

    const cancelReservation = (reservationId) => {
        const  body ={_id: reservationId}
        axios.post('/api/makereservation/cancel',body)
        .then(response=> {
            if(response.data.success) {
                console.log(response.data);
                fecthReservationList();
            }else {
                alert("Failed to get the response");
            }
        });

    } 

    const renderTableBody = ReservationList.map((reservation,index)=>{
        return (
            <tr key={index}>
                <td>{reservation.tableName}</td>
                <td>{reservation.reservationTime}( Pm)</td>
                <td>{reservation.customerName}</td>
                <td><Button size="large" shape="round" type="danger" onClick={()=>cancelReservation(reservation._id)}>Cancel the reservation</Button></td>

            </tr>
        )
    })

    return (
        <div style={{width:"85%", margin: '3rem auto'}}>
        <h3>Today Reservation List</h3>
        
        <table>
            <thead>
            <tr>
                <th>Table Name</th>
                <th>Reservation Time</th>
                <th>Customer Name</th>
                <th>Cancel the reservation</th>
            </tr>
            </thead>
            <tbody>
                {renderTableBody}
            </tbody>
        </table>
        </div>
    )
}

export default ReservationListManagementPage
