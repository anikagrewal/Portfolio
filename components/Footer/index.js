import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'


export default function Footer() {
return (
    <div>
    <hr className={styles.line}></hr>
    <div className={styles.footer}> 
        <div className={styles.contact}>
            <h2>Contact Me</h2>
            <div className={styles.footerLinks}>
            <a href="https://www.linkedin.com/in/anika-grewal-516712262" className={styles.nav}>LinkedIn</a>
            <p>Email</p>
            </div>
        </div>
        <hr></hr>
        <div className={styles.work}>
            <h2>Visit Work</h2>
            <div className={styles.footerLinks}>
            <a href="https://github.com/anikagrewal" className={styles.nav}>Github</a>
            <p>Other portfolio</p>
            </div>
        </div>
    </div>
    </div>
)
}