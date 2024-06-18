import DescriptionCard from './../components/expertise/DescriptionCard'
import DescriptionCardR from './../components/expertise/DescriptionCardR'
import Subscribe from './../components/Subscribe'
import SubHero from '../components/expertise/SubHero'

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
        description=" Je suis un développeur web dévoué, animé par la volonté de créer des expériences 
        utilisateur exceptionnelles. Mon expertise couvre l'ensemble du processus de développement, 
        depuis la conception initiale jusqu'à la mise en ligne et l'optimisation continue. Je mets un point
        d'honneur à rester à la pointe des dernières technologies et tendances du web pour offrir des solutions 
        innovantes et adaptées aux besoins de mes clients."
      />
      <DescriptionCardR
        className=" pt-14 pb-15"
        img="/images/desktop.jpg"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Amet non nihil tenetur est minima, molestiae, laborum animi eum qui quos
         beatae debitis, molestias veniam voluptatibus itaque inventore perspiciatis
         ea aut."
      />
      <DescriptionCard
        className=" pt-14 pb-15"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Amet non nihil tenetur est minima, molestiae, laborum animi eum qui quos
         beatae debitis, molestias veniam voluptatibus itaque inventore perspiciatis
         ea aut."
      />
      <DescriptionCardR
        className=" pt-14 pb-15"
        img="/images/desktop1.jpg"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Amet non nihil tenetur est minima, molestiae, laborum animi eum qui quos
         beatae debitis, molestias veniam voluptatibus itaque inventore perspiciatis
         ea aut."
      />
      <DescriptionCard
        className=" pt-14 pb-15"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Amet non nihil tenetur est minima, molestiae, laborum animi eum qui quos
         beatae debitis, molestias veniam voluptatibus itaque inventore perspiciatis
         ea aut."
      />
      <DescriptionCardR
        className=" pt-14 pb-15"
        img="/images/desktop.jpg"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Amet non nihil tenetur est minima, molestiae, laborum animi eum qui quos
         beatae debitis, molestias veniam voluptatibus itaque inventore perspiciatis
         ea aut."
      />
      <Subscribe className="py-16 pt-64 lg:py-32 " />
    </>
  )
}
