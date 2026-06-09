import React from 'react'
import styles from './ReviewSection.module.css'
import { FaHeart, FaStar } from 'react-icons/fa'
import slack from '../../assets/slack.png'
import microsoft from '../../assets/microsoft.png'
import fb from '../../assets/fb.png'
export default function ReviewSection() {
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.linepart1}>

                <div className={styles.line1}>
                    <h1>10k</h1>
                    <div className={styles.heartContainer}>
                        <FaHeart className={styles.FaHeart} />
                        <FaHeart className={styles.FaHeart} />
                        <FaHeart className={styles.FaHeart} />
                        <FaHeart className={styles.FaHeart} />
                        <FaHeart className={styles.FaHeart} />
                    </div>
                    <p>Active Students</p>
                    <p style={{ color: "#fd4f00" }}>On Websites</p>
                </div>
                <div className={styles.line2}>
                    <h1>4.7</h1>
                    <div className={styles.starContainer}>
                        <FaStar className={styles.FaStar} />
                        <FaStar className={styles.FaStar} />
                        <FaStar className={styles.FaStar} />
                        <FaStar className={styles.FaStar} />
                        <FaStar className={styles.FaStar} />
                    </div>
                    <p>1,938 Rating</p>
                    <p style={{ color: "#fd4f00" }}>User Community</p>
                </div>
            </div>
            <div className={styles.line3}>
                <h1>
                    Trusted by 25,000+ happy
                    <br />
                    students are joinig with us
                    <br />
                    for achieve their goal.
                </h1>
                <p style={{ fontSize: "12px" }}>Also Featured in:</p>
                <div className={styles.company}>

                    <div className={styles.companyInd}>
                        <img src={slack} alt="" />
                        <p>Slack</p>
                    </div>
                    <div className={styles.companyInd}>
                        <img src={microsoft} alt="" />
                        <p>Microsoft</p>
                    </div>
                    <div className={styles.companyInd}>
                        <img src={fb} alt="" style={{ width: "auto", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                    </div>
                </div>

            </div>
        </div>
    )
}