import React from 'react'
import SubHero from '../components/project/SubHero'
import Subscribe from '../components/Subscribe'
import ProjectBanner from '../components/project/ProjectBanner'
import ProjectBannerR from '../components/project/ProjectBannerR'

import TeamImage from './../../public/images/Team.jpg'
import Express from './../../public/images/Express4.png'
import lemurian from './../../public/images/lemurian-hero.png'
import UnlcoachingImage from './../../public/images/unlcoaching.png'
import schoolUnlcoachingImage from './../../public/images/unlcoaching2.png'
import FilleDeLaGraceImage from './../../public/images/Fille-de-la-grace2.png'
import Wealth from './../../public/images/WealthHealth_1.png'
import Idoctor from './../../public/images/i-doctor.png'
import MatsudataDash from './../../public/images/matsuda2.png'
import MatsudaStore from './../../public/images/matsuda1.png'

export const metadata = {
  title: 'Projects - Andy Ramaroson',
}

const projectsData = [
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'I-doctor.fr',
    time: 'En cours',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: Idoctor,
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
    time: '1 mois',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: UnlcoachingImage,
    btn1: { href: 'https://express-depannage-plomberie.vercel.app/' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'Express-plomberie.com',
    time: '10 jrs',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: Express,
    btn1: { href: 'https://express-depannage-plomberie.vercel.app/' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'Fille-de-la-grace.com',
    time: '1 mois',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: FilleDeLaGraceImage,
    contentType: 'project',
    btn1: { href: '#' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Site vitrine',
    title: 'Lemurian.fr',
    time: '1 mois',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: lemurian,
    contentType: 'project',
    btn1: { href: 'https://portfolio-eta-three-93.vercel.app/' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'School-Unlcoaching.com',
    time: '1 mois',
    mission: 'Client final',
    developpement: 'Full-Stack',
    image: schoolUnlcoachingImage,
    contentType: 'project',
    btn1: { href: 'https://www.unlcoaching.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'E-commerce',
    title: 'Matsuda-Store',
    time: '1 mois',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: MatsudaStore,
    contentType: 'project',
    btn1: { href: 'https://www.andyramaroson.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'E-commerce',
    title: 'Matsuda-Dashboard',
    time: '1 mois',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: MatsudataDash,
    contentType: 'project',
    btn1: { href: 'https://www.andyramaroson.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Application web',
    title: 'WealthHealth',
    time: '20 jrs',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: Wealth,
    contentType: 'project',
    btn1: { href: 'https://www.andyramaroson.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBannerR,
    subTitle: 'Site vitrine',
    title: 'AndynB.fr',
    time: '1 mois',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: FilleDeLaGraceImage,
    contentType: 'project',
    btn1: { href: 'https://www.andyramaroson.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'Application web',
    title: 'ArgentBank',
    time: '20 jrs',
    mission: 'Side Project',
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
    subTitle: 'E-commerce',
    title: 'Kasa',
    time: '1 mois',
    mission: 'Side Project',
    developpement: 'Full-Stack',
    image: FilleDeLaGraceImage,
    contentType: 'project',
    btn1: { href: 'https://www.andyramaroson.com' },
    description: `J'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences et d'explorer 
                  les dernières technologies du web. Mon portfolio reflète mon engagement envers la création d'interfaces utilisateur intuitives et 
                  esthétiquement plaisantes.`,
  },
  {
    Component: ProjectBanner,
    subTitle: 'E-commerce',
    title: 'SportSee',
    time: '20 jrs',
    mission: 'Side Project',
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
    subTitle: 'E-commerce',
    title: 'OhMyfood',
    time: '1 mois',
    mission: 'Side Project',
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
