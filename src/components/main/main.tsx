import React, { useState, useRef, useEffect } from "react"
import styles from "./main.module.css"
import Heading from "../heading/heading"
import SearchBar from "../searchBar/searchBar"
import Countries from "../countries/countries"
import CountryDetails from "../countryDetails/countryDetails"

const Main = () => {
  const [searchTerm, setSearhTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [countryCode, setCountryCode] = useState("AE")
  const search = (e: any) => {
    if (e.key === "Enter") {
      setSearhTerm(e.target.value.toUpperCase())
    }
  }
  const showDetails = (e: any) => {
    setCountryCode(e.target.id)
    setIsOpen(true)
  }
  window.onclick = function (e: any) {
    if (!e.target.matches(".countryDetails") && !e.target.matches(".regularCountry")) {
      if (!isOpen) {
        return
      }
      setIsOpen(false)
    }
  }
  return (
    <>
      <header className={styles.header}></header>
      <div className={styles.container}>
        <aside className={styles.left}></aside>
        <main className={styles.main}>
          <Heading />
          <SearchBar search={search} />
          {isOpen ? (
            <div>
              <CountryDetails countryCode={countryCode} />
            </div>
          ) : null}

          <Countries showDetails={showDetails} searchTerm={searchTerm} />
        </main>
        <aside className={styles.right}></aside>
      </div>
    </>
  )
}

export default Main
