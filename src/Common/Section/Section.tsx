import React from 'react'
import styles from "./section.module.scss";

interface sectionProps{
    firstTitle: string,
    secondTitle: string,
    subTitle: string,
    
}
function Section({firstTitle, secondTitle, subTitle,}: sectionProps) {
  return (
    <div className={styles.section}>
        <h1>{firstTitle} &</h1>
        <h1>{secondTitle}</h1>
        <p>{subTitle}</p>
    </div>
  )
}

export default Section