import Hero from './components/Hero'
import RecentProject from './components/RecentProject'
import RecentBlog from './components/RecentBlog'
import Stats from './components/Stats'
import Client from './components/Client'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'
import DescriptionCard from './components/DescriptionCard'
import HowIWorks2 from './components/HowIWorks2'
import SolutionsTechniques from './components/SolutionsTechniques'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-22" />
      <DescriptionCard
        className="mt-28 pb-22"
        title="À propos de moi"
        subTitle="quelques mots"
      />
      <HowIWorks2/>
      <Stats />
      <Client className="mt-22 pb-8" />
      <RecentProject className="mt-32 pb-22" />
      <SolutionsTechniques/>
      <Testimonials/>
      <RecentBlog className="pt-14 pb-15 " />
      <Subscribe className="py-16 lg:py-32 " />
    </>
  )
}
