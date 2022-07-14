import axios from 'axios';



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