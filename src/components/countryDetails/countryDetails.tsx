import React from "react"
import { useQuery } from "react-apollo"
import styles from "./countryDetails.module.css"
import { getDetailsQuery } from "../../queries/queries"
import Country from "../country/country"

interface Props {
  countryCode: string
}

interface country {
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

interface CountryData {
  country: {
    code: string
    name: string
    continent: {
      name: string
      countries: country[]
    }
  }
}

interface CountryVars {
  code: string
}

export default function CountryDetails(props: Props) {
  const { loading, data } = useQuery<CountryData, CountryVars>(getDetailsQuery, {
    variables: {
      code: props.countryCode,
    },
  })

  if (loading) {
    return <div className={styles.loading}>loading...</div>
  } else {
    const countries = data!.country.continent.countries.filter(
      (country) => country.code !== data!.country.code
    )
    return (
      <div className={`${styles.container} country`}>
        <div className={`${styles.box} countryDetails bg-oxford`}>
          <div className={styles.heading}>
            <img src={`https://www.countryflags.io/${data!.country.code}/flat/64.png`} />
            <h4>{data?.country.name}</h4>
            <h6>{data?.country.continent.name}</h6>
          </div>
          <div className={styles.countries}>
            <p>Other Countries in {data?.country.continent.name}</p>
            {countries.slice(0, 3).map((country: country, i: number) => {
              return (
                <Country renderedFrom={"details"} showDetails={null} country={country} key={i} />
              )
            })}
          </div>
          <h6 className={styles.countriesCount}>
            + {data!.country.continent.countries.length - 3} more
          </h6>
        </div>
      </div>
    )
  }
}
