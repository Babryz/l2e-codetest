import React from "react"
import { useQuery } from "react-apollo"
import { searchCountriesQuery } from "../../queries/queries"
import Country from "../country/country"
import styles from "./searchCountries.module.css"

interface props {
  searchTerm: string
  showDetails: Function
}

interface CountryData {
  code: string
  name: string
  continent: {
    name: string
  }
  languages: [
    {
      name: string
    }
  ]
  currency: string
  capital: string
}

interface CountriesData {
  countries: CountryData[]
}

interface CountryVars {
  searchTerm: string
}

export default function SearchCountries(props: props) {
  const { loading, data } = useQuery<CountriesData, CountryVars>(searchCountriesQuery, {
    variables: {
      searchTerm: props.searchTerm,
    },
  })
  if (loading) {
    return <div className={styles.loading}>loading...</div>
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <h6>All Countries</h6>
          <p>
            {data!.countries.length < 8 ? data!.countries.length : 8}/{data!.countries.length}
          </p>
        </div>
        <div className={styles.countries}>
          {data!.countries.slice(0, 8).map((country: CountryData, i: number) => {
            return (
              <Country
                renderedFrom={"regular"}
                key={i}
                country={country}
                showDetails={props.showDetails}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
