import React from 'react'
import styles from './Process.module.css'
import arrow from '../../assets/arrow.png'
import { Award, CalendarCheck, Search } from 'lucide-react'
export default function Process() {
    return (
        <div className={styles.ProcessContainer}>
            <div className={styles.icons}>
                <h1>Working Process for </h1>
                <br />
                <h1>  Join & Benefits.</h1>
            </div>
            <div className={styles.iconsTexts}>
                <div className={styles.text}>
                    <Search size={60} className={styles.iconsInd} />
                    <h3>Find Courses</h3>
                    <p>We've helped over 2,500 new <br />students to get into the most</p>
                </div>
                <img src={arrow} alt="arrow" className={styles.arrowLeft} />
                <div className={styles.text}>
                    <CalendarCheck size={60} className={styles.iconsInd} />
                    <h3>Book Your Seat</h3>
                    <p>We've helped over 2,500 new <br />students to get into the most</p>
                </div>
                <img src={arrow} alt="arrow" className={styles.arrowRight} />
                <div className={styles.text}>
                    <Award size={60} className={styles.iconsInd} id={styles.Award} />
                    <h3>Get Certificate</h3>
                    <p>We've helped over 2,500 new <br />students to get into the most</p>
                </div>
            </div>
        </div>
    )
}
