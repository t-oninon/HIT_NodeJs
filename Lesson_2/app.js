const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const products = [
    {
        "id": 1,
        "item": "Balo",
        "price": 12.4,
    },
    {
        "id": 2,
        "item": "Sneaker",
        "price": 25.0,
    },
    {
        "id": 3,
        "item": "Jacket",
        "price": 30.7,
    }
];

app.get('/products', (req, res) => {
    res.json(products);
})

app.post('/products', (req, res) => {
    var newProduct = req.body;
    products.push(newProduct);
    res.send("Successfully added product");
})

app.put('/products/:id', (req, res) => {
    var { id } = req.params;
    var idUpdate = products.findIndex((product) => product.id == id);
    console.log(idUpdate);
    if (idUpdate == -1) {
        res.send("Id does not exists");
    } else {
        products.splice(idUpdate, 1, req.body);
        res.send("Successfully updated product");
    }
})

app.delete('/products/:id', (req, res) => {
    var { id } = req.params;
    var idDelete = products.findIndex((product) => product.id == id);
    if (idDelete == -1) {
        res.send("Id does not exists");
    } else {
        products.splice(idDelete, 1);
        res.send("Successfully deleted product");
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});