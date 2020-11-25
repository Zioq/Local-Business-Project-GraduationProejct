const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Product } = require("../models/Product");

//=================================
//             Product
//=================================

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/image", (req, res) => {
  // Save image data which send from front end
  // Use multer libary (Install libarary)
  upload(req, res, (err) => {
    if (err) {
      return req.json({ success: false, err });
    }
    // Send to front-end about info what image file was saved
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/", (req, res) => {
  // The data filled out form by submit, save this data to DB
  const product = new Product(req.body);
  product.save((err) => {
    if (err) return res.status(400).json({ success: false });
    console.log(req.body);
    return res.status(200).json({ success: true });

  });
});

router.post("/products", (req, res) => {
  // get the body what send from front-end
  let limit = req.body.limit ? parseInt(req.body.limit) : 20;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let term = req.body.searchTerm;

  
  let findArgs = {};
  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      console.log("key", key);
      if (key === "price") {
        findArgs[key] = {
          //greate than equal
          $gte: req.body.filters[key][0],
          //less than equal
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  console.log("findArgs", findArgs);

  //If there is data from search input
  if (term) {
    // Get all data from product collection by User search `term`
    // Find all data from `Product` collection
    Product.find(findArgs)
      .find({ $text: { $search: term } })
      .skip(skip)
      .limit(limit)
      .exec((err, productInfo) => {
        if (err) return res.status(400).json({ success: false, err }); 

        return res.status(200).json({
          success: true,
          productInfo,
          postSize: productInfo.length,
        });
      });
  } else {
    // Get all data from product collection
    // Find all data from `Product` collection
    Product.find(findArgs)
      .skip(skip)
      .limit(limit)
      .exec((err, productInfo) => {
        if (err) return res.status(400).json({ success: false, err });

        return res.status(200).json({
          success: true,
          productInfo,
          postSize: productInfo.length,
        });
      });
  }
});


// Get the Product info by Product_id
router.get("/products_by_id", (req, res) => {

  let type = req.query.type;
  let productId = req.query.id;

  Product.find({_id:productId})
    .exec((err,product)=> {
      if(err) return res.status(400).send(err);
      return res.status(200).send({success:true, product});
    })

});


module.exports = router;
