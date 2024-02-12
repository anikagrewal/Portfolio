import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function VisitBtn({ link }) {
    return(
        <Link href={link || '/'}>
            
            <button className={styles.btn}>Visit Project</button>
            
        </Link>
        
    )
}