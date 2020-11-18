const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.json({status:'ok'});
});
app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
})
