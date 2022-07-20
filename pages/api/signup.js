import axios from "axios";
import Stripe from "stripe";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res){
  if (req.method === "POST") {
    const {name, email, password} = req.body;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // Create a stripe customer for the user with their email address
    const customer = await stripe.customers.create({ email, name});
    if(!customer){
        res.status(200).json({ user: null, error: true, message: "Erro no registro do Cliente" });
    }
    const endpoint = `${process.env.CMS_URL}/graphql/`;
    const headers = {
        "content-type": "application/json",
        "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`

    };
    const graphqlQuery = {
        "operationName": "createUser",
        "query": `mutation createUser($stripeid:String!, $fullname:String!, $username:String!, $email:String!, $password:String!, $confirmed:Boolean!, $blocked:Boolean!, $role:ID!){
          createUsersPermissionsUser(
            data: {
              username: $username
              email: $email
              password: $password
              confirmed: $confirmed
              blocked: $blocked
              role: $role
              fullName: $fullname
              subscriptionActive: false
              stripeCustomerId: $stripeid
            }
          ) {
            data {
              id
              attributes {
                email
              }
            }
          }
        }
          `,
        "variables": {
          fullname: name,
          username: email,
          email: email,
          password: password,
          confirmed: true,
          blocked: false,
          role: 1,
          stripeid: customer.id
        }
    };
    const { data } = await axios({
        url: endpoint,
        method: 'post',
        headers: headers,
        data: graphqlQuery
      });
    if(!data){
        res.status(200).json({ user: null, error: true, message: "Erro no registro do Usuário" });
    }
    const user = data.data.createUsersPermissionsUser.data;
    await stripe.customers.update(customer.id, {metadata: {user_id: user.id}});
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'subscription',
  /* This is where the magic happens - this line will automatically link this Checkout page to the existing customer we created when the user signed-up, so that when the webhook is called our database can automatically be updated correctly.*/
      customer: customer.id,
      line_items: [
        {
          price: "price_1LNGfvEDHlQ2fy4MgSC1O5nK",
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      // {CHECKOUT_SESSION_ID} is a string literal which the Stripe SDK will replace; do not manually change it or replace it with a variable!
      success_url: `${process.env.NEXT_PUBLIC_API_URL}/success?id=${user.id}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/order?id=${user.id}&cancelledPayment=true`,
      subscription_data: {
        trial_period_days: 15,
        metadata: {
          // This isn't 100% required, but it helps to have so that we can manually check in Stripe for whether a customer has an active subscription later, or if our webhook integration breaks.
          payingUserId: user.id,
        },
      },
    });
    if (!checkoutSession.url) {
        return res
        .status(500)
        .json({ code: 'stripe-error', error: 'Could not create checkout session' });
    }
    // Return the newly-created checkoutSession URL and let the frontend render it
    return res.status(200).json({ redirectUrl: checkoutSession.url, user, error: false });
  } else {
    res.status(405).json({ error: true, message: "Method Not Allowed" });
  }
}
