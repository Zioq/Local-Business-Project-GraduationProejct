// For test, Generate Fake tables data with JSON Files and parse into MongoDB Table Objects



const mongoose = require("mongoose");
const Table = require("../models/Table").model;
const fs = require("fs");

let tableData = fs.readFileSync(__dirname + "/allTables.json");
tableData = JSON.parse(tableData).tables;

let allTables = [];
tableData.forEach(table => {
  allTables.push(new Table(table));
});

module.exports = allTables;