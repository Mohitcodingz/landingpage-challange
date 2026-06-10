import React from 'react'
import styles from './CourseCards.module.css'
import { FaStar } from 'react-icons/fa6'
import { ArrowRightIcon } from 'lucide-react'

export default function CourseCards({ price, img, course, courseContext, key1, key2, votes }) {
  return (
    <div className={styles.cardContainer}>
      <img src={img} alt='course' />
      <div className={styles.price}>
        <button>{course}</button>
        <p>{price}</p>
      </div>
      <h2>{courseContext}</h2>
      <div className={styles.keypoints}>
        <p>{key1}</p>
        <p>{key2}</p>
      </div>
      <hr />
      <div className={styles.end}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p>{votes} Votes</p>
        <ArrowRightIcon />
      </div>
    </div>
  )
}