import React from "react"
import styles from "./main.module.css"
import Heading from "../heading/heading"
import SearchBar from "../searchBar/searchBar"

const Main = () => {
  return (
    <>
      <header className={styles.header}></header>
      <div>
        <aside className={styles.left}></aside>
        <main className={styles.main}>
          <Heading />
          <SearchBar />
        </main>
        <aside className={styles.right}></aside>
      </div>
    </>
  )
}

export default Main
