const customersService = require('../services/customers.service');

const getCustomers = function(req, res) {
    const telephoneNumber = req.params.telephoneNumber;
    res.send(customersService.getCustomers(telephoneNumber));
};

const postCustomer = function(req, res) {
    const customerName = req.body.customerName;
    const telephoneNumber = req.body.telephoneNumber;

    res.send(customersService.postCustomer(customerName, telephoneNumber));
};

module.exports = {
    getCustomers,
    postCustomer
};