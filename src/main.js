const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000

app.use(cors());


app.get('/', (request, response) => {
    response.json({status:'ok'});
});

app.get('/json', (request, response) => {
    response.json({text: 'hello fetch!', num: 123});
});

app.get('/html', (request, response) => {
    response
        .status(200)
        .type('html')
        .send( '<h1>hello fetch! Do you recognize html?</h1>');
});


app.listen(PORT, function () {
    console.log(`Example API server app listening on port ${PORT}!`);
})
