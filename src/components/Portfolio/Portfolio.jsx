import React from 'react'
import styles from "./Portfolio.module.css";
import Flyers from './Flyers';
import Logos from './Logos';
function Portfolio() {
  return (
    <div id='portfolio' className={``}>
        <Flyers />
        <Logos />
    </div>
  )
}

export default Portfolio