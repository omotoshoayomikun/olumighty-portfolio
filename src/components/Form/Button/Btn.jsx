import React from 'react'
import styles from "./Btn.module.css"

export const Btn = (props) => {
  return (
    <button className={`${styles.btn}`} onClick={props.handleClick}>{props.text}</button>
  )
}

export const OutlineBtn = (props) => {
  return (
    <button className={`${styles.outlinebtn}`} onClick={props.handleClick}>{props.text}</button>
  )
}