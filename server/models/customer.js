/**
 * [Customer Schema Design For Customer]
 */

const mongoose = require("mongoose");
//const bcrypt = require('bcrypt');
const saltRounds =10;
const jwt = require("jsonwebtoken");

const customerSchema =mongoose.Schema({
    name: {
        type: String,
        maxlenth: 50,
    },
    table: {
        type: String,
        maxlenth: 50,
    },
    cart: {
        type: Array,
        defult: []
    },
    history: {
        type: Array,
        defult: []
    },
    token: {
        type: String,
      },
      tokenExp: {
        type: Number,
      },
});

customerSchema.methods.generateToken = function(cb) {
    var customer = this;
    var token = jwt.sign(user._id.toHexString(), 'secret');

    customer.token = token;
    customer.save(function(err,customer){
        if(err) return cb(err);
        cb(null,customer);
    });
};


//Authentication
customerSchema.statics.findByToken = function(token,cb) {
    var customer = this;
  
    jwt.verify(token,'secret', function(err,decode) {
        customer.findOne({"_id":decode, "token":token}, function(err,customer) {
            if(err) return cb(err);
            cb(null,customer);
        });
    });
};

// Make Model itselt, named `Customer`
const Customer = mongoose.model('Customer',customerSchema);
// Export MODEL
module.exports = {Customer};