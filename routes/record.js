const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/login").get(function (req, res) {
  let db_connect = dbo.getDb("cyclingMain");
	console.log(db_connect);
	db_connect
		.collection("employees")
		.find({})
		.toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
})

module.exports = recordRoutes;
