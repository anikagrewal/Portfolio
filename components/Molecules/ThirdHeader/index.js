import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function ThirdHeader() {

return (
    <div className={styles.headerPage}> 
    <div className={styles.pagepalHeader}>
      <p className={styles.mainTitle}>Rescue Radar</p>
      <p className={styles.desc}>Lorem  epsom</p>
      <p className={styles.desc}>Roles: Developer</p>
      <p className={styles.desc}>Time Frame:</p>
      </div>
      <Image src={''} alt='logo' width={320} height={400} />
    </div>
)}