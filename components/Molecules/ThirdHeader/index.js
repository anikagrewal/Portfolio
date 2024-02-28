import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function ThirdHeader() {

return (
    <div className={styles.headerPage}> 
    <div className={styles.pagepalHeader}>
      <p className={styles.mainTitle}>WeatherVial</p>
      <p className={styles.desc}>A current weather app created using Typescript and Tailwind, for any location. Includes 5 days of the week, for every 3 hours.</p>
      <p className={styles.desc}>Roles: Developer</p>
      <p className={styles.desc}>Time Frame: Feb 2024</p>
      </div>
      <Image src={'/images/weather.svg'} alt='logo' width={320} height={400} />
    </div>
)}