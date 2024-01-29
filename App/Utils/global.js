import { request, gql } from 'graphql-request'

const getSlider = async () => {
  const document = gql`
  query Sliders {
    sliders {
      id
      name
      image {
        url
      }
    }
  }
  
  `
  return await request('https://api-sa-east-1.hygraph.com/v2/clryehu0h1ghp01tet1lijivz/master', document)
}

export default {
  getSlider
}