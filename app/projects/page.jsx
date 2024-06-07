import React from 'react'
import SubHero from '../components/about/SubHero'
import Projects from '../components/projects/Projects'
import Subscribe from '../components/Subscribe'

export const metadata = {
  title: 'Project - Lemurian by Andy Ramaroson',
}

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32"
        subTitle="Mes dernierers réalisations"
        title="Projects récents"
        description="Je suis Andy Ramaroson, un développeur FullStack JS basée
        sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure
        en me basant sur des technologies web modernes. Je suis spécialisé sur le
        langage  JavaScript avec le framework React & NextJs."
      />
      <Projects className="pt-10 pb-52" itemsPerPage={50} />
      <Subscribe className="py-16 lg:py-32" />
    </>
  )
}

export default page
