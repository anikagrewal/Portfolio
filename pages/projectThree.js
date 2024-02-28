import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import NavBar from '@/components/Molecules/NavBar'
import Footer from '@/components/Molecules/Footer'
import ThirdHeader from '@/components/Molecules/ThirdHeader'
import ScrollTop from '@/components/Atoms/ScrollTop'

export default function projectThree() {
  return (
    <>
      
      <main className={styles.main}>
        <div>
     <NavBar />
       <h2 className={styles.proHeader}>Projects</h2>
       <div className={styles.pro}>
       <Link href="/projects">
       <p className={styles.proTitle}>PagePal</p>
        </Link>
        <Link href="/projectTwo">
       <p className={styles.proTitle}>Traffic Buddy</p>
        </Link>
        <Link href="/projectThree">
       <p className={styles.proTitle}>WeatherVial</p>
        </Link>
       </div>
       <ThirdHeader/>
       <div className={styles.page}>
      <h2 className={styles.projectHeader}>Problem</h2>
      <div className={styles.projProbCon}>
      <p className={styles.projProb}>This project hopes to solve the all in one weather forecast of both current and the next five days for every three hours
        in a single, unified platform. The aim was address the needs of an individual who would like to know the weather of any city that they choose to search for.</p>
        </div>
        <div className={styles.proImg}>
          <div>
        <Image className={styles.imgStyle} src={'/images/weathervial.png'} alt='logo' width={850} height={500} />
        <p></p>
        </div>
        
        </div>

        <h2 className={styles.projectHeader}>Solution</h2>
        <div className={styles.projProbCon}>
       <p className={styles.projProb}>WeatherVial, is a weather app developed using Typescript and Tailwind in NextJS and powered by the Open Weather API. It integrates two API's together to get both current and the five day forecast.
       Using vector images and UI/UX design, a simple and unique layout was created for easy accessibility and a weather vial ambiance.</p>
         </div>
       </div>
       <div className={styles.projbtn}>
       <a className={styles.linkText} href="https://weather-app-2024-beige.vercel.app/">
       <button className={styles.btn}>Visit Live Site</button>
        </a>
        </div>
        <div className={styles.bottom}>
        <div className={styles.arrowCon}>
        <Link href="/projects">
          <div className={styles.arrowCon}>
         <p>PagePal</p>
          <hr className={styles.arrow}></hr>
          </div>
        </Link>
        </div>
        <div className={styles.arrowCon}>
        <Link href="/projectTwo">
          <div className={styles.arrowCon}>
         <p>Traffic Buddy</p>
       
       <hr className={styles.arrow}></hr>
       </div>
        </Link>
        </div>
        </div>
        <ScrollTop/>
        <Footer/>
        </div>
      </main>
    </>
  )
}