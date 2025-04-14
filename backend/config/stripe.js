const Stripe = require("stripe");

const stripe = Stripe(NODE_ENV.STRIPE_KEY);

module.exports = stripe;
