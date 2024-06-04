import React from 'react'
import SubHero from './../components/about/SubHero'
import PricingPack from '../components/prestation/PricingPack'
import PricingDetails from '../components/prestation/PricingDetails'
import Subscribe from '../components/Subscribe'
import Testimonials from '../components/Testimonials'

export const metadata = {
  title: 'Unlcoaching by Jeremy Prat',
}
const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Prestations" subTitle="" />
      <PricingPack />
      <PricingDetails />
      <Testimonials />
      <Subscribe className="py-16 lg:py-32" />
    </>
  )
}

export default page
