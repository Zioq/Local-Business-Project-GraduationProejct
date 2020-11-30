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

router.post("/list",(req,res) => {
  Order.find({confirmOrder:false})
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

router.post("/confirm",(req,res)=> {

  
  Order.findOneAndUpdate({_id:req.body.orderId},{$set:{confirmOrder:true}}, {new:true}, (err,info) => {
    if(err) return res.status(400).send(err);
    res.status(200).json({
      success: true,
      info
    });
  })
})

router.post("/cancel",(req,res)=> {
  Order.findOneAndDelete({_id:req.body.orderId})
  .exec((err,info)=> {
    if(err) return res.status(400).send(err)
    res.status(200).json({success:true, info})
  })
})

module.exports = router;
