import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import NavBar from '@/components/Molecules/NavBar'
import Footer from '@/components/Molecules/Footer'


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
        <div className={styles.pageHeader}>
          <div className={styles.pageLeft}>
            <p className={styles.mainTitlePage}>PagePal</p>
            <p className={styles.pageText}>PagePal is a customizable library. Books can be searched for and added to the library. The shelves can be customized to have different names and the books can be moved to different shelves or deleted.</p>
            <p className={styles.pageText}>My roles: Developer</p>
            <p className={styles.pageText}>Time Frame: Sept 2023 - Dec 2023</p>
            </div>
            <Image src={'/images/pagepall.png'} alt='logo' width={800} height={400} />
        </div>
        <div className={styles.proImg}>
        <Image src={'/images/library.png'} alt='logo' width={900} height={460} />
        <Image src={'/images/addbook.png'} alt='logo' width={800} height={600} />
        <Image src={'/images/shelf.png'} alt='logo' width={800} height={400} />
        </div>
       
       </div>
       <a className={styles.linkText} href="https://pagepal-library-app.vercel.app/">Visit Live Site</a>
        <Footer/>
        </div>
      </main>
    </>
  )
}