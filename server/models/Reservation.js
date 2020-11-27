const mongoose = require('mongoose');

//Design Table MongoDB Schema
const reservationSchema = mongoose.Schema({
  
    customerName: {
        type:String,
        maxlength:50
    },
    customerPhone: {
        type:String
    },
    specialOrder: {
        type:String,
        maxlength:500
    },
    tableId: {
        type:String,
    },
    tableName: {
        type:String,
    },
    reservationTime: {
        type:String,
    }
},{timestamps:true});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = { Reservation };