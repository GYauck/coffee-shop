import { useState } from 'react'
import style from "./aboutUs.module.css"
import data from "../../data.json";

const AboutUs = () => {
  const [icons] = useState(data.aboutUs.icons)
  const [cards] = useState(data.aboutUs.cards)
  console.log(window.innerWidth)
  return (
    <div className={style.aboutUsContainer}>
      <div className={style.aboutUsHeader}>
        <div className={style.textContainer}>
        <h1 className={style.headerH1}>About Us</h1>
        <p className={style.headerDescription}>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
        </div>
      </div>
      <div className={style.ourCommitmentContainer}>
        <div className={style.ourCommitmentImg}></div>
      <div className={style.ourCommitmentText}>
      <h1 className={style.ourCommitmentH1}>Our commitmend</h1>
      <p className={style.ourCommitmentDescription}>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
      </div>
      </div>
      <div className={style.qualityContainer}>
        <div className={style.qualityBackground}></div>
        <div className={style.qualityText}>
          <h1 className={style.qualityH1}>Uncompromising quality</h1>
          <p className={style.qualityDescription}>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>
        <div className={style.qualityImg}></div>
      </div>
      <div className={style.headquartersContainer}>
        <h1 className={style.headquartersH1}>Our headquarters</h1>
        <div className={style.headquartersGrid}>
            {cards.map((card, index) => (
              <div className={style.headquartersCard} key={index}>
              <img src={icons['illustration-uk']} alt="" />
              <h1 className={style.cardH1}>{card.name}</h1>
              <p className={style.cardText}>{card.adress}</p>
              <p className={style.cardText}>{card.city}</p>
              <p className={style.cardText}>{card.postalCode}</p>
              <p className={style.cardText}>{card.phone}</p>
              </div>
            ))}
            
          
        </div>
      </div>
    </div>
  )
}

export default AboutUs