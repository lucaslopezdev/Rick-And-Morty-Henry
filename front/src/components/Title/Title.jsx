import React from 'react';
import titulo from '../../assets/titulo.png'
import styles from './Title.module.css'

export default function Title() {
  return(
    <img className={styles.imagen} src={titulo} alt="Rick and morty" />
  )
}