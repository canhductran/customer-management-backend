
const getCustomers = (telephoneNumber) => {
    return {
        customerName: 'Chris Tran',
        telephoneNumber: '0405909588'
    }
};

const postCustomer = (customerName, telephoneNumber) => {
    return {
        customerName: 'Chris Tran',
        telephoneNumber: '0405909588'
    }
};

module.exports = {
    getCustomers,
    postCustomer
};