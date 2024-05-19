const express = require('express');
const allRoutes = require('./src/app');

const app = express();
app.use(express.json());
app.use(allRoutes);

app.listen(5000, ()=>{
    console.log('server is running on port 5000');
});