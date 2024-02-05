import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function PageHeader() {

return (
    <div className={styles.headerPage}> 
    <div className={styles.pagepalHeader}>
      <p className={styles.mainTitle}>PagePal</p>
      <p className={styles.desc}>PagePal is a React-based personal library management web app, providing individuals seamless book management, easy search options, and customizable bookshelves.</p>
      <p className={styles.desc}>Roles: Developer</p>
      <p className={styles.desc}>Time Frame: Sept 2023 - Dec 2023</p>
      </div>
      <Image src={'/images/pagepall.png'} alt='logo' width={800} height={400} />
    </div>
)}