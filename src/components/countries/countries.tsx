import React from "react"
import AllCountries from "../allCountries/allCountries"
import SearchCountries from "../searchCountries/searchCountries"

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
