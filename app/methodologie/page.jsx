import DescriptionCard from './../components/DescriptionCard'
import DescriptionCardR from './../components/DescriptionCardR'
import SubHero from '../components/about/SubHero'

export const metadata = {
  title: 'Méthodologie et Processus de fonctionnement',
}
export default function Methodologie() {
  return (
    <>
      <SubHero
        className="pt-32"
        subTitle="Comment je fonctionne"
        title="Méthodologie"
        description="Je suis Andy Ramaroson, un développeur FullStack JS basée
        sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure
        en me basant sur des technologies web modernes. Je suis spécialisé sur le
        langage  JavaScript avec le framework React & NextJs."
      />
      <DescriptionCard className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
    </>
  )
}
