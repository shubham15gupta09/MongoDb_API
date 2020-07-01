const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ Message: "Hello Folks" });
});

app.post("/create", (req, res) => {
  let property = req.body;
  console.log(property);
  const model_name = property.model;
  mongoose.connect(
    property.url,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {
      console.log("connected to mongodb successfully");
      mongoose.models = {};
      var modelSchema = mongoose.model(
        model_name,
        mongoose.Schema(property.schema)
      );
      modelSchema
        .create(property.data)
        .then((result) => {
          console.log("Done Adding the Data");
          res.json({ message: "Done Adding the Data", Data_added: result });
          mongoose.connection.close(() => {
            console.log("Connection closed");
          });
        })
        .catch((err) => {
          console.log("Error Occures", err);
          res.json({ error: err });
          mongoose.connection.close(() => {
            console.log("Connection closed");
          });
        });
    }
  );
});

app.listen(PORT, () => {
  console.log(`server started on the port : ${PORT}`);
});
