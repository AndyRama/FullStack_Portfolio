import React from 'react'
import SubHero from '../components/project/SubHero'
import Subscribe from '../components/Subscribe'
import ProjectBanner from '../components/project/ProjectBanner'
import ProjectBannerR from '../components/project/ProjectBannerR'

import TeamImage from './../../public/images/Team.jpg'
import UnlcoachingImage from './../../public/images/unlcoaching.png'
import schoolUnlcoachingImage from './../../public/images/unlcoaching2.png'
import FilleDeLaGraceImage from './../../public/images/Fille-de-la-grace2.png'
import HomePortfolio from './../../public/images/lemurianV1.png'

export const metadata = {
  title: 'Projects - Andy Ramaroson',
}

const projectsData = [
  {
    Component: ProjectBannerR,
    subTitle: 'Application web',
    title: 'express-depanage-plomberie.fr',
    time: '1 mois 1/2',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: schoolUnlcoachingImage,
    btn1: { href: 'https://www.unlcoaching.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'lemurian.fr',
    time: '1 mois',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: HomePortfolio,
    contentType: 'project',
    btn1: { href: 'https://portfolio-eta-three-93.vercel.app/' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'Unlcoaching.com',
    time: 'en cours',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: UnlcoachingImage,
    contentType: 'project',
    btn1: { href: 'https://www.unlcoaching.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'Fille-de-la-grace.com',
    time: 'en cours',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: FilleDeLaGraceImage,
    contentType: 'project',
    btn1: { href: 'https://www.andyramaroson.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'i-doctor.fr',
    time: 'en cours',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: UnlcoachingImage,
    btn1: { href: 'https://www.unlcoaching.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'E-commerce',
    title: 'HatGasy.com',
    time: 'en cours',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: FilleDeLaGraceImage,
    contentType: 'project',
    btn1: { href: 'https://www.andyramaroson.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },

]

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32 lg:mb-22 xl:mb-32"
        subTitle="Dernier ajout"
        title="Projets réalisés"
        image={TeamImage}
        description={`J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                      les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                      esthétiquement plaisantes.`}
      />

      {projectsData.map((project, index) => {
        const { Component, ...props } = project
        return (
          <Component
            key={index}
            className="pt-32 lg:mb-22 xl:mb-32"
            {...props}
          />
        )
      })}

      <Subscribe className="py-16 lg:py-32" />
    </>
  )
}

export default page
