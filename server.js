// const express = require('express');
// const cors = require('cors');
// const movies = require('./GET/order');
// const genres = require('./GET/product');
// const artists = require('./GET/user');

// const app = express();
// app.use(cors());

// app.use(express.urlencoded({ extended: false }));

// app.use('/', order);
// app.use('/', product);
// app.use('/', user);

// const port = process.env.PORT || 9000;

// app.listen(port, () => console.log(`All Order Data in JSON format from Mongo DB ${9000}, http://localhost:${9000}`));
// app.listen(port, () => console.log(`All Product Data in JSON format from Mongo DB ${9000}, http://localhost:${9000}`));
// app.listen(port, () => console.log(`All user Data in JSON format from Mongo DB ${9000}, http://localhost:${9000}`));


// const db = require("./app/order");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
    
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

const express = require("express");
const cors = require("cors");
const app1 = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app1.use(cors(corsOptions));
// parse requests of content-type - application/json
app1.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app1.use(express.urlencoded({ extended: true }));
// simple route
app1.get("/", (req, res) => {
  res.json({ message: "Welcome to e-shop application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app1.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const app = express();
app.use();
const db = require("./app/models");
const Role = db.role;
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user'");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin'");
      });
    }
  });
}
