import React from 'react'
import SubHero from '../components/project/SubHero'
import Projects from '../components/project/Projects'
import Subscribe from '../components/Subscribe'
// import AnimatedBanner from '../components/AnimatedBanner'

export const metadata = {
  title: 'Projects - Andy Ramaroson',
}

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Projets réalisés"
        title="Dernier ajout"
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />

      <Projects className="pt-10 pb-32" itemsPerPage={50} />
      <Subscribe className="py-16 lg:py-32" />
      {/* <AnimatedBanner /> */}
    </>
  )
}

export default page
