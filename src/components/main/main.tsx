import React, { useState } from "react"
import styles from "./main.module.css"
import Heading from "../heading/heading"
import SearchBar from "../searchBar/searchBar"
import Countries from "../countries/countries"

const Main = () => {
  const [searchTerm, setSearhTerm] = useState("")
  const search = (e: any) => {
    if (e.key === "Enter") {
      setSearhTerm(e.target.value.toUpperCase())
    }
  }
  return (
    <>
      <header className={styles.header}></header>
      <div>
        <aside className={styles.left}></aside>
        <main className={styles.main}>
          <Heading />
          <SearchBar search={search} />
          <Countries searchTerm={searchTerm} />
        </main>
        <aside className={styles.right}></aside>
      </div>
    </>
  )
}

export default Main
