import React from "react"
import { useQuery } from "react-apollo"
import styles from "./countries.module.css"
import AllCountries from "../allCountries/allCountries"
import SearchCountries from "../searchCountries/searchCountries"
import { getCountriesQuery } from "../../queries/queries"

interface props {
  searchTerm: string
}

export default function Countries(props: props) {
  if (props.searchTerm === "") {
    return <AllCountries />
  } else {
    console.log(props.searchTerm)
    return <SearchCountries searchTerm={props.searchTerm} />
  }
}
