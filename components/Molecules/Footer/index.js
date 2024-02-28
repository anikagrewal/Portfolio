import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import EmailLink from '@/components/Atoms/Email'
import PdfLink from '@/components/Atoms/PDF'

export default function Footer() {
 const userEmail = 'agrewal117@my.bcit.ca';
 const pdfUrl = '/resume.pdf';

return (
    <div id="contact">
    <hr className={styles.line}></hr>
    <div className={styles.footer}> 
     
            <h2 className={styles.footerheader}>Contact Me</h2>
            <div className={styles.footerLinks}>
            <a href="https://www.linkedin.com/in/anika-grewal-516712262" style={{ textDecoration: 'none'}} className={styles.linkTxt}>LinkedIn</a>
            <EmailLink email={userEmail} />
           <PdfLink pdfUrl={pdfUrl}/>
            <a href="https://github.com/anikagrewal" style={{ textDecoration: 'none'}} className={styles.linkTxt}>Github</a>
            
            </div>
     
       
     
    </div>
    </div>
)
}