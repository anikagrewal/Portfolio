import Image from "next/image";
import { useState } from "react";
import styles from '@/styles/Home.module.css'
import VisitBtn from "@/components/Atoms/Buttons";


export default function Carousel() {
    const [img, setImg] = useState(0);
    const totalImages = 3; 

    const changeImage = (change) => {
      if (change === "backward") {
        setImg((prevImg) => (prevImg - 1 + totalImages) % totalImages);
      } else if (change === "forward") {
        setImg((prevImg) => (prevImg + 1) % totalImages);
      }
    };

    const imageLinks = ["/caseStudy", "/projects", "/projectTwo"]

    return (
        <>
        <div style={{
            backgroundImage:"url(/carousel-images/" + img + ".svg)",
            width: 861,
            height: 421,
            backgroundSize: 'cover',
        }}>
            <div className={styles.arrows}>
                <Image 
                src={"/images/leftArrow.png"}
                alt={"/images/leftArrow.png"}
                width={75}
                height={70}
                onClick={() => changeImage("backward")}
                />
                <VisitBtn link={imageLinks[img]}/>
                <Image 
                 src={"/images/rightArrow.png"}
                 alt={"/images/rightArrow.png"}
                 width={75}
                 height={70}
                 onClick={() => changeImage("forward")}
                />
                

            </div>
            <div>


</div>
        </div>
        
        
        </>
    )
}