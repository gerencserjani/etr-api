const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
//const jwt = require('jsonwebtoken')
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./db.js");
// simple route
app.post("/execute", async (req, res) => {
  console.log(req.body)
  const sql = req.body.sql;
  await db.query(sql, (err, sqlRes) => {
    if (err) {
      res.status(500)
      res.send(err)
    } else {

      res.send(sqlRes);
    }
  });

});


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
