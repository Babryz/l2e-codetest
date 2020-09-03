import React from "react"
import styles from "./searchBar.module.css"
import icon from "../../images/magnifying-glass.png"

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <img src={icon} alt="" />
        <input type="text" placeholder="Search for a country" />
      </div>
    </div>
  )
}

export default SearchBar
