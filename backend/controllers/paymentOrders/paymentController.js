require('dotenv').config();

const addToCartModel = require("../../models/cartProduct");
const OrderModel = require("../../models/orderModel");
const userModel = require("../../models/userModel");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const paymentController = async (req, res) => {
  const { cartItems } = req.body; // Pass the priceId and shippingAddress from the frontend
  const YOUR_DOMAIN = "http://localhost:3000"; // Replace with your domain
  const { usersId } = req.body;
  const currentUser = req.userId;
  console.log(
    "sele",
    req?.selectedOption === "Pay with Debit Card",
    req?.selectedOption
  );
  const generateId = () => {
    const prefix = "cs_test_";
    const randomString = [...Array(32)] // Generating 32 characters
      .map(() => Math.random().toString(36)[2]) // Random lowercase/uppercase/number
      .join("");
    return prefix + randomString;
  };
  function generateOrderId(prefix = "pi_", length = 24) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = prefix;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return result;
  }
  try {
    if (req?.body?.selectedOption === "Pay with Debit Card") {
      console.log("hello");
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          {
            shipping_rate: "shr_1Q5megP0sV8P5QHSCXwM25rx" // Replace with your shipping rate ID
          }
        ],
        // customer_email: user?.email,
        line_items: cartItems?.map((item) => {
          const { productId, quantity } = item;
          if (!productId) {
            console.error("Missing product ID in cart item:", item);
            return null;
          }
          const { productName, productImage, _id } = productId;
          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: productName,
                images: [productImage[0]],
                metadata: {
                  productId: _id
                }
              },
              unit_amount: productId.sellingPrice * 100
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1
            },
            quantity
          };
        }),
        success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${YOUR_DOMAIN}/failure`,
        metadata: {
          userId: usersId // Pass the userId to Stripe metadata
        }
      });

      const newOrder = new OrderModel({
        userId: usersId, // User reference
        sessionId: session.id, // Stripe session ID
        orderId: session?.payment_intent,
        cartItems: cartItems.map((item) => ({
          productId: item.productId._id,
          quantity: item.quantity,
          name: item?.productId?.productName,
          images: item?.productId?.productImage[0]
        })),
        amount: session.amount_total / 100, // Total amount from Stripe session
        paymentStatus: "pending",
        paymentPaidStatus: "unpaid",
        paymentMethod: session?.payment_method_types[0],
        subTotal: session?.amount_subtotal,
        shipping: session?.shipping_cost?.amount_subtotal
      });

      // Save the order
      const savedOrder = await newOrder.save();
      console.log("Saved Order:", savedOrder);
      console.log("session", session);
      if (savedOrder?.id) {
        const deleteItem = await addToCartModel.deleteMany({
          userId: session.metadata.userId
        });
        console.log("sestion", deleteItem);
      }
      res.status(303).json(session);
    } else if (req?.body?.selectedOption === "Cash on Delivery") {
      console.log("cartitme", cartItems);
      const sessionid = generateId();
      const session = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          {
            shipping_rate: "shr_1Q5megP0sV8P5QHSCXwM25rx" // Replace with your shipping rate ID
          }
        ],
        // customer_email: user?.email,
        line_items: cartItems?.map((item) => {
          const { productId, quantity } = item;
          if (!productId) {
            console.error("Missing product ID in cart item:", item);
            return null;
          }
          const { productName, productImage, _id } = productId;
          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: productName,
                images: [productImage[0]],
                amount: productId?.sellingPrice,
                metadata: {
                  productId: _id
                }
              },
              unit_amount: productId.sellingPrice * 100
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1
            },
            quantity
          };
        }),
        success_url: `${YOUR_DOMAIN}/success?session_id=${sessionid}`,
        cancel_url: `${YOUR_DOMAIN}/failure`,
        metadata: {
          userId: usersId // Pass the userId to Stripe metadata
        },
        sessionId: sessionid
      };
      const newOrder = new OrderModel({
        userId: usersId, // User reference
        sessionId: sessionid, // Stripe session ID
        orderId: generateOrderId(),
        cartItems: cartItems.map((item) => ({
          productId: item.productId._id,
          quantity: item.quantity,
          name: item?.productId?.productName,
          images: item?.productId?.productImage[0],
          amount: item?.productId?.sellingPrice
        })),
        amount: req?.body?.totalPrice + 100, // Total amount from Stripe session
        paymentStatus: "pending",
        paymentPaidStatus: "unpaid",
        paymentMethod: "cod",
        subTotal: req?.body?.totalPrice,
        shipping: 100
      });

      const savedOrder = await newOrder.save();
      console.log("save", savedOrder);
      if (savedOrder?._id) {
        console.log("helkfjdsl");
        const deleteItem = await addToCartModel.deleteMany({
          userId: usersId
        });
        console.log("deelet", deleteItem);
      }
      res.status(303).json(session);
    }
  } catch (error) {
    res.json({ error: true, success: false, message: error?.message || error });
  }
};

module.exports = paymentController;
