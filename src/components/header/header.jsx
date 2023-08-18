import React from 'react'
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className='flex justify-center py-4'>
      <h1 className={`${styles.headerText} text-3xl font-bold`}>
        Zillow
      </h1>
    </div>
  )
}
