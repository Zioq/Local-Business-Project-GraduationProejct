const mongoose = require('mongoose');

//Design Table MongoDB Schema
const tableSchema = mongoose.Schema({
  
    tableName: {
        type:String,
        maxlength:50
    },
    description: {
        type:String
    },
    time: {
        type:Number,
        default:0
    },
    images: {
        type:Array,
        default:[]
    },
    location: {
        type:Number,
        default:1
    },
    reservation: {
        type: Boolean,
        default: false,
    }
},{timestamps:true});

const Table = mongoose.model('Table', tableSchema);

module.exports = { Table };