import React from 'react'
import SubHero from '../components/project/SubHero'
// import Projects from '../components/project/Projects'
import Subscribe from '../components/Subscribe'
import ProjectBanner from '../components/project/ProjectBanner'
import ProjectBannerR from '../components/project/ProjectBannerR'

import TeamImage from './../../public/images/Team.jpg'
import UnlcoachingImage from './../../public/images/unlcoaching.png'
import FilleDeLaGraceImage from './../../public/images/Fille-de-la-grace2.png'
import FilleDeLaGraceImage1 from './../../public/images/Fille-de-la-grace1.png'
import HomePortfolio from './../../public/images/home-portfolio.png'

export const metadata = {
  title: 'Projects - Andy Ramaroson',
}

const page = () => {
  return (
    <>
      {/* <AnimatedBanner /> */}
      <SubHero
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Projets réalisés"
        title="Dernier ajout"
        image={TeamImage}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />
      <ProjectBannerR
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Site vitrine"
        title="Unlcoaching"
        image={UnlcoachingImage}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />
      <ProjectBanner
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Application web"
        title="school-Unlcoaching"
        image={UnlcoachingImage}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />
      <ProjectBannerR
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Site vitrine"
        title="Lemurian Agency"
        image={HomePortfolio}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />
      <ProjectBanner
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Site vitrine"
        title="Vanille B2B"
        image={FilleDeLaGraceImage1}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />
      <ProjectBannerR
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Site vitrine"
        title="Fille de la grace"
        image={FilleDeLaGraceImage}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />
      {/* <Projects className="pt-10 pb-22" itemsPerPage={50} /> */}
      <Subscribe className="py-16 lg:py-32" />
    </>
  )
}

export default page
