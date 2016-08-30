import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <img
      alt='Duck'
      className={classes.duck}
      src={DuckImage} />
  </div>
)

export default HomeView
