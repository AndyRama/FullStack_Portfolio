import DescriptionCard from './../components/DescriptionCard'
import SubHero from '../components/about/SubHero'
import SubHeroR from '../components/about/SubHeroR'

export const metadata = {
  title: 'Méthodologie et Processus de fonctionnement',
}
export default function Methodologie() {
  return (
    <>
      <SubHero
        className="pt-32"
        subTitle="Mais"
        title="comment ça marche ? "
        image=""
        description="Je développe pour vous, mais surtout
        AVEC vous. Le client est inclus dans toutes les etapes
        du développement. Dégrossir le projet ensemble, valider
        une maquette, tester l'application, nous faire des suggestions
        d'amélioration, intégrer vos données... Je ne vous lâche pas !"
      />
      <DescriptionCard className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <DescriptionCard className=" pt-14 pb-15" />
      <SubHeroR
        className="pt-20"
        subTitle="Mais"
        title="comment ça marche ? "
        description="Je développe pour vous, mais surtout
        AVEC vous. Le client est inclus dans toutes les etapes
        du développement. Dégrossir le projet ensemble, valider
        une maquette, tester l'application, nous faire des suggestions
        d'amélioration, intégrer vos données... Je ne vous lâche pas !"
      />
      {/* Faq */}
      {/* Bloc text */}s
      <SubHero
        className="pt-32"
        subTitle="Comment je fonctionne"
        title="La méthode Agile"
        description="Je suis Andy Ramaroson, un développeur FullStack JS basée
        sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure
        en me basant sur des technologies web modernes. Je suis spécialisé sur le
        langage  JavaScript avec le framework React & NextJs."
      />
      <SubHeroR
        className="pt-32"
        subTitle="Comment je fonctionne"
        title="Méthodologie"
        description="Je suis Andy Ramaroson, un développeur FullStack JS basée
        sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure
        en me basant sur des technologies web modernes. Je suis spécialisé sur le
        langage  JavaScript avec le framework React & NextJs."
      />
    </>
  )
}
