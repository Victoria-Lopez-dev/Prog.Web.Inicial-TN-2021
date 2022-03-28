const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const databaseConnection = require("../config/database");
const contactRoutes = require("./routes/contact.routes");
const productsRoutes = require("./routes/products.routes");

// MySQL connection
databaseConnection.connect();

// Middlewares
//app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Config
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".ejs");
app.set("port", 3000);

// Routes
app.use("/products", productsRoutes);
app.use("/contacto", contactRoutes)

app.listen(app.get("port"), () => {
  console.log("Server corriendo en puerto", app.get("port"));
});
