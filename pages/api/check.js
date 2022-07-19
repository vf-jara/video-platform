
import Stripe from "stripe";
import { activateUser } from "../../lib/api";

export default async function handler(req, res){
  if (req.method === "POST") {
    const { query } = req.body;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const id = query.id;
    const sessionData = await stripe.checkout.sessions.retrieve(
      query.session_id
    );
    const customer = await stripe.customers.retrieve(sessionData.customer);
    if (sessionData.payment_status === "paid") {
      if (
        activateUser(id).then((res) => {
          if (res.user) {
            return true;
          } else {
            return false;
          }
        })
      ) {
        res.status(200).json({ sessionData, customer });
      } else {
        res.status(200).json({ sessionData: null, customer: null });
      }
    } else {
      res.status(200).json({ sessionData: null, customer: null });
    }
  }
};
