const express = require("express");
const router = express.Router();
const { Order } = require("../models/Order");

//=================================
//             Order
//=================================

router.post("/makeorder", (req, res) => {

  const order = new Order(req.body);

  order.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    console.log(req.body);
    return res.status(200).json({
      success: true,
    });
  });
});

module.exports = router;
