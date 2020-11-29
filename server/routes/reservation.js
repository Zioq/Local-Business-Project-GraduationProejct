const express = require("express");
const router = express.Router();
const { Reservation } = require("../models/Reservation");

//=================================
//             Reservation
//=================================

router.post("/", (req, res) => {
  console.log(req.body);

  const reservation = new Reservation(req.body);

  reservation.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    console.log(req.body);
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/list",(req,res)=> {
  Reservation.find()
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

router.post("/cancel",(req,res)=> {
  Reservation.findOneAndDelete({
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

module.exports = router;
