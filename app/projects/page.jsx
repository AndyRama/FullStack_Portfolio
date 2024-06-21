import React from 'react'
import SubHero from '../components/about/SubHero'
import SubHeroR from '../components/about/SubHeroR'
import Projects from '../components/projects/Projects'
import Subscribe from '../components/Subscribe'
// import Portfolio from '../components/Portfolio'

export const metadata = {
  title: 'Project - Lemurian by Andy Ramaroson',
}

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32 lowercase"
        subTitle="Mes dernierers réalisations"
        title="Projects récents"
        description="Je suis Andy Ramaroson, un développeur FullStack JS basée
        sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure
        en me basant sur des technologies web modernes. Je suis spécialisé sur le
        langage  JavaScript avec le framework React & NextJs."
      />
    </>
  )
}

export default page
