import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/Molecules/NavBar'
import VisitBtn from '@/components/Atoms/Buttons'
import Footer from '@/components/Molecules/Footer'
import Header from '@/components/Molecules/Header'
import ScrollTop from '@/components/Atoms/ScrollTop'
import Carousel from '@/components/Molecules/Carousel'



export default function Design() {
  return (
    <>
      
      <main className={styles.main}>
      <div>
        <div className={styles.headerCon}>

       <NavBar />
       </div>
       <div className={styles.proImg}>
          <div className={styles.imgGap}>
        <Image className={styles.imgStyle} src={'/images/rihanna.png'} alt='logo' width={410} height={550} />
        <Image className={styles.imgStyle}  src={'/images/painting.png'} alt='logo' width={410} height={550} />
       
        </div>
        
        </div>
        <div className={styles.proImg}>
          <div className={styles.imgGap}>
      
        <Image className={styles.imgStyle} src={'/images/radio.png'} alt='logo' width={410} height={300} />
        <Image className={styles.imgStyle} src={'/images/giraffe.png'} alt='logo' width={410} height={300} />
        </div>
        
        </div>
       
       <ScrollTop/>
        <Footer/>
      </div>
      </main>
    </>
  )
}