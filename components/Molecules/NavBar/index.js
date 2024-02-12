import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function NavBar() {

return (

<div className={styles.navCon}>
<div className={styles.navBar}> 
            <div className={styles.left}>
          
                 <Link href={'/'} className={styles.nav}> <Image src={'/images/anika_logo.svg'} alt='logo' width={54} height={58} /></Link>
            </div>
            <div className={styles.right}>
                  <Link href={'/caseStudy'} style={{ textDecoration: 'none'}} className={styles.nav}>Case Study</Link>
                  <Link href={'/projects'}style={{ textDecoration: 'none'}} className={styles.nav}>Projects</Link>
                  <p className={styles.nav}>About</p>
                  <p className={styles.nav}>Resume</p>
            </div>
        </div>
        </div>

)}