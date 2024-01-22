import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import Link from 'next/link'



export default function CaseStudy() {
  return (
    <>
      
      <main className={styles.main}>
      <div className={styles.navBar}> 
            <div className={styles.left}>
            <Image src={'/images/anika_logo.svg'} alt='logo' width={54} height={58} />
                <Link href={'/'} className={styles.nav}>anikagrewal</Link>
            </div>
            <div className={styles.right}>
                  <Link href={'/caseStudy'} className={styles.nav}>Case Study</Link>
                  <p className={styles.nav}>Projects</p>
                  <p className={styles.nav}>About</p>
                  <p className={styles.nav}>Resume</p>
            </div>
        </div>
        <div className={styles.header}> 
        <div className={styles.innerHeader}>
          <p className={styles.mainTitle}>InnerSight</p>
          <p className={styles.desc}>Innersight is a journal app that utilizes artificial intelligence to help find problems in your day to day life and give insights on how to covercome these struggles.<br className={styles.space} />Your personal mental health compaion.</p>
          </div>
          <Image src={'/images/innerSight.svg'} alt='logo' width={519} height={453} />
        </div>
        <div className={styles.probSection}>
            <p>Problem</p>
        </div>
      </main>
    </>
  )
}