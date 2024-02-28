import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function NavBar() {

return (

<div className={styles.navCon}>
<div className={styles.navBar}> 
            <div className={styles.left}>
          
                 <Link href={'/'} className={styles.nav}> <Image src={'/images/anika_logo.svg'} alt='logo' width={90} height={98} /></Link>
            </div>
            <div className={styles.right}>
                  <Link href={'/caseStudy'} style={{ textDecoration: 'none'}} className={styles.nav}>Case Study</Link>
                  <Link href={'/projects'}style={{ textDecoration: 'none'}} className={styles.nav}>Development</Link>
                  <Link href={'/design'}style={{ textDecoration: 'none'}} className={styles.nav}>Design</Link>
                  <Link href="#contact" style={{ textDecoration: 'none'}} className={styles.nav}>Contact</Link>
                  
            </div>
        </div>
        </div>

)}