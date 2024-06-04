import DescriptionCard from './../components/DescriptionCard'
import CardDescriptionR from './../components/CardDescriptionR'
import Subscribe from './../components/Subscribe'
import SubHero from '../components/about/SubHero'

export default function Expertise() {
  return (
    <>
      <SubHero className="pt-32" title="Expertise" subTitle="" />
      <DescriptionCard className=" pt-14 pb-15" />
      <CardDescriptionR className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <CardDescriptionR className=" pt-14 pb-15" />
      <Subscribe className="py-16 pt-64 lg:py-32 " />
    </>
  )
}
