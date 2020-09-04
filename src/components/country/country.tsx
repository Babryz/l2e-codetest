import React from "react"
import styles from "./country.module.css"

interface Props {
  showDetails: Function
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

const Country = (props: Props) => {
  const { country } = props
  return (
    <div className={styles.container} id={country.code} onClick={(e) => props.showDetails(e)}>
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
