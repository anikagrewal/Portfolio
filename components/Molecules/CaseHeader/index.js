import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function CaseHeader() {

return (
    <div className={styles.headerCase}> 
    <div className={styles.innerHeader}>
      <p className={styles.mainTitleCase}>InnerSight</p>
      <p className={styles.desc}>Innersight is a journal app that utilizes artificial intelligence to help find problems in your day to day life and give insights on how to covercome these struggles.<br className={styles.space} />Your personal mental health compaion.</p>
      <p className={styles.desc}>Roles: Project Manager | Developer</p>
      <p className={styles.desc}>Time Frame: Sept 2023 - Ongoing</p>
      </div>
      <Image src={'/images/innerSight.svg'} alt='logo' width={519} height={453} />
    </div>
)}