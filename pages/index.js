import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/Molecules/NavBar'
import VisitBtn from '@/components/Atoms/Buttons'
import Footer from '@/components/Molecules/Footer'
import Header from '@/components/Molecules/Header'


export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
      <div>
        <div className={styles.headerCon}>
       <NavBar />
       <Header/>
       </div>
        <div className={styles.proCon}>
        <div className={styles.projects}>
          <p className={styles.proHeader}>Projects</p>
          <div className={styles.carousel}>
          <Image src={'/images/proInner.png'} alt='innersight' width={861} height={421} />
          <VisitBtn/>
          </div>
        </div>
        <div className={styles.proLinks}>
        <Link href={'/caseStudy'} className={styles.linkTxt}>InnerSight</Link>
        <Link href={'/projects'} className={styles.linkTxt}>PagePal</Link>
        <p>Rescue Radar</p>
        <p>Project 4</p>
        </div>
        </div>
       
       
        <Footer/>
      </div>
      </main>
    </>
  )
}
