import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function VisitBtn() {
    return(
        <Link href="/caseStudy">
            
            <button className={styles.btn}>Visit Project</button>
            
        </Link>
        
    )
}