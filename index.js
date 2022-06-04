const express = require('express');
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');

let app = express();

app.use(routesIndex);
app.use('/users', routesUsers);

app.listen(3000, 'localhost', () => {
    console.log('Server on');
});