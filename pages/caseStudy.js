import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'

export default function CaseStudy() {
  return (
    <>
      
      <main className={styles.main}>
        <div id="innersight">
     <NavBar />
        <div className={styles.headerCase}> 
        <div className={styles.innerHeader}>
          <p className={styles.mainTitle}>InnerSight</p>
          <p className={styles.desc}>Innersight is a journal app that utilizes artificial intelligence to help find problems in your day to day life and give insights on how to covercome these struggles.<br className={styles.space} />Your personal mental health compaion.</p>
          <p>My roles: Project Manager | Developer</p>
          <p>Time Frame: Sept 2023 - Ongoing</p>
          </div>
          <Image src={'/images/innerSight.svg'} alt='logo' width={519} height={453} />
        </div>
        <Menu />
        <div className={styles.probSection}>
            <p>Problem</p>
            <p>The project hopes to address the challenge of analyzing numerous journal entries to find correlations between the user and their disorders. The project also aims to help users actively avoid or increase activities to improve their well-being..</p>
         <hr className={styles.perLine}></hr>
          <div className={styles.percentage}>
            <p className={styles.percent}>24%</p>
            <p>In just three years, drug claims in Canada for treating mental disorders among those aged 30 and under soared by a staggering 24%</p>
            </div>
            <hr></hr>
        </div>
        
     
        <div id="design" className={styles.desSection}> 
          <p>Design Process</p>
          <div> 
            <h2>UX Research and Ideation</h2>
            <p>User Interviews</p>
            <p>Persona</p>
            <Image src={'/images/persona.png'} alt='logo' width={510} height={750} />
          </div>
          <div> 
            <h2>Information Architecture</h2>
            <Image src={'/images/sitemap.png'} alt='logo' width={300} height={250} />
          </div>
          <div> 
            <h2>UI Design and Branding</h2>
            <p>Branding</p>
            <p>Logo</p>
            <Image src={'/images/oldLogo.png'} alt='logo' width={100} height={100} />
            <Image src={'/images/newLogo.png'} alt='logo' width={300} height={300} />
            <p>Colour</p>
            <p>Delft Blue</p>
            <div className={styles.colorone}>
              <p>hex</p>
            </div>
            <p>Savoy Blue</p>
            <div className={styles.colortwo}>
              <p>hex</p>
            </div>
            <p>Dark Gray</p>
            <div className={styles.colorthree}>
              <p>hex</p>
            </div>
            <p>Periwinkle</p>
            <div className={styles.colorfour}>
              <p>hex</p>
            </div>
            <p>Light Periwinkle</p>
            <div className={styles.colorfive}>
              <p>hex</p>
            </div>
            <p>Light Lavender</p>
            <div className={styles.colorsix}>
              <p>hex</p>
            </div>

           
            <p>Mascots</p>
             <Image src={'/images/panda.svg'} alt='logo' width={200} height={200} />
             <Image src={'/images/sloth.svg'} alt='logo' width={200} height={200} />
             <Image src={'/images/otter.svg'} alt='logo' width={200} height={200} />
             <Image src={'/images/frog.svg'} alt='logo' width={200} height={200} />
            <p>Assets</p>
            <p>Lo-Fi | Hi-Fi</p>
            <Image src={'/images/hifiPhoto.png'} alt='logo' width={500} height={400} />
            <Image src={'/images/lofiPhoto.png'} alt='logo' width={500} height={400} />
          </div>
          <div> 
            <h2>Coding</h2>
          </div>
        </div>
        <div id="challenges" className={styles.challSection}>
            <p>Challenges</p>
        </div>
        <div id="solution" className={styles.solSection}>
            <p>Solution</p>
        </div>
        <Footer/>
        </div>
      </main>
    </>
  )
}