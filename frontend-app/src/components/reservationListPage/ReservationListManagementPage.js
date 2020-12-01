import React,{ useEffect, useState} from './node_modules/react';
import axios from "./node_modules/axios";
import "./reservationListPage.css";
import {Button} from "./node_modules/antd";
import EmployeeNavigation from "../EmployeeNavigation";

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
                <td>{reservation.customerPhone}</td>
                <td><Button size="large" shape="round" type="danger" onClick={()=>cancelReservation(reservation._id)}>Cancel the reservation</Button></td>

            </tr>
        )
    })

    return (
        <div style={{width:"100%", margin: '1rem auto'}}>
        <EmployeeNavigation />
        <h3>Today Reservation List</h3>
        
        <table>
            <thead>
            <tr>
                <th>Table Name</th>
                <th>Reservation Time</th>
                <th>Customer Name</th>
                <th>Customer Phone Number</th>
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
