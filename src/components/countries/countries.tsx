import React from "react"
import { useQuery } from "react-apollo"
import styles from "./countries.module.css"
import AllCountries from "../allCountries/allCountries"
import SearchCountries from "../searchCountries/searchCountries"
import { getCountriesQuery } from "../../queries/queries"

interface props {
  searchTerm: string
  showDetails: Function
}

export default function Countries(props: props) {
  if (props.searchTerm === "") {
    return <AllCountries showDetails={props.showDetails} />
  } else {
    return <SearchCountries showDetails={props.showDetails} searchTerm={props.searchTerm} />
  }
}
