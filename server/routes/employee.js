const express = require("express");
const router = express.Router();
const { Employee } = require("../models/Employee");
const { json } = require("body-parser");

//=================================
//             Employee
//=================================

router.post("/addEmployee", (req, res) => {
  const employee = new Employee(req.body);

  employee.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/list",(req,res)=> {
  Employee.find()
  .exec((err,info)=> {
    if(err) {
    return res.status(400).send(err);
    } else {
        return res.status(200).json({
            success: true,
            info
        });
    }
}); 
});

router.post("/delete",(req,res)=> {
  console.log(req.body);
  Employee.findOneAndDelete({
    _id:req.body._id
  })
  .exec((err,info)=>{
    if(err) {
        return res.status(400).send(err)
    } else {
        res.status(200).json({
            success: true,
            info
        })
    }
})
})

router.post("/login", (req, res) => {
  console.log(req.body);
  Employee.findOne(
    { passcode: req.body.passcode, passcodeconfirm: req.body.password },
    (err, info) => {
      if (err) res.status(400).send(err);
      if (!info) {
        res.status(400).send(err);
        console.log("Check your password and passcode");
      } else {
        res.status(200).json({
          success: true,
          info,
        });
      }
    }
  );
});

module.exports = router;
