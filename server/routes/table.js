const express = require('express');
const router = express.Router();

const {Table} = require("../models/Table");

router.post("/", (req,res) => {
    const table = new Table(req.body);

    table.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
})

module.exports = router;
