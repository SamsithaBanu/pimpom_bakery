require('dotenv').config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const webhooks = (req, res) => {
  const endpointSecret =
    "whsec_7c555179f378dadb275a3a858c7b1adc5b8524a1f033194f7fbe9a7a5d26f230";
  const sig = req.headers["stripe-signature"];

  const payloadString = JSON.stringify(req.body);

  const header = stripe.webhooks.generateTestHeaderString({
    payload: payloadString,
    secret: endpointSecret
  });
  console.log("sig", payloadString);

  let event;
  try {
    event = stripe.webhooks.constructEvent(payloadString, sig, endpointSecret);
    console.log("event", event);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  console.log("event", event?.type);
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("Session completed:", session);
  }

  res.status(200).send(); // Acknowledge receipt of the event
};

module.exports = webhooks;
