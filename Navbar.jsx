import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
export default function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.line1}>
                <img src={logo} alt="Logo" className={styles.line1Image} />

                <h2 style={{ color: "#fd4f00" }}> E-</h2><h2> Learn </h2>

            </div>
            <div className={styles.line2}>
                <button>Home</button>
                <button>Course</button>
                <button>Apply</button>
                <button>About Us</button>
                <button>Contact</button>
            </div>
            <div className={styles.line3}>
                <button className={styles.line3Button1}>My Account</button>
                <button className={styles.line3Button2}>Create Account</button>
            </div>
        </div>
    )
}
