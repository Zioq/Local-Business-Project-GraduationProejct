const mongoose = require("mongoose");

const reservationSchema = require("./Reservation").schema;

let tableSchema = new mongoose.Schema({

    tablename: {
        type: String,
        maxlength:50
    },
    capacity: {
        type: Number,
        default: 0
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    location: {
        type: String,
        maxlength:50
    },
    reservation: {
        required: false,
        type: reservationSchema
    }

});

let Table = mongoose.model("Table",tableSchema);                                     
module.exports = {Table};
module.exports.model = Table;
module.exports.schema = tableSchema;