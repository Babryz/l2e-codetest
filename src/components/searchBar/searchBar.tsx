import React from "react"
import styles from "./searchBar.module.css"
import icon from "../../images/magnifying-glass.png"

interface props {
  search: Function
}

const SearchBar = (props: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <img src={icon} alt="" />
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search for a country"
            onKeyDown={(e) => props.search(e)}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchBar
