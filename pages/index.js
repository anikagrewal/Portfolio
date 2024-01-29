import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import VisitBtn from '@/components/Buttons'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
      <div>
       <NavBar />
        <div className={styles.header}>
          <div className={styles.leftHeader}>
            <div className={styles.headLogo}>
               <Image src={'/images/anika_logo.svg'} alt='logo' width={215} height={215} />
            </div>
            <div className={styles.title}>
                <h1 className={styles.mainTitle}>Hey, I'm Anika</h1>
                <p className={styles.subheading}>I'm a Frontend Developer.</p>
                <p className={styles.bodyTxt}>Bringing Digital Dreams to Life</p>
            </div>
            </div>
            <div className={styles.moonAni}>
      <div className={styles.moon}>
        <div className={styles.disc}> </div>
      </div>
    </div>
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
