import axios from 'axios';
import Stripe from "stripe";

export const homeInfo = async (session) => {
    if(!session){
        return null;
    }
    const endpoint = `${process.env.CMS_URL}/graphql/`;
    const jwt = session.accessToken;
    const headers = {
        "content-type": "application/json",
        "Authorization": `Bearer ${jwt}`
    };
    const graphqlQuery = {
        "operationName": "homeInfo",
        "query": `query homeInfo {
          courses(sort: "updatedAt:desc", pagination: {limit: 25}) {
            data {
              id
              attributes {
                isActive: active
                products{
                  data{
                    id
                  }
                }
                title
                description
                coverH: thumbnailH {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                coverV: thumbnailV {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                slug
                categories: categories {
                  data {
                    id
                    attributes {
                      title
                    }
                  }
                }
              }
            }
          }
          homepage{
            data{
              attributes{
                heroTitle
                heroDescription
                heroImage{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                heroButtonText
                heroButtonLink
                seoTitle
                seoDescription
              }
            }
          }
        }
          `,
        "variables": {}
    };

    const { data } = await axios({
        url: endpoint,
        method: 'post',
        headers: headers,
        data: graphqlQuery
      });

      return data
}
export const getPaths = async () => {
  const endpoint = `${process.env.CMS_URL}/graphql/`;
  const headers = {
      "content-type": "application/json",
      "Authorization": `Bearer d982fd07d720f9cf8cb7e7ad68561c90aca5f577355f116e23e1d6f33f8dc9993a6746a129e2f06d8cd31f478c2a42cfad6f6cc4297b6ba83a854f1fe3ce82c77387d0ed339f3cd7f7c6bbebd76572721a1092a42168af4ad121f91b83ad52bd790f4c25500b48a3329ed4562a8153182d0a6387038cc6d19af71eca4a5db0c4`
  };
  const graphqlQuery = {
      "operationName": "getPaths",
      "query": `query getPaths {
          courses(sort: "updatedAt:desc", pagination: {limit: 25}) {
            data {
              id
              attributes {
                isActive: active
                title
                description
                coverH: thumbnailH {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                coverV: thumbnailV {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                slug
                categories: categories {
                  data {
                    id
                    attributes {
                      title
                    }
                  }
                }
              }
            }
          }
        }
        `
  };

  const { data } = await axios({
      url: endpoint,
      method: 'post',
      headers: headers,
      data: graphqlQuery
  });
  return data
}
export const cursoInfo = async (session, slug) => {
  if(!session){
      return null;
  }
  const endpoint = `${process.env.CMS_URL}/graphql/`;
  const jwt = session.accessToken;
  const headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${jwt}`
  };
  const graphqlQuery = {
      "operationName": "cursoInfo",
      "query": `query cursoInfo {
        courses(filters: {slug: {eq: "${slug}"}}){
          data {
            id
            attributes {
              isActive: active
              slug
              title
              thumbnailH{
                data{
                  attributes{
                    url
                  }
                }
              }
              categories{
                data{
                  id
                  attributes{
                    title
                  }
                }
              }
              contents {
                ... on ComponentLessonsLesson {
                  id
                  lesson {
                    data {
                      id
                      attributes {
                        slug
                        title
                        content {
                          __typename
                          ... on ComponentContentsArticle {
                            id
                            content
                          }
                          ... on ComponentContentsVideoLocal {
                            id
                            file {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                          ... on ComponentContentsVideoExternal {
                            id
                            url
                          }
                          ... on ComponentContentsImage {
                            id
                            file {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                          ... on ComponentContentsPdf {
                            id
                            file {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                          ... on ComponentContentsAudio {
                            id
                            file {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
        `,
      "variables": {}
  };
  const { data } = await axios({
      url: endpoint,
      method: 'post',
      headers: headers,
      data: graphqlQuery
    });
  return data
}
export const lessonInfo = async (session, slug) => {
  if(!session){
      return null;
  }
  const endpoint = `${process.env.CMS_URL}/graphql/`;
  const jwt = session.accessToken;
  const headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${jwt}`
  };
  const graphqlQuery = {
      "operationName": "lessonInfo",
      "query": `query lessonInfo {
        lessons(filters: { slug: { eq: "${slug}" } }) {
          data {
            id
            attributes {
              title
              slug
              description
              content {
                __typename
                ... on ComponentContentsArticle {
                  id
                  content
                }
                ... on ComponentContentsVideoLocal {
                  id
                  file {
                    data {
                      attributes {
                        url
                        mime
                      }
                    }
                  }
                }
                ... on ComponentContentsVideoExternal {
                  id
                  url
                }
                ... on ComponentContentsImage {
                  id
                  file {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentContentsPdf {
                  id
                  file {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                ... on ComponentContentsAudio {
                  id
                  file {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
        `,
      "variables": {}
  };
  const { data } = await axios({
      url: endpoint,
      method: 'post',
      headers: headers,
      data: graphqlQuery
    });
  return data
}
export const commentsByLesson = async (session, slug) => {
  if(!session){
      return null;
  }
  const endpoint = `${process.env.CMS_URL}/graphql/`;
  const jwt = session.accessToken;
  const headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${jwt}`
  };
  const graphqlQuery = {
      "operationName": "commentsByLesson",
      "query": `query commentsByLesson {
        lessons(filters: { slug: { eq: "${slug}" } }){
          data {
            attributes {
              comments {
                data {
                  attributes {
                    comment
                    createdAt
                    user {
                      data {
                        id
                        attributes {
                          username
                        }
                      }
                    }
                    replies {
                      data {
                        attributes {
                          comment
                          user {
                            data {
                              id
                              attributes {
                                username
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
        `,
      "variables": {}
  };
  const { data } = await axios({
      url: endpoint,
      method: 'post',
      headers: headers,
      data: graphqlQuery
    });
  return data
}
export const lessonHistoric = async (session, lesson, course) => {
  if(!session){
      return null;
  }
  const endpoint = `${process.env.CMS_URL}/graphql/`;
  const jwt = session.accessToken;
  const headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${jwt}`
  };
  const graphqlQuery = {
    "operationName": "lessonHistoric",
    "query": `query lessonHistoric($user:ID!, $lesson:ID!, $course:ID!){
      lessonHistorics(
        filters: { user: { id: { eq: $user } }, lesson: { id: { eq: $lesson } }, course: { id: { eq: $course } } }
      ) {
        meta {
          pagination {
            total
          }
        }
      }
    }
      `,
    "variables": {
      user: session.user.id,
      lesson: lesson,
      course: course
    }
};
  const { data } = await axios({
      url: endpoint,
      method: 'post',
      headers: headers,
      data: graphqlQuery
    });
  return data
}
export const addLessonHistoric = async (session, course, lesson) => {
  if(!session){
      return null;
  }
  const endpoint = `${process.env.CMS_URL}/graphql/`;
  const jwt = session.accessToken;
  const headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${jwt}`
  };
  const graphqlQuery = {
      "operationName": "addLessonHistoric",
      "query": `mutation addLessonHistoric($user:ID!, $course:ID!, $lesson:ID!){
        createLessonHistoric(data: {user: $user, lesson: $lesson, course: $course}){
          data{
            id
          }
        }
      }
        `,
      "variables": {
        user: session.user.id,
        lesson: lesson,
        course: course
      }
  };
  const data = await axios({
      url: endpoint,
      method: 'post',
      headers: headers,
      data: graphqlQuery
    }).then((res) => {
      if(res.data.data.createLessonHistoric.data.id !== null){
        return true;
      }else{
        return false;
      }
    });
  return data
}
export const historico = async (session, course) => {
  if(!session){
      return null;
  }
  const endpoint = `${process.env.CMS_URL}/graphql/`;
  const jwt = session.accessToken;
  const headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${jwt}`
  };
  const graphqlQuery = {
      "operationName": "historico",
      "query": `query historico($user:ID!, $course:ID!){
        lessonHistorics(
          filters: { user: { id: { eq: $user } }, course: { id: { eq: $course } } }
        ) {
          data{
            attributes{
              lesson{
                data{
                  id
                }
              }
            }
          }
          meta {
            pagination {
              total
            }
          }
        }
      }
        `,
      "variables": {
        user: session.user.id,
        course: course
      }
  };
  const {data} = await axios({
      url: endpoint,
      method: 'post',
      headers: headers,
      data: graphqlQuery
    });
  return data?.data?.lessonHistorics?.data;
}

export const createUser = async (name, email, password) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  // Create a stripe customer for the user with their email address
  const customer = await stripe.customers.create({ email: email, name: name });
  if(!customer){
    return { user: null, error: true, message: "Erro no registro do Cliente" };
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
    return { user: null, error: true, message: "Erro no registro do Cliente" };
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
    // {CHECKOUT_SESSION_ID} is a string literal which the Stripe SDK will replace; do not manually change it or replace it with a variable!
    success_url: `${process.env.NEXT_PUBLIC_API_URL}/success?id=${user.id}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/order?id=${user.id}&cancelledPayment=true`,
    subscription_data: {
      metadata: {
        // This isn't 100% required, but it helps to have so that we can manually check in Stripe for whether a customer has an active subscription later, or if our webhook integration breaks.
        payingUserId: user.id,
      },
    },
  });

  if (!checkoutSession.url) {
    return { code: 'stripe-error', error: 'Could not create checkout session' };
  }
  // Return the newly-created checkoutSession URL and let the frontend render it
  return { redirectUrl: checkoutSession.url, user, error: false };
}

export const getIdUserStripe = async (customer) => {
  const endpoint = `${process.env.CMS_URL}/graphql/`;
  const headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`
  };
  const graphqlQuery = {
      "operationName": "getIdUserStripe",
      "query": `query getIdUserStripe($id:String!){
        usersPermissionsUsers(filters: {stripeCustomerId: {eq: $id}}){
          data{
            id
          }
        }
      }
        `,
      "variables": {
        id: customer
      }
  };
  const { data } = await axios({
      url: endpoint,
      method: 'post',
      headers: headers,
      data: graphqlQuery
    });
  if(!data){
    return { user: null, error: true, message: "Erro na Ativação do Cliente" };
  }
  const user = data.data.usersPermissionsUsers.data[0].id;
  return {id: user, error: false };
}

export const activateUser = async (id) => {
  const endpoint = `${process.env.CMS_URL}/graphql/`;
  const headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`
  };
  const graphqlQuery = {
      "operationName": "activeUser",
      "query": `mutation activeUser($id:ID!,){
        updateUsersPermissionsUser(id: $id, data: {
           subscriptionActive: true
         }){
           data{
             id
             attributes{
               email
               subscriptionActive
               stripeCustomerId
             }
           }
         }
       }
        `,
      "variables": {
        id: id
      }
  };
  const { data } = await axios({
      url: endpoint,
      method: 'post',
      headers: headers,
      data: graphqlQuery
    });
  if(!data){
    return { user: null, error: true, message: "Erro na Ativação do Cliente" };
  }
  const user = data.data.updateUsersPermissionsUser.data;
  return {user, error: false };
}

export const checkSession = async (query) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const id = query.id;
  const sessionData = await stripe.checkout.sessions.retrieve(query.session_id);
  const customer = await stripe.customers.retrieve(sessionData.customer);
  if (sessionData.payment_status === "paid") {
    activateUser(id).then((res) => {
        if (res.user && !res.error) {
            return {
              data: {
                sessionData,
                customer,
              }
            };
          } else {
            return {
                data: {
                  sessionData: null,
                  customer: null,
              }
            };
          }
    });
  } else {
    return {
      data: {
        sessionData: null,
        customer: null,
    }
  };
  }
}