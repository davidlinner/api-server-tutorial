const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000

const ingredients = [
    {
        title: 'Flour',
        quantity: 100,
        unit: 'g'
    },
    {
        title: 'Egg',
        quantity: 2,
        unit: 'pieces'
    },
    {
        title: 'Milk',
        quantity: 300,
        unit: 'ml'
    },
    {
        title: 'Sugar',
        quantity: 1,
        unit: 'tbsp'
    },
    {
        title: 'Oil for frying',
        quantity: 1,
        unit: 'tbsp'
    }
];

app.use(cors());

app.get('/', (request, response) => {
    response.json({status:'ok'});
});

app.get('/json', (request, response) => {
    response.json({text: 'hello fetch!', num: 123});
});

app.get('/shopping-cart', (request, response) => {
    response.json(ingredients);
});

app.post('/shopping-cart', (request, response) => {
    const data = request.body;
    ingredients.push(data);
    response.status(200).send();
});


app.get('/html', (request, response) => {
    response
        .status(200)
        .type('html')
        .send( '<h1>hello fetch! Do you recognize html?</h1>');
});

app.get('/ingredients/:i', (request, response) => {
    const {i} = request.params;
    if(i >= 0 && i < ingredients.length) {
        response.json(ingredients[i]);
    } else {
        response.status(404).end();
    }
});

app.listen(PORT, function () {
    console.log(`Example API server app listening on port ${PORT}!`);
})
