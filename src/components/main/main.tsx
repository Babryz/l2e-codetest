import React, { useState } from "react"
import styles from "./main.module.css"
import Heading from "../heading/heading"
import SearchBar from "../searchBar/searchBar"

const Main = () => {
  const [searchTerm, setSearhTerm] = useState("")
  const search = (e: any) => {
    if (e.key === "Enter") {
      setSearhTerm(e.target.value)
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
        </main>
        <aside className={styles.right}></aside>
      </div>
    </>
  )
}

export default Main
