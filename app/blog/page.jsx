import React from 'react'
import SubHero from '../components/blog/SubHero'
import Posts from '../components/blog/Posts'
import Subscribe from '../components/Subscribe'

export const metadata = {
  title: 'Blogs - Unlcoaching by Jérémy Prat',
}

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32"
        subTitle="Mon blog"
        title="Dernier articles"
        description="Je suis Andy Ramaroson, un développeur FullStack JS basée
        sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure
        en me basant sur des technologies web modernes. Je suis spécialisé sur le
        langage  JavaScript avec le framework React & NextJs."
      />
      <Posts className="pt-10 pb-52" itemsPerPage={50} />
      <Subscribe className="py-16 lg:py-32" />
    </>
  )
}

export default page
