import React from "react"
import styles from "./countryDetails.module.css"

interface Props {
  countryCode: string
}

const CountryDetails = (props: Props) => {
  return (
    <div className={styles.container} id={props.countryCode}>
      <div className={styles.heading}>
        <img src={`https://www.countryflags.io/${props.countryCode}/flat/64.png`} />
      </div>
    </div>
  )
}

export default CountryDetails
