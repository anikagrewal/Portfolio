import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function ChargeHeader() {

return (
    <div className={styles.headerPage}> 
    <div className={styles.pagepalHeader}>
      <p className={styles.mainTitle}>Traffic Buddy</p>
      <p className={styles.desc}>Traffic Buddy facilitates connections between users stuck in traffic crises and those able to provide necessities such as food, water, and medication.</p>
      <p className={styles.desc}>Roles: Developer</p>
      <p className={styles.desc}>Time Frame: Jan 2023 - May 2023</p>
      </div>
      <Image src={'/images/trafficbuddy.png'} alt='logo' width={320} height={400} />
    </div>
)}