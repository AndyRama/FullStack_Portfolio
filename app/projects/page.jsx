import React from 'react'
import SubHero from '../components/project/SubHero'
import Projects from '../components/project/Projects'
import Subscribe from '../components/Subscribe'

export const metadata = {
  title: 'Projects - Andy Ramaroson',
}

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32 mb-32"
        subTitle="Projets réalisés"
        title="Dernier ajout"
        description="Ma veille technologique se concentre principalement sur le langage JavaScript. Je suis également les évolutions des frameworks populaires comme React et NextJS, en explorant les nouvelles fonctionnalités, les meilleures pratiques
        et les patterns de conception émergents que je partage au travers de ce blog."
      />

      <Projects className="pt-10 pb-32" itemsPerPage={50} />
      <Subscribe className="py-16 lg:py-32" />
    </>
  )
}

export default page
