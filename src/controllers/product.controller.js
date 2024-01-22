// productController.js
const productService = require("../services/product.service.js");

// Create a new product
const createProduct = async(req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

// Delete a product by ID
const deleteProduct= async(req, res) => {
    const productId = req.params.id;
  try {
    
    const product = await productService.deleteProduct(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

// Update a product by ID
const updateProduct= async(req, res) => {
    const productId = req.params.id;
  try {
    
    const product = await productService.updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// Get all products
// async function getAllProducts(req, res) {
//   try {
//     const products = await productService.getAllProducts();
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// Find a product by ID
const findProductById= async(req, res) => {
    const productId = req.params.id;
  try {
    
    const product = await productService.findProductById(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

// Find products by category
// const findProductByCategory= async(req, res) => {
//     const category = req.params.category;
//   try {
    
//     const products = await productService.findProductByCategory(category);
//     return res.status(201).send(product);
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// }

// Search products by query
// const searchProduct= async(req, res) => {
//     const query = req.params.query;
//   try {
    
//     const products = await productService.searchProduct(query);
//     return res.status(201).send(product);
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// }

// Get all products with filtering and pagination
const getAllProducts= async(req, res) => {
    const productId = req.params.id;
  try {
    const products = await productService.getAllProducts(req.query);
    return res.status(201).send(products);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

const createMultipleProduct = async (req, res) => {
    const productId = req.params.id;
    try {
      const products = await productService.createMultipleProduct(req.query);
      return res.status(201).send({message:"Product Created Successfully"});
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
//   findProductByCategory,
//   searchProduct,
  createMultipleProduct

};
