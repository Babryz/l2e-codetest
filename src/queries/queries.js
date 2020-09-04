import { gql } from "apollo-boost"

const getCountriesQuery = gql`
  query {
    countries {
      code
      name
      continent {
        name
      }
      languages {
        name
      }
      currency
      capital
    }
  }
`

const searchCountriesQuery = gql`
  query searchCountries($searchTerm: String!) {
    countries(filter: { code: { eq: $searchTerm } }) {
      code
      name
      continent {
        name
      }
      languages {
        name
      }
      currency
      capital
    }
  }
`

const getDetailsQuery = gql`
  query getDeatails($code: ID!) {
    country(code: $code) {
      code
      name
      continent {
        name
        countries {
          code
          name
          capital
          continent {
            name
          }
          languages {
            name
          }
          currency
        }
      }
    }
  }
`

export { getCountriesQuery, searchCountriesQuery, getDetailsQuery }
