const databaseConnection = require("../../config/database");

const renderHome = (req, res) => {
  res.render("pages/index");
};

const newProductForm = (req, res) => {
  res.render("pages/addproduct");
};

const addNewProduct = (req, res) => {
  const { name, category, price, description, stock } = req.body;
  console.log(req.body)
  databaseConnection.query(
    "INSERT INTO products (name, category, price, description, stock) VALUES (?,?,?,?,?)",
    [name, category, parseInt(price), description, parseInt(stock)],
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        // res.render("pages/products", { products: data });
        console.log('Se creo un nuevo producto')
        res.redirect('/products/allProducts')
      }
    }
  );
};

const getAllProducts = (req, res) => {
  databaseConnection.query("SELECT * FROM products", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.render("pages/products", { products: data });
    }
  });
};

const getProductbyId = (req, res) => {
  
  databaseConnection.query(
    "SELECT * FROM products WHERE id = ?",
    [req.params.id],
    (error, data) => {
      if (error) {
        console.log(error);
 
      } else {
        res.status(200).send({ data: data });
      }
    }
  );
};

module.exports = {
  getAllProducts,
  getProductbyId,
  renderHome,
  addNewProduct,
  newProductForm,
};
