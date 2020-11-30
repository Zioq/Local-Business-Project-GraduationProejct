/**
 * [Employee Schema Design For User]
 */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const employeeSchema = mongoose.Schema({
 
  name: {
    type: String,
    maxlength: 50,
  },
  position: {
    type: String,
    maxlength: 50,
  },
  phonenumber: {
    type: String,
    maxlength: 50,
  },
  passcode: {
    type: String,
    maxlength: 50,
  },
  password: {
    type: String,
    minlength: 4,
  },
  passcodeconfirm: {
      type:String,
      minlength: 4,
  }

});

// Make MODEL itself, named 'Employee'
const Employee = mongoose.model('Employee',employeeSchema);
// Export MODEL
module.exports = {Employee};