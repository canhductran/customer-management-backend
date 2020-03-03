const express = require('express');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

const customersRoute = require('./server/routes/customers.route');
const router = express.Router();

router.use('/api/customers', customersRoute);

app.use(router);
app.listen(PORT, HOST);
console.log(`Running on HOST ${HOST} and PORT ${PORT}`);