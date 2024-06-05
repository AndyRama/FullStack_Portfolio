import React from 'react'
import SubHero from '../components/about/SubHero'
import Projects from '../components/projects/Projects'

export const metadata = {
  title: 'Projets - Réalisation Andy Ramaroson',
}

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32"
        subTitle="Mes projects"
        title="Récentes réalisation"
        description="Je suis Andy Ramaroson, un développeur FullStack JS basée
        sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure
        en me basant sur des technologies web modernes. Je suis spécialisé sur le
        langage  JavaScript avec le framework React & NextJs."
      />
      <Projects className="pt-0 pb-52" itemsPerPage={6} />
    </>
  )
}

export default page
