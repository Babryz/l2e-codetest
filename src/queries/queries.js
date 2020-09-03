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

export { getCountriesQuery, searchCountriesQuery }
