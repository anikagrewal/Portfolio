import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Menu() {



    return (
        <div>
            <p className={styles.menu}>Jump to:</p>
           
                    <nav className={styles.sticky}>
                    <ul>
                        <li><Link href="#innersight">InnerSight</Link></li>
                       <li><Link href="#design">Design Process</Link></li> 
                       <li><Link href="#challenges">Challenges</Link></li> 
                       <li><Link href="#solution">Solution</Link></li>  
                    </ul>
                    </nav>
          
        </div>
    )
}