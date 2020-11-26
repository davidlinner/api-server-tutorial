const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const items = {};

app.get('/items', (request, response) => {
    response.json(items);
});

app.put('/items/:id([0-9]+)', (request, response) => {
    const item = request.body;
    const {id} = request.params;
    items[id] = item;
    response.send();
});

app.post('/items', (request, response) => {
    const item = request.body;

    const highestId = Object
        .keys(items)
        .map(parseInt)
        .reduce((max, current) => current > max ? current : max, 0);

    items[highestId + 1] = item;
    response.send();
});


app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
})
