import Hero from './../components/Hero'
import DescriptionCard from './../components/DescriptionCard'
import CardDescriptionR from './../components/CardDescriptionR'
import Subscribe from './../components/Subscribe'

export default function Expertise() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-0 lg-pb:10" />
      <DescriptionCard className=" pt-14 pb-15" />
      <CardDescriptionR className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <CardDescriptionR className=" pt-14 pb-15" />
      <Subscribe className="py-16 pt-64 lg:py-32 " />
    </>
  )
}
