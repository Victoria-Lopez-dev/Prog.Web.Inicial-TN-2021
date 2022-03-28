const express = require("express");
const {
  getAllProducts,
  getProductbyId,
  renderHome,
  addNewProduct,
  newProductForm,
} = require("../controllers/productsControllers");

const productsRoutes = express.Router();

productsRoutes.get("/", renderHome);

productsRoutes.get("/allProducts", getAllProducts);

productsRoutes.get("/addProduct", newProductForm);

productsRoutes.post("/addProduct", addNewProduct);

productsRoutes.get("/:id", getProductbyId);

module.exports = productsRoutes;
