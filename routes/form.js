const express = require("express");
const con = require("../middleware/mysql");
const router = express.Router();

router.post("/form", function (req, res) {
  const {
    certificate,
    university,
    name,
    mothername,
    fathername,
    mobile,
    email,
    alternate,
    dob,
    course,
    subcourse,
    enrollment,
    passingyear,
    house,
    state,
    city,
    zipcode,
    postoffice,
    country,
    order_status,
    payment_status,
  } = req.body;
  const sql =
    "INSERT INTO user(certificate, university, name, mothername, fathername, email, mobile, alternate, dob, course, subcourse, enrollment, passingyear, house, state, city, zipcode, postoffice, country ) VALUES ('" +
    certificate +
    "', '" +
    university +
    "', '" +
    name +
    "', '" +
    mothername +
    "', '" +
    fathername +
    "', '" +
    mobile +
    "', '" +
    email +
    "', '" +
    alternate +
    "', '" +
    dob +
    "', '" +
    course +
    "', '" +
    subcourse +
    "', '" +
    enrollment +
    "', '" +
    passingyear +
    "', '" +
    house +
    "', '" +
    state +
    "', '" +
    city +
    "', '" +
    zipcode +
    "', '" +
    postoffice +
    "', '" +
    country +
    "', '" +
    order_status +
    "', '" +
    payment_status +
    "') ";

  con.query(sql, function (error, result) {
    try {
      res.send("Form data added successfully" + result.insertID);
    } catch (error) {
      throw error;
    }
  });
});

module.exports = router;
