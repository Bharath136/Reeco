const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 9000;
const client = require('../src/database/connection');

app.use(express.json());
app.use(cors())

// const app = express.app();
// Get all products
app.get('/', async (req, res) => {
    try {
        const { rows } = await client.query('SELECT * FROM products');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Get a single product
app.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await client.query('SELECT * FROM products WHERE id = $1', [id]);
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Create a new product
app.post('/create', async (req, res) => {
    const { image_url, product_name, brand, price, quantity } = req.body;

    try {
        const { rows } = await client.query(
            'INSERT INTO products (image_url, product_name, brand, price, quantity) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [image_url, product_name, brand, price, quantity]
        );
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Update a product
app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const { rows } = await client.query(
            'UPDATE products SET status = $1 WHERE product_id = $2 RETURNING *',
            [status, id]
        );
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Update a product
app.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { price, quantity, status } = req.body;
    try {
        const { rows } = await client.query(
            'UPDATE products SET price = $1, quantity = $2, status = $3 WHERE product_id = $4 RETURNING *',
            [price, quantity, status, id]
        );
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});





// Delete a product
app.delete('/', async (req, res) => {
    const { id } = req.params;
    try {
        await client.query('DELETE FROM products ');
        res.send('Products deleted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
