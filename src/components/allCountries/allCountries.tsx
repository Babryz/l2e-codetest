import React from "react"
import { useQuery } from "react-apollo"
import { getCountriesQuery } from "../../queries/queries"
import Country from "../country/country"
import styles from "./allCountries.module.css"

interface Props {
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

export default function AllCountries(props: Props) {
  const { loading, data } = useQuery<CountriesData>(getCountriesQuery)

  if (loading) {
    return <div className={styles.loading}>loading...</div>
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <h6>All Countries</h6>
          <p>8/{data!.countries.length}</p>
        </div>
        <div className={styles.countries}>
          {data!.countries.slice(0, 8).map((country: CountryData, i: number) => {
            return <Country key={i} country={country} showDetails={props.showDetails} />
          })}
        </div>
      </div>
    )
  }
}
