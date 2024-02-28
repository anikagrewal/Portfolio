import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import NavBar from '@/components/Molecules/NavBar'
import Footer from '@/components/Molecules/Footer'
import ChargeHeader from '@/components/Molecules/ChargeHeader'
import ScrollTop from '@/components/Atoms/ScrollTop'

export default function projectTwo() {
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
       <ChargeHeader/>
       <div className={styles.page}>
      <h2 className={styles.projectHeader}>Problem</h2>
      <div className={styles.projProbCon}>
      <p className={styles.projProb}>This project hopes to solve the challenges individuals face when encountering unexpected traffic crises, such as
       being stuck on a highway during adverse weather conditions or other unforeseen events. In such situations, individuals may find themselves stranded 
       without access to basic necessities, such as food, water, and essential medications like insulin. These crises can be particularly stressful, and the 
       inability to procure essential items promptly can exacerbate an already challenging situation.</p>
        </div>
        <div className={styles.proImg}>
          <div>
        <Image className={styles.imgStyle} src={'/images/tbimg.svg'} alt='logo' width={600} height={400} />
        <p>The request process allows an individual to either request an item they are in need of or look at requests that have been sent out to get in touch and help. </p>
        </div>
        <div>
        <Image className={styles.imgStyle} src={'/images/tbimgtwo.svg'} alt='logo' width={600} height={400} />
        <p>This quiz helps engage individuals in a fun way to learn about the essentials to have and know about car safety in emergency and stressful events.</p>
        </div>
        </div>

        <h2 className={styles.projectHeader}>Solution</h2>
        <div className={styles.projProbCon}>
       <p className={styles.projProb}>The app, developed with the React NextJS framework, addresses the problem of individuals stranded in traffic crises by
        fostering community connectivity. It connects those in need with nearby users willing to provide necessities, transforming isolation into a collaborative 
        opportunity for support. Users can post requests, engage in chats for item exchanges, and even participate in a knowledge quiz on safe driving practices, 
        all contributing to the app's goal of enhancing community resilience during unexpected traffic-related crises.</p>
         </div>
       </div>
       <div className={styles.projbtn}>
       <a className={styles.linkText} href="https://traffic-buddy.vercel.app/">
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
        <Link href="/projectThree">
          <div className={styles.arrowCon}>
         <p>WeatherVial</p>
       
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