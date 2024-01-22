import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
      <div>
        <div className={styles.navBar}> 
            <div className={styles.left}>
                 <Image src={'/images/anika_logo.svg'} alt='logo' width={54} height={58} />
                 <p className={styles.nav}>anikagrewal</p>
            </div>
            <div className={styles.right}>
                  <Link href={'/caseStudy'} className={styles.nav}>Case Study</Link>
                  <p className={styles.nav}>Projects</p>
                  <p className={styles.nav}>About</p>
                  <p className={styles.nav}>Resume</p>
            </div>
        </div>
        <div className={styles.header}>
            <div className={styles.headLogo}>
               <Image src={'/images/anika_logo.svg'} alt='logo' width={215} height={215} />
            </div>
            <div className={styles.title}>
                <h1>Hey, I'm Anika</h1>
                <p>I am a Frontend Developer.</p>
            </div>
                <div className={styles.moonAni}>
                      <div className={styles.moon}>
                      <div className={styles.disc}></div>
                      <p>Moon animation here</p>
                </div>
            </div>
        </div>
        <div className={styles.projects}>
          <p>Projects</p>
          <Image src={'/images/proInner.png'} alt='innersight' width={861} height={421} />
        </div>
        <div className={styles.aboutSection}>
            <div className={styles.logo}>
                <Image src={'/images/anika_logo.svg'} alt='logo' width={215} height={215} />
            </div>
            <div className={styles.about}>
                <p>About</p>
            </div>
        </div>
        <hr className={styles.line}></hr>
        <div className={styles.footer}> 
            <div className={styles.contact}>
                <p>Contact Me</p>

            </div>
            <hr></hr>
            <div className={styles.work}>
                <p>Visit Work</p>
            </div>
        </div>
      </div>
      </main>
    </>
  )
}
