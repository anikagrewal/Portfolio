import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import NavBar from '@/components/Molecules/NavBar'
import Footer from '@/components/Molecules/Footer'
import PageHeader from '@/components/Molecules/PageHeader'
import ScrollTop from '@/components/Atoms/ScrollTop'

export default function Projects() {
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
       <PageHeader/>
       <div className={styles.page}>
      <h2 className={styles.projectHeader}>Problem</h2>
      <div className={styles.projProbCon}>
      <p className={styles.projProb}>This project hopes to solve the organization and management of both physical books and e-books 
        in a single, unified platform. The aim was to address the needs of readers who want to effortlessly 
        organize their existing book collection, both in physical and digital formats, and also discover new books.</p>
        </div>
        <div className={styles.proImg}>
          <div>
        <Image className={styles.imgStyle} src={'/images/pagepal1.png'} alt='logo' width={390} height={230} />
        <p>The home page of the individual's library shows each shelf that they have created.</p>
        </div>
        <div>
        <Image className={styles.imgStyle}  src={'/images/pagepal2.png'} alt='logo' width={400} height={270} />
        <p>This simplistic search page allows individual's to quickly search by author, book title, or genre.</p>
        </div>
        <div>
        <Image className={styles.imgStyle}  src={'/images/pagepal3.png'} alt='logo' width={400} height={230} />
        <p>The shelf page features the books that have been added, while allowing the individual to choose to add or remove books and change the name of the shelf.</p>
        </div>
        </div>

        <h2 className={styles.projectHeader}>Solution</h2>
        <div className={styles.projProbCon}>
       <p className={styles.projProb}>PagePal, is a personal library management web app developed using React and powered by the Google Books API. 
        The application allows users to seamlessly organize and digitally track records for their books. It simplifies
         the process of adding and managing books, offering flexible search options by title or author, as well as convenient 
         filtering capabilities. Users can create customizable bookshelves, making it easy to categorize and locate books according to their preferences.</p>
         </div>
       </div>
       <div className={styles.projbtn}>
       <a className={styles.linkText} href="https://pagepal-library-app.vercel.app/">
       <button className={styles.btn}>Visit Live Site</button>
        </a>
        </div>
        <div className={styles.bottom}>
        <div className={styles.arrowCon}>
        <Link href="/projectTwo">
          <div className={styles.arrowCon}>
         <p>Traffic Buddy</p>
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