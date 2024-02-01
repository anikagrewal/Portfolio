import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import NavBar from '@/components/Molecules/NavBar'
import Footer from '@/components/Molecules/Footer'
import CaseHeader from '@/components/Molecules/CaseHeader'


export default function CaseStudy() {
  return (
    <>
      
      <main className={styles.main}>
        <div id="innersight">
     <NavBar />
       <CaseHeader/>
       
       <h2 className={styles.desHeader}>Problem</h2>
        <div className={styles.probSection}>
          <div className={styles.probBody}>
            <p>The project hopes to address the challenge of analyzing numerous journal entries to find correlations between the user and their disorders. The project also aims to help users actively avoid or increase activities to improve their well-being..</p>
            </div>
        <hr className={styles.perLine}></hr>
          <div className={styles.percentage}>
            <p className={styles.percent}>24%</p>
            <p>In just three years, drug claims in Canada for treating mental disorders among those aged 30 and under soared by a staggering 24%</p>
            </div>
            <hr className={styles.perLine}></hr>
        </div>
        
     
        <div id="design" className={styles.desSection}> 
          <h2 className={styles.desHeader}>Design Process</h2>
          <div> 
            
            <p className={styles.innerSub}>Research</p>
            <div className={styles.research}>
            <div className={styles.quest}>
              <p>Interview Questions</p>
            <p>The following questions were the most important aspects that was wanted to capture how people interact with journaling.</p>
            <li>1. What specific features would you expect from a journaling tool aimed at assisting with mental health?</li>
            <li>2. Are there any specific challenges that you face when journaling? If so, what are they? </li>
            <li>3. What kind of stressors do you experience in your day-to-day?</li>
            <li>4. What do you believe is the main benefit to writing in a journal?</li>
            <li>5, What discourages you from journaling?</li>
            </div>
            <div className={styles.find}>
              <p>Findings</p>
              <p>Pyschological Barriers</p>
              <li>Motivation & consistency</li>
              <li>Perceived usefulness</li>
              <li>Repetition</li>
              <li>Emotional challenges</li>
              <li>Writing challenges</li>
              <li>Time constraints</li>
              <li>Self-criticism & hesitation</li>
              <li>Lack of direction</li>
              <p>Technical/Functional Issues</p>
              <li>Lack of customization</li>
              <li>Simplistic features</li>
              <li>Receiving same generated responses</li>
              <li>Aesthetic concerns</li>
              <p>Privacy Concerns</p>
              <li>Data sharing through AI</li>
         
            </div>
          </div>
          <hr className={styles.divider}></hr>
            <p className={styles.innerSub}>Persona</p>
            <div className={styles.persona}>
            <p className={styles.perText}>Amaya, is a 24 year old BCIT student who has been diagnosed with anxiety and depression. She has been consistently journaling her thoughts and emotions traditionally with a pen and paper. </p>
           <div className={styles.perImg}>
            <Image src={'/images/persona.png'} alt='logo' width={510} height={750} />
           </div> 
            </div>
          </div>
          <hr className={styles.divider}></hr>
          <div> 
          <p className={styles.innerSub}>Site Map</p>
            <div className={styles.persona}>
            <p className={styles.perText}>The site map outlines the key pages for the MVP's. There are three different routes. No saved journal entry, one saved journal entry, and multiple saved journal entries </p>
            <div className={styles.siteImg}>
            <Image src={'/images/sitemap.png'} alt='logo' width={600} height={620} />
            </div>
            </div>
          </div>
          <hr className={styles.divider}></hr>
          <div> 
            <p className={styles.innerSub}>Logo</p>
            <div className={styles.logoSec}>
            <div className={styles.logoCase}>
            <Image src={'/images/oldLogo.png'} alt='logo' width={225} height={225} />
            <p>First Iteration of Logo</p>
            </div>
            <div className={styles.logoCase}>
            <Image src={'/images/newLogo.png'} alt='logo' width={500} height={500} />
            <p>Final Design of Logo</p>
            </div>
            </div>
            <hr className={styles.divider}></hr>
            <p className={styles.innerSub}>Colour</p>
            <div className={styles.persona}>
            <p className={styles.perText}>Monochromatic Purple - Emphasize the feeling of calmness. The purples are cooler with a little bit of contrast for one or two shades so that the loud colours aren't as evoked for the user and potentially stress them out when using the application.</p>
           <div className={styles.colorCon}>
            <div className={styles.colorRow}>
              <div className={styles.colBox}>
            <p>Delft Blue</p>
            <div className={styles.colorone}>
              <p className={styles.hexText}>#525585</p>
            </div>
            </div>
            <div className={styles.colBox}>
            <p>Savoy Blue</p>
            <div className={styles.colortwo}>
              <p className={styles.hexText}>#6164C3</p>
            </div>
            </div>
            <div className={styles.colBox}>
            <p>Dark Gray</p>
            <div className={styles.colorthree}>
              <p className={styles.hexText}>#88898C</p>
            </div>
            </div>
            </div>
            <div className={styles.colorRow}>
            <div className={styles.colBox}>
            <p>Periwinkle</p>
            <div className={styles.colorfour}>
              <p className={styles.hexText}>#C5C7F7</p>
            </div>
            </div>
          
            <div className={styles.colBox}>
            <p>Light Periwinkle</p>
            <div className={styles.colorfive}>
              <p className={styles.hexText}>#D5D7FF</p>
            </div>
            </div>
            <div className={styles.colBox}>
            <p>Light Lavender</p>
            <div className={styles.colorsix}>
              <p className={styles.hexText}>#F2F2FD</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            
          
            <p className={styles.innerSub}>Mascots</p>
            <div>
            <p className={styles.perText}>The users have the option to customize their mascot so that they can feel that there is a personalized companion that is following and guiding them through their mental health journey.</p>
            <div className={styles.masImg}>
              <div className={styles.masText}>
             <Image src={'/images/panda.svg'} alt='logo' width={200} height={200} />
             <p>Panda - Represents peace and friendship </p>
             </div>
             <div className={styles.masText}>
             <Image src={'/images/sloth.svg'} alt='logo' width={200} height={200} />
             <p>Sloth - Represents relaxation and patience </p>
             </div>
             <div className={styles.masText}>
             <Image src={'/images/otter.svg'} alt='logo' width={200} height={200} />
             <p>Otter - Represents kindness and family</p>
             </div>
             <div className={styles.masText}>
             <Image src={'/images/frog.svg'} alt='logo' width={200} height={200} />
             <p>Frog - Represents wisdom and good luck</p>
             </div>
             </div>
             </div>
             <hr className={styles.divider}></hr>
            <p className={styles.innerSub}>Lo-Fi | Hi-Fi</p>
            <div className={styles.fiImg}>
            <Image src={'/images/lofiPhoto.png'} alt='logo' width={550} height={400} />
          <Image src={'/images/hifiPhoto.png'} alt='logo' width={550} height={400} />
          </div>
          </div>
          <hr className={styles.divider}></hr>
          <div className={styles.codingCon}> 
          <p className={styles.innerSub}>Coding</p>
          <div className={styles.codeImg}>
          <Image src={'/images/coding4.png'} alt='logo' width={250} height={900} />
          <Image src={'/images/coding3.png'} alt='logo' width={250} height={490} />
          <Image src={'/images/coding2.svg'} alt='logo' width={300} height={400} />
          </div>

<div className={styles.codeText}>
     <p>Sentiment Analysis</p>
     <p>Sentiment Analysis is an AI-based technology that can determine the emotional undertone of a corpus of text.
Sentiment Analysis inspects the given text and identifies the prevailing emotional opinion within the text, especially to determine a writer's attitude as positive, negative, or neutral. Also called "opinion mining", it identifies and detects subjective information from the input text.
</p>
<p>EdenAI services was used for sentiment analysis. EdenAI does not store data at all, and any data (e.g., journal entries) are transmitted directly back to innersight.</p>
     <p>The data is managed using Google Firebase services. Data is stored in Belgium.</p>
     </div>
          </div>
        </div>
        <hr className={styles.divider}></hr>
        <div id="solution" className={styles.solSection}>
       
            <div className={styles.solText}>
            <p className={styles.solHeader}>Solution</p>
            <p>The ai sentiment analysis which plays a fundamental role  in separating the app from competitors, will pull out key words in order to display prominent feelings and emotions within that journal entry. This feature further assists with analyzing past journal entries.</p>
         <p>The chart pulls the emotions that most commonly show up in the journal entries and displays it for a week, month, or yearly view.</p>
         <p>The recommendations are based off the sentiment analysis and the emotions and key words that were identified. It will then give a recommendation based on that.</p>
          </div>
            <video width={500} height={300} controls>
              <source src={'/images/innersightTechDemo.mp4'} type="video/mp4" />
            </video>
        </div>
        <a className={styles.linkText} href="https://play.google.com/store/apps/details?id=ca.innersightapp.app&pcampaignid=web_share">Visit Beta Testing</a>
        <Footer/>
        </div>
      </main>
    </>
  )
}