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
