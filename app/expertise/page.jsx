import DescriptionCard from './../components/DescriptionCard'
import CardDescriptionR from './../components/CardDescriptionR'
import Subscribe from './../components/Subscribe'
import SubHero from '../components/about/SubHero'

export const metadata = {
  title: 'Expertise et spécialisation',
}
export default function Expertise() {
  return (
    <>
      <SubHero
        className="pt-32"
        subTitle="Toutes mon"
        title="Expertise"
        description="Je suis Andy Ramaroson, un développeur FullStack JS basée
        sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure
        en me basant sur des technologies web modernes. Je suis spécialisé sur le
        langage  JavaScript avec le framework React & NextJs."
      />
      <DescriptionCard className=" pt-14 pb-15" />
      <CardDescriptionR className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <CardDescriptionR className=" pt-14 pb-15" />
      <Subscribe className="py-16 pt-64 lg:py-32 " />
    </>
  )
}
