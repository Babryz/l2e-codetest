import React from "react"
import styles from "./heading.module.css"

const Heading = () => {
  return (
    <div className={`${styles.container} shadowed`}>
      <h3 className={styles.title}>Lorem Ipsum</h3>
      <p className={styles.paragraph}>Sit dolor</p>
    </div>
  )
}

export default Heading
