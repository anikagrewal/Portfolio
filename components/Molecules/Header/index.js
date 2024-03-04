import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function Header() {

return (

    <div className={styles.header}>
    <div className={styles.leftHeader}>
      <div className={styles.headLogo}>
         <Image src={'/images/anika_logo_clr.svg'} alt='logo' width={215} height={215} className={styles.imgLogoSm} />
      </div>
      <div className={styles.title}>
          <h1 className={styles.mainTitle}>Hey, I'm Anika!</h1>
          <p className={styles.subheading}>A Frontend Developer & UI/UX Designer</p>
          <p className={styles.bodyTxt}>Bringing Digital Dreams to Life</p>
      </div>
      </div>
      <div className={styles.moonAni}>
<div className={styles.moon}>
  <div className={styles.disc}> </div>
</div>
</div>
  </div>
)}