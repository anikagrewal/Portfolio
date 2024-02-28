import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import NavBar from '@/components/Molecules/NavBar'
import Footer from '@/components/Molecules/Footer'
import CaseHeader from '@/components/Molecules/CaseHeader'
import ScrollTop from '@/components/Atoms/ScrollTop'


export default function CaseStudy() {
  return (
    <>
      
      <main className={styles.main}>
     <NavBar />
       <CaseHeader/>
       
       <div>
       <h2 className={styles.desHeader}>Challenge</h2>
       <div className={styles.test}>
        <div className={styles.probSection}>
            <p>The project hopes to address the challenge of analyzing numerous journal entries to find correlations between the individual's activites and their mental health symptoms. Aiming to help individual's actively avoid or increase activities to improve their well-being.</p>
        <hr className={styles.perLine}></hr>
          <div className={styles.percentage}>
            <p className={styles.percent}>24%</p>
            <p>In just three years, drug claims in Canada for treating mental disorders among those aged 30 and under soared by a staggering 24%</p>
            </div>
            <hr className={styles.perLine}></hr>
        </div>
        </div>
        <div className={styles.slothSide}>
          <div className={styles.desBlob}>
          <Image src={'/images/blob.svg'} alt='logo' width={700} height={700} />
          </div>
            <div className={styles.desSloth}>
          <Image src={'/images/slothHanging.svg'} alt='logo' width={500} height={500} />
          </div>
          </div>
          
          <p className={styles.innerSub}>Research</p>
            <div className={styles.research}>
            
            <p>Findings from interview questions and secondary research:</p>
            <div className={styles.find}>
              <div>
              <p className={styles.resSub}>Pyschological Barriers</p>
              <div className={styles.resLiCon}>
              <hr className={styles.resLine}></hr>
              <ul className={styles.resList1}>
              <li>Motivation & consistency</li>
              <li>Perceived usefulness</li>
              <li>Repetition</li>
              <li>Emotional challenges</li>
              <li>Writing challenges</li>
              <li>Time constraints</li>
              <li>Self-criticism & hesitation</li>
              <li>Lack of direction</li>
              </ul>
              </div>
              </div>
              <div>
              <p className={styles.resSub}>Technical/Functional Issues</p>
              <div className={styles.resLiCon}>
              <hr className={styles.resLine1}></hr>
              <ul className={styles.resList1}>
              <li>Lack of customization</li>
              <li>Simplistic features</li>
              <li>Receiving same generated responses</li>
              <li>Aesthetic concerns</li>
              </ul>
              </div>
              </div>
              <div>
              <p className={styles.resSub}>Privacy Concerns</p>
              <div className={styles.resLiCon}>
              <hr className={styles.resLine2}></hr>
              <ul className={styles.resList1}>
              <li>Data sharing through AI</li>
              </ul>
              </div>
              </div>
         
            </div>
          </div>
          
            <p className={styles.innerSub}>Persona</p>
            <div className={styles.persona}>
              <div className={styles.perTxtCon}>
            <p className={styles.perText}>Amaya, is a 24 year old BCIT student who has been diagnosed with anxiety and depression. She has been consistently journaling her thoughts and emotions traditionally with a pen and paper. </p>
            </div>
            <div className={styles.perRight}>
           <div className={styles.perImg}>
            <Image className={styles.imgStyle} src={'/images/persona.png'} alt='logo' width={710} height={535}/>
           </div> 
           </div>
            </div>
   
          <p className={styles.innerSub}>Site Map</p>
            <div className={styles.site}>
            <div className={styles.siteImg}>
            <Image src={'/images/sitemap.png'} alt='logo' width={600} height={620} />
            </div>
            <p className={styles.sitetxt}>The site map outlines the key pages for the MVP's. There are three different routes. No saved journal entry, one saved journal entry, and multiple saved journal entries </p>
            </div>
            <h2 className={styles.desHeader}>Design Process</h2>

            <p className={styles.innerSub}>Logo</p>
            <div className={styles.logoSec}>
              <div className={styles.logoTop}>
            <div className={styles.logoCase}>
            <Image src={'/images/oldLogo1.svg'} alt='logo' width={225} height={225} />
            <p>First Iteration of Logo</p>
            <p>This logo was meant to reflect the inward feelings and emotions of individual's when journaling</p>
            </div>
            <div className={styles.logoCase}>
            <Image src={'/images/oldLogo2.svg'} alt='logo' width={225} height={225} />
            <p>Second Iteration of Logo</p>
            <p>This logo took in the new color scheme.</p>
            </div>
            </div>
            <div className={styles.logoCase2}>
            <Image src={'/images/newLogo.svg'} alt='logo' width={500} height={500} />
            <p>Final Design of Logo</p>
            <p>This redesign incorporated the new color scheme as well as took a positive and uplifiting tone.</p>
            </div>
            </div>
        
            <p className={styles.innerSub}>Colour</p>
            <div className={styles.persona}>
            <p className={styles.perTextColor}>Monochromatic Purple - Emphasize the feeling of calmness. The purples are cooler with a little bit of contrast for one or two shades so that the loud colours aren't as evoked for the user and potentially stress them out when using the application.</p>
           <div className={styles.colorCon}>
            <div className={styles.colorRow}>
              <div className={styles.colBox}>
            <p>#525585</p>
            <div className={styles.colorone}>
              
            </div>
            </div>
            <div className={styles.colBox}>
            <p>#6164C3</p>
            <div className={styles.colortwo}>
             
            </div>
            </div>
            <div className={styles.colBox}>
            <p>#88898C</p>
            <div className={styles.colorthree}>
              
            </div>
            </div>
            </div>
            <div className={styles.colorRow}>
            <div className={styles.colBox}>
            <p>#C5C7F7</p>
            <div className={styles.colorfour}>
             
            </div>
            </div>
          
            <div className={styles.colBox}>
            <p>#D5D7FF</p>
            <div className={styles.colorfive}>
            
            </div>
            </div>
            <div className={styles.colBox}>
            <p>#F2F2FD</p>
            <div className={styles.colorsix}>
             
            </div>
            </div>
            </div>
            </div>
            </div>
            
          
            <p className={styles.innerSub}>Mascots</p>
          
            <p className={styles.masPara}>The users have the option to customize their mascot so that they can feel that there is a personalized companion that is following and guiding them through their mental health journey.</p>
            <div className={styles.masImg}>
              <div className={styles.masText}>
             <Image src={'/images/panda.svg'} alt='logo' width={200} height={200} />
             <p>Panda</p>
             <p>Represents peace and friendship </p>
             </div>
             <div className={styles.masText}>
             <Image src={'/images/sloth.svg'} alt='logo' width={200} height={200} />
            <p>Sloth</p>
             <p>Represents relaxation and patience </p>
             </div>
             <div className={styles.masText}>
             <Image src={'/images/otter.svg'} alt='logo' width={200} height={200} />
            <p>Otter</p>
             <p>Represents kindness and family</p>
             </div>
             <div className={styles.masText}>
             <Image src={'/images/frog.svg'} alt='logo' width={200} height={200} />
             <p>Frog</p>
             <p>Represents wisdom and good luck</p>
             </div>
             </div>
        
            <p className={styles.innerSub}>Lo-Fi | Hi-Fi</p>
            <div className={styles.fiImg}>
            <Image className={styles.imgborder} src={'/images/lofiPhoto.png'} alt='logo' width={700} height={500} />
          <Image className={styles.imgborder} src={'/images/hifiPhoto.png'} alt='logo' width={700} height={500} />
          </div>
    
         
          <p className={styles.innerSub}>Coding</p>
          <div className={styles.codeImg}>
            <div>
          <Image  className={styles.codeborder} src={'/images/analysis.svg'} alt='logo' width={300} height={600} />
          <p className={styles.codeTxt}>The ai sentiment analysis which plays a fundamental role  in separating the app from competitors, will pull out key words in order to display prominent feelings and emotions within that journal entry. This feature further assists with analyzing past journal entries.</p>
          </div>
          <div className={styles.code2}>
          <Image  className={styles.codeborder} src={'/images/chart.svg'} alt='logo' width={300} height={600} />
          <p className={styles.codeTxt}>The chart pulls the emotions that most commonly show up in the journal entries and displays it for a week, month, or yearly view.</p>
          </div>
          <div className={styles.code3}>
          <Image  className={styles.codeborder} src={'/images/recom.svg'} alt='logo' width={300} height={600} />
          <p className={styles.codeTxt}>The recommendations are based off the sentiment analysis and the emotions and key words that were identified. It will then give a recommendation based on that.</p>
          </div>
          </div>
       


     <p className={styles.innerSub}>Sentiment Analysis | Privacy Concerns</p>
     <div className={styles.privCon}>
     <ul className={styles.privacy}>
      <li className={styles.privacyli}>Sentiment Analysis is an AI-based technology that can determine the emotional undertone of a corpus of text. 
        Sentiment Analysis inspects the given text and identifies the prevailing emotional opinion within the text, 
        especially to determine a writer's attitude as positive, negative, or neutral. Also called "opinion mining", 
        it identifies and detects subjective information from the input text.</li>
      <li className={styles.privacyli}>EdenAI services was used for sentiment analysis. EdenAI does not store data at all, and any data 
        (e.g., journal entries) are transmitted directly back to innersight.</li>
      <li className={styles.privacyli}>The data is managed using Google Firebase services, which stores the data in Belgium.</li>
     </ul>
     <Image src={'/images/Mascots.svg'} alt='logo' width={200} height={400}/>
     </div>
         
     <h2 className={styles.desHeader}>Solution</h2>
        <div className={styles.solSection}>
           <p className={styles.solTxt}>InnerSight solves the problem by utilizing AI to analyize and generate the emotional undertone of all entries. Then by recording the data, InnerSight generates a visually pleasing pie chart for individuals to be able to see their overall conditions of their emotions at a quick glance. Lastly, InnerSight then provides the next step that individuals can take through personalized recommendations. </p>
            <video width={600} height={400} controls>
              <source src={'/images/innersightTechDemo.mp4'} type="video/mp4" />
            </video>
        </div>
        <div className={styles.casebtn}>
        <a className={styles.linkText} href="https://play.google.com/store/apps/details?id=ca.innersightapp.app&pcampaignid=web_share">
       <button className={styles.btn}>Visit Live Beta</button>
        </a>
        </div>
        <div className={styles.bottom}>
        <div className={styles.arrowCon}>
        <Link href="/projects">
          <div className={styles.arrowCon}>
         <p>Development</p>
          <hr className={styles.arrow}></hr>
          </div>
        </Link>
        </div>
        </div>
        
        <ScrollTop/>
        <Footer/>
        </div>

      </main>
    </>
  )
}