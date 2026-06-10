import React from 'react'
import styles from './Course.module.css'
import CourseCards from './CourseCards'

export default function Course() {

  const courses = [
    { id: 1, price: '$250', img: '/images/course1.jpg', course: 'UI/UX Design', courseContext: 'UI/UX Design | How to Design with professional', key1: '24 Lessons', key2: 'Online Class', votes: Math.floor(Math.random() * 100) },
    { id: 2, price: '$250', img: '/images/course2.jpg', course: 'UI/UX Design', courseContext: 'PHP Programming | Develop your own Skills', key1: '24 Lessons', key2: 'Online Class', votes: Math.floor(Math.random() * 100) },
    { id: 3, price: '$250', img: '/images/course3.jpg', course: 'UI/UX Design', courseContext: 'Mathmatics | Learn easily with best techniques', key1: '24 Lessons', key2: 'Online Class', votes: Math.floor(Math.random() * 100) },
    { id: 4, price: '$250', img: '/images/course4.jpg', course: 'UI/UX Design', courseContext: 'Javascript | Why become a Programmer?', key1: '24 Lessons', key2: 'Online Class', votes: Math.floor(Math.random() * 100) },
    { id: 5, price: '$250', img: '/images/course5.jpg', course: 'UI/UX Design', courseContext: 'English Language | Easy Method to Learn English', key1: '24 Lessons', key2: 'Online Class', votes: Math.floor(Math.random() * 100) },
    { id: 6, price: '$250', img: '/images/course6.jpg', course: 'UI/UX Design', courseContext: 'Digital Marketing | Best Online Course', key1: '24 Lessons', key2: 'Online Class', votes: Math.floor(Math.random() * 100) },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>Our Popular Courses</h3>
        <p>Online Education Platform is very easy way to learn anything from anywhere. Now a days.</p>
      </div>
      <div className={styles.sortByRef}>
        <select>
          <option value="sort">Sort By Relevance</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="votes">Votes</option>
        </select>
      </div>
      <div className={styles.cardCollection}>
        {courses.map((item) => (
          <CourseCards
            key={item.id}
            price={item.price}
            img={item.img}
            course={item.course}
            courseContext={item.courseContext}
            key1={item.key1}
            key2={item.key2}
            votes={item.votes}
          />
        ))}
      </div>
    </div>
  )
}