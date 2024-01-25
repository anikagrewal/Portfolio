import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'


export default function Projects() {
  return (
    <>
      
      <main className={styles.main}>
        <div>
     <NavBar />
       <h2 className={styles.proHeader}>Projects</h2>
       <div className={styles.pro}>
       <p className={styles.proTitle}>PagePal</p>
       <p className={styles.proTitle}>Rescue Radar</p>
       <p className={styles.proTitle}>Project 4</p>
       </div>
       <div className={styles.page}>
            <p className={styles.mainTitle}>PagePal</p>
       </div>
        <Footer/>
        </div>
      </main>
    </>
  )
}