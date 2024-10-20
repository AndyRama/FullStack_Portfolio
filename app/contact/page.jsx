import React from 'react'
import SubHero from '../components/SubHero'
import CardContact from '../components/contact/CardContact'

export const metadata = {
  title: 'Contact Andy Ramaroson',
}
const page = () => {
  return (
    <>
      <SubHero
        className="pt-32 pb-24"
        subTitle="Pour me "
        title="Contacter"
        description="Je suis Andy Ramaroson, un développeur FullStack JS basée
        sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure
        en me basant sur des technologies web modernes. Je suis spécialisé sur le
        langage  JavaScript avec le framework React & NextJs."
        image='/images/bannerLemurian.jpg'
      />
      <CardContact />
    </>
  )
}

export default page
