const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/login").get(function (req, res) {
  let db_connect = dbo.getDb("cyclingMain");
	db_connect
		.collection("employees")
		.find({})
		.toArray(function (err, result) {
      res.json(result);
    });
})

module.exports = recordRoutes;
