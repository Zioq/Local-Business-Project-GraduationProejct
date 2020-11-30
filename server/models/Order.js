const mongoose = require('mongoose');

//Design Table MongoDB Schema
const orderSchema = mongoose.Schema({
  
    projectId: {
        type: String
    },
    tableName: {
        type:String,
        maxlength:50
    },
    numOfOrder: {
        type:Number,
        default:0
    },
    specialOrder: {
        type:String,
        maxlength:500
    },
    ItemName: {
        type:String,
    },
    price: {
        type:Number,
        default:0
    },
    confirmOrder: {
        type:Boolean,
        default: false,
    }
},{timestamps:true});

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order };