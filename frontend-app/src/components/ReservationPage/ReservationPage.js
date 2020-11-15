import React,{useState,useEffect} from 'react';
import {Row,Col,Input,Button} from "antd";
import {UncontrolledDropdown, DropdownToggle, DropdownMenu,DropdownItem,} from "reactstrap";

import Table from "./Table";

function ReservationPage() {

    //Total Tables
    const [totalTables, setTotalTables] = useState([]);
    
    //Customer's Table Selection
    const [selection, setSelection] = useState({
        table: {
          name: null,
          id: null
        },
        date: new Date(),
        time: null,
        location: "Any Location",
        size: 0
      });

    //Customer's Reservation Details
    const [booking, setBooking] = useState({
        name: "",
        phone: "",
        email: "",
    });

    // Table Location and Reservation Time
    const [locations] = useState(["Any Location", "Patio", "Bar", "Inside"]);
    const [times] = useState(["5:00 PM", "6:00 PM", "7:00 PM" , "8:00 PM", "9:00 PM"]);

    // Validation for Reservation Status
    const [reservationError, setReservationError] = useState(false);

    // Date function
    const getDate = () => {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
          const date =
            months[selection.date.getMonth()] +
            " " +
            selection.date.getDate() +
            " " +
            selection.date.getFullYear();
          let time = selection.time.slice(0, -2);
          time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
          console.log(time);
          const datetime = new Date(date + " " + time);
          return datetime;
    };

    // Get Empty Tables
    const getEmptyTables = () => {
        let tables = totalTables.filter(table => table.isAvailable);
        return tables.length;
    };


  useEffect(() => { 
    // Check availability of tables from DB
    if (selection.time && selection.date) {
      (async () => {
        let datetime = getDate();
        let res = await fetch("http://localhost:5000/availability", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              date: datetime
            })
        });
        res = await res.json();
        // Filter tables with location and size criteria
        let tables = res.tables.filter(
            table =>
              (selection.size > 0 ? table.capacity >= selection.size : true) &&
              (selection.location !== "Any Location"
                ? table.location === selection.location
                : true)
          );
          setTotalTables(tables);
      })();
    }
  }, [selection.time, selection.date, selection.size, selection.location]);
   // Make reservation if all details are filled out
   const reserve = async () => {
    if (
        (booking.name.length === 0) |
        (booking.phone.length === 0) |
        (booking.email.length === 0)
    ) {
      console.log("Incomplete details");
      setReservationError(true);
    } else {
        const datetime = getDate();
      let res = await fetch("http://localhost:5000/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...booking,
          date: datetime,
          table: selection.table.id
        })
      });
      res = await res.text();
      console.log("Reserved: " + res);
    }
  };

  const selectTable = (table_name, table_id) => {
    setSelection({
      ...selection,
      table: {
        name: table_name,
        id: table_id,
      },
    });
  };

  const getSizes = () => {
    let newSizes = [];
    for (let i = 1; i < 8; i++) {
        newSizes.push(
            <DropdownItem
              
              key={i}
              className="booking-dropdown-item"
              onClick={e => {
                let newSel = {
                  ...selection,
                  table: {
                    ...selection.table
                  },
                  size: i
                };
                setSelection(newSel);
              }}
            >
              {i}
            </DropdownItem>
          );
    }
    return newSizes;
  };

  const getLocations = () => {
    let newLocations = [];
    locations.forEach(loc => {
      newLocations.push(
        <DropdownItem
          key={loc}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              table: {
                ...selection.table
              },
              location: loc
            };
            setSelection(newSel);
          }}
        >
          {loc}
        </DropdownItem>
      );
    });
    return newLocations;
  };

  const getTimes = () => {
    let newTimes = [];
    times.forEach(time => {
      newTimes.push(
        <DropdownItem
          key={time}
          className="booking-dropdown-item"
          onClick={_ => {
            let newSel = {
              ...selection,
              table: {
                ...selection.table
              },
              time: time
            };
            setSelection(newSel);
          }}
        >
          {time}
        </DropdownItem>
      );
    });
    return newTimes;
  };

  const getTables = () => {
    console.log("Getting Tables");
    if (getEmptyTables() > 0) {
        let tables = [];
        totalTables.forEach(table => {
          if (table.isAvailable) {
            tables.push(
              <Table
                key={table._id}
                id={table._id}
                chairs={table.capacity}
                name={table.name}
                empty
                selectTable={selectTable}
              />
            );
          } else {
            tables.push(
              <Table
                key={table._id}
                id={table._id}
                chairs={table.capacity}
                name={table.name}
                selectTable={selectTable}
              />
            );
          }
        });
        return tables;
      }
  };


    return (
        <div>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
            {!selection.table.id ? "Book a Table" : "Confirm Reservation"}
          </p>

          <p className="seleted-table">
            {selection.table.id
              ? "You are booking table " + selection.table.name
              : null}
          </p>

          {reservationError ? (
            <p className="reservation-error">
              {" "}
              * Please fill out all of the details
            </p>
          ) : null}
        </Col>
      </Row>

      {!selection.table.id ? (
        <div id="reservation-stuff">
          <Row noGutters className="text-center align-items-center">
          <Col xs="12" sm="3">
              <input
                type="date"
                required="required"
                className="booking-dropdown"
                value={selection.date.toISOString().split("T")[0]}
                onChange={e => {
                  if (!isNaN(new Date(new Date(e.target.value)))) {
                    let newSel = {
                      ...selection,
                      table: {
                        ...selection.table
                      },
                      date: new Date(e.target.value)
                    };
                    setSelection(newSel);
                  } else {
                    console.log("Invalid date");
                    let newSel = {
                      ...selection,
                      table: {
                        ...selection.table
                      },
                      date: new Date()
                    };
                    setSelection(newSel);
                  }
                }}
              ></input>
            </Col>


             <Col xs="12" sm="3">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.time === null ? "Select a Time" : selection.time}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getTimes()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>

            <Col xs="12" sm="3">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.location}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getLocations()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>

            <Col xs="12" sm="3">
              <UncontrolledDropdown>
                <DropdownToggle color="none" caret className="booking-dropdown">
                  {selection.size === 0
                    ? "Select a Party Size"
                    : selection.size.toString()}
                </DropdownToggle>
                <DropdownMenu right className="booking-dropdown-menu">
                  {getSizes()}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          </Row>

          <Row nuGutters className = "table-display">
                <Col>
                    {getEmptyTables() > 0 ? (
                        <p className="available-tables">{getEmptyTables()} available</p>
                    ): null}
                    {selection.date && selection.time ? (
                        getEmptyTables() > 0 ? (
                            <div>
                                <div className= "table-key">
                                    <span className="empty-table"> &nbsp; Available &nbsp;&nbsp;</span>
                                    <span className="full-table" style={{backgroundColor:"red", border:"solid 2 px white", }}> &nbsp; Unavailable &nbsp;&nbsp;</span>
                                </div>
                                <Row noGutters>
                                    {getTables()}
                                </Row>
                            </div>
                        ) : (
                            <p className="table-display-message'"> No Available</p>
                        )
                    ): (
                        <p className="table-display-message">
                            Please select a date and time for your reservation
                        </p>
                    )}

                </Col>
          </Row>

        </div>
      ) : (
          <div id="confirm-reservation-stuff">
            <Row nuGutters className="text-center justify-content-center reservation-details-container">

                <Col xs="12" sm="3" className="reservation-details" >
                <Input
                    type="text"
                    bsSize="lg"
                    placeholder="Name"
                    className="reservation-input"
                    value={booking.name}
                    onChange= {e => {
                        setBooking({
                            ...booking,
                            name: e.target.value
                        });
                    }}

                />
                </Col>

                <Col xs="12" sm="3" className="reservation-details" >
                <Input
                    type="text"
                    bsSize="lg"
                    placeholder="Phone Number"
                    className="reservation-input"
                    value={booking.phone}
                    onChange= {e => {
                        setBooking({
                            ...booking,
                            phone: e.target.value
                        });
                    }}

                />
                </Col>

                <Col xs="12" sm="3" className="reservation-details" >
                <Input
                    type="text"
                    bsSize="lg"
                    placeholder="Email"
                    className="reservation-input"
                    value={booking.email}
                    onChange= {e => {
                        setBooking({
                            ...booking,
                            email: e.target.value
                        });
                    }}

                />
                </Col>

            </Row>
            <Row nuGutters className="text-center">
                <Col>
                <Button
                    color="none"
                    className="book-table-btn"
                    onClick= {()=> {
                        reserve();
                    }}
                >
                Book Now
                </Button>


                </Col>

            </Row>

          </div>
      )}
    </div>
    )
}

export default ReservationPage
