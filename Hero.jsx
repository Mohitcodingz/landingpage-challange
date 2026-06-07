import React from 'react'
import styles from './Hero.module.css'
import { FaSearch } from 'react-icons/fa'
import girl from '../../assets/girl.png'
export default function Hero() {
    return (
        <div className={styles.HeroContainer}>
            <div className={styles.leftHero}>
                <div className={styles.alert}>
                    <button>New</button>
                    <p>Get 20% off in every courses in january 2027</p>
                </div>
                <div className={styles.bigTitle}>
                    <h1>
                        Let's Grow Your
                        <br />
                        Education Level Up
                        <br />
                        With E-Learn.
                    </h1>
                </div>
                <div className={styles.smallTitle}>
                    <p>Learn anytime anywhere with expert.</p>
                </div>
                <div className={styles.SearchCourse}>
                    <input type="text" placeholder="Type Your course" />
                    <div className={styles.SearchBox}>
                        <FaSearch style={{ color: "white" }} />
                    </div>
                </div>
            </div>
            <div className={styles.rightHero}>
                <img src={girl} alt="girlImageError" />
            </div>
        </div>
    )
}

