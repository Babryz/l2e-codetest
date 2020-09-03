import React from "react"
import styles from "./main.module.css"

const Main = () => {
  return (
    <>
      <header className={styles.header}></header>
      <aside className={styles.left}></aside>
      <aside className={styles.right}></aside>
      <main className={styles.main}></main>
    </>
  )
}

export default Main
