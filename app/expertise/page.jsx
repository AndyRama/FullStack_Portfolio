import Hero from './../components/Hero'
import CardDescriptionL from './../components/CardDescriptionL'
import CardDescriptionR from './../components/CardDescriptionR'
import Subscribe from './../components/Subscribe'

export default function Expertise() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-0 lg-pb:10" />
      <CardDescriptionL className=" pt-14 pb-15" />
      <CardDescriptionR className=" pt-14 pb-15" />
      <CardDescriptionL className=" pt-14 pb-15" />
      <CardDescriptionR className=" pt-14 pb-15" />
      <Subscribe className="py-16 pt-64 lg:py-32 " />
    </>
  )
}
