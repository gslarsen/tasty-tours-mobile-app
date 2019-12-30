const router = require("express").Router();
const City = require("../models/city");
const Tour = require("../models/tour");
const Location = require("../models/location");

router.get("/cities", (req, res, next) => {
  City.find({}, (err, data) => {
    res.send({
      cities: data
    });
  });
});

router.get("/tours", (req, res, next) => {
  Tour.find({}, (err, data) => {
    res.send({
      tours: data
    });
  });
});

router.get("/locations", (req, res, next) => {
  Location.find({}, (err, data) => {
    res.send({
      locations: data
    });
  });
});

module.exports = router;
