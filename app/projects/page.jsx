import React from 'react'
import SubHero from '../components/project/SubHero'
// import Projects from '../components/project/Projects'
import Subscribe from '../components/Subscribe'
import ProjectBanner from '../components/project/ProjectBanner'
import ProjectBannerR from '../components/project/ProjectBannerR'
import AnimatedBanner from '../components/AnimatedBanner'

import TeamImage from './../../public/images/Team.jpg'
import UnlcoachingImage from './../../public/images/unlcoaching.png'
import FilleDeLaGraceImage from './../../public/images/Fille-de-la-grace2.png'
// import FilleDeLaGraceImage1 from './../../public/images/Fille-de-la-grace1.png'
import HomePortfolio from './../../public/images/home-portfolio.png'

export const metadata = {
  title: 'Projects - Andy Ramaroson',
}

const page = () => {
  return (
    <>
      <AnimatedBanner />
      <SubHero
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Dernier ajout"
        title="Projets réalisés"
        image={TeamImage}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />

      <ProjectBannerR
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Application web"
        title="Unlcoaching.app"
        time="1 mois 1/2"
        mission="Client final"
        developpement="Full-Stack"
        image={UnlcoachingImage}
        btn1={{ href: 'https://www.unlcoaching.com' }}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />

      <ProjectBanner
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Site vitrine"
        title="Andyramaroson.com"
        time="1 mois"
        image={HomePortfolio}
        mission="Side Project"
        developpement="Full-Stack"
        btn1={{ href: 'https://portfolio-eta-three-93.vercel.app/' }}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />

      <ProjectBannerR
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Site vitrine"
        title="Unlcoaching.com"
        time="en cours"
        mission="Client final"
        developpement="Full-Stack"
        image={UnlcoachingImage}
        btn1={{ href: 'https://www.unlcoaching.com' }}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      />

      <ProjectBanner
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Site vitrine"
        title="Fille-de-la-grace.com"
        time="en cours"
        mission="Client final"
        developpement="Full-Stack"
        image={FilleDeLaGraceImage}
        btn1={{ href: 'https://www.andyramaroson.com' }}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
          les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
          esthétiquement plaisantes."
      />

      {/* <ProjectBannerR
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="E-commerce"
        title="HatGasy.com"
        time="En cours"
        mission="Client final"
        developpement="Full-Stack"
        image={FilleDeLaGraceImage1}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
        les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
        esthétiquement plaisantes."
      /> */}

      {/* <ProjectBanner
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Site vitrine"
        title="i-doctor.fr"
        time="Août 2024"
        mission="Client final"
        developpement="Full-Stack"
        image={FilleDeLaGraceImage}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
          les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
          esthétiquement plaisantes."
      /> */}

      {/* <ProjectBannerR
        className="pt-32 lg:mb-22 xl:mb-32 "
        subTitle="Site vitrine"
        title="AndyNb.fr"
        time="Sept 2024"
        mission="Client final"
        developpement="Full-Stack"
        image={FilleDeLaGraceImage1}
        description="J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
          les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
          esthétiquement plaisantes."
      /> */}

      {/* <Projects className="pt-10 pb-22" itemsPerPage={50} /> //old version  */}
      <Subscribe className="py-16 lg:py-32" />
    </>
  )
}

export default page
