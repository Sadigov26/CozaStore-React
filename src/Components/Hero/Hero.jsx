import React from 'react'
import style from './Hero.module.css'


const Hero = () => {
  return (
    <div>
      <section className={style.hero}>
        <div className={style.containerHero}>
            <p>Men New-Season</p>
            <h1>New arrivals</h1>
            <button>SHOP NOW</button>
        </div>
      </section>
    </div>
  )
}

export default Hero
