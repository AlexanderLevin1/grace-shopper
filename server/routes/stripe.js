const app = require('express').Router();
module.exports = app;

const stripe = require('stripe')('sk_test_i1WQiMWphkAwtflNJjhTFNr4');

app.post('/', (req, res, next) => {
  stripe.charges.create(req.body)
    .then(() => res.sendStatus(200))
})
