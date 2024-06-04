import React from 'react'
import SubHero from '../components/about/SubHero'
import CardContact from '../components/contact/CardContact'

const page = () => {
  return (
    <>
      <SubHero className="pt-32 pb-24" title="Contacter" subTitle="pour me" />
      <CardContact />
    </>
  )
}

export default page
