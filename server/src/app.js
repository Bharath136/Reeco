const express = require('express');
const app = express();
const cors = require('cors');
const port = 9000;
const client = require('../src/database/connection');
const models = require("./models/schema");

app.use(express.json());
app.use(cors())


// Create a new product
app.post('/products', async (req, res) => {
    try {
        const product = new models.Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all products
app.get('/products', async (req, res) => {
    try {
        const products = await models.Product.find();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a single product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const product = await models.Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send({ error: 'Product not found' });
        }
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Update the status of a product by ID
// Update Product API
app.put('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const { price, quantity, status } = req.body;
        console.log(price)

        // Validate if required fields are present
        if (!price || !quantity || !status) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Find and update the product
        const updatedProduct = await models.Product.findByIdAndUpdate(
            productId,
            { price, quantity, status },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Delete a product by ID
app.delete('/products/:id', async (req, res) => {
    try {
        const product = await models.Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send({ error: 'Product not found' });
        }
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


