import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.line1}>
                <img src={logo} alt="Logo" className={styles.line1Image} />

                <h2 style={{ color: "#fd4f00" }}> E-</h2><h2> Learn </h2>

            </div>
            <div className={styles.line2}>
                <Link to='/' className={styles.Link}>Home</Link>
                <Link to='/Course' className={styles.Link}>Course</Link>
                <Link to='/Apply' className={styles.Link}>Apply</Link>
                <Link to='/AboutUs' className={styles.Link}>About Us</Link>
                <Link to='/Contact' className={styles.Link}>Contact</Link>
            </div>
            <div className={styles.line3}>
                <button className={styles.line3Button1}>My Account</button>
                <button className={styles.line3Button2}>Create Account</button>
            </div>
        </div>
    )
}