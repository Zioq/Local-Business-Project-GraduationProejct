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

module.exports = router;
