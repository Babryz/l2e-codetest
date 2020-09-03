import React from "react"
import styles from "./country.module.css"

interface CountryProps {
  country: {
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
}

const Country = (props: CountryProps) => {
  const { country } = props
  return (
    <div className={styles.container}>
      <img src={`https://www.countryflags.io/${country.code}/flat/64.png`} />
      <div className={styles.info}>
        <h6>{country.name}</h6>
        <ul className={styles.details}>
          <li>{country.capital}</li>
          <li>{country.continent.name}</li>
          <li>{country.languages[0].name}</li>
          <li>{country.currency}</li>
        </ul>
      </div>
    </div>
  )
}

export default Country
