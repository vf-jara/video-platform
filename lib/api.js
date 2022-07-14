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
              contents{
                ... on ComponentLessonsLesson{
                  id
                  lesson{
                    data{
                      id
                      attributes{
                        slug
                        title
                        content{
                           __typename
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