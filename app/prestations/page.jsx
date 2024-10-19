import React from 'react'
import SubHero from '../components/SubHero'
import PricingDetails from '../components/prestation/PricingDetails'
import Subscribe from '../components/Subscribe'
import Testimonials from '../components/Testimonials'
import AnimatedBanner from '../components/AnimatedBanner'
// import Pricing2 from '../components/Pricing2'
// import HeroSection from '../components/HeroSection'
// import HowIWorks2 from '../components/HowIWorks2'

export const metadata = {
  title: 'Prestations - Réaliser par Andy Ramaroson',
}
const page = () => {
  return (
    <>
      <AnimatedBanner />
      {/* <HeroSection/> */}
      {/* <Pricing2/> */}
      {/* <HowIWorks2/> */}
      <SubHero
        className="pt-32"
        subTitle="mes services"
        title="Prestations"
        description="Je suis Andy Ramaroson, un développeur FullStack JS basée
        sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure
        en me basant sur des technologies web modernes. Je suis spécialisé sur le
        langage  JavaScript avec le framework React & NextJs."
      />
      <PricingDetails />
      <Testimonials />
      <Subscribe className="py-16 lg:py-32" />
    </>
  )
}

export default page
