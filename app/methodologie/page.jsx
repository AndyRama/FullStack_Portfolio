import DescriptionCard from './../components/DescriptionCard'
import SubHero from '../components/SubHero'
// import SubHeroR from '../components/about/SubHeroR'

export const metadata = {
  title: 'Méthodologie et Processus de fonctionnement',
}
export default function Methodologie() {
  return (
    <>
      <SubHero
        className="pt-32"
        subTitle="Mais comment"
        title="ça marche ? "
        image=""
        description="Je développe pour vous, mais surtout
        AVEC vous. Le client est inclus dans toutes les etapes
        du développement. Dégrossir le projet ensemble, valider
        une maquette, tester l'application, nous faire des suggestions
        d'amélioration, intégrer vos données... Je ne vous lâche pas !"
      />
    </>
  )
}
