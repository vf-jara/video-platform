import Stripe from "stripe";
import { buffer } from "micro";
import { activateUser, getIdUserStripe } from "../../lib/api";
const endpointSecret = 'whsec_f85ed04fcd14db07124e3db1193a3c43c92ca5b61b7a331646f2512ee643c14f';

export const config = {
    api: {
        bodyParser: false, // don't parse body of incoming requests because we need it raw to verify signature
    },
};

export default async function handler(req, res) {
    if(req.method === "POST"){
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        let event;

        if (endpointSecret) {
            const buf = await buffer(req);
            // Get the signature sent by Stripe
            const signature = req.headers['stripe-signature'];
            try {
              event = stripe.webhooks.constructEvent(
                buf.toString(),
                signature,
                endpointSecret
              );
            } catch (err) {
              console.log(`⚠️  Webhook signature verification failed.`, err.message);
              return res.status(400);
            }
          }

          // Handle the event
          switch (event.type) {
            case 'customer.subscription.created':
                const subscription = event.data.object;
                if(subscription.status === "active"){
                  getIdUserStripe(subscription.customer).then((res) => {
                    if(res.id){
                        activateUser(res.id).then((res) => {
                          if (res.user && !res.error) {
                            res.status(200);
                          } else {
                            res.status(404);
                          }
                        });
                    }else{
                      res.status(404);
                    }
                  })
                }
                console.log(`⚠️  Subscription:`, subscription);
                /**
                 * TO-DO
                 * Atualizar o User com o plano selecionado
                 */
              break;
            case 'customer.created':
              const customer = event.data.object;
              const {id, name, email} = customer;
              console.log(`⚠️  Customer:`, customer);
              /**
               * TO-DO
               * Criar um novo User no BD (Strapi) e vincular o ID da conta Stripe
               */
              break;
            default:
              // Unexpected event type
              console.log(`Unhandled event type ${event.type}.`);
          }
          // Return a 200 response to acknowledge receipt of the event
          res.send();
    }
  }