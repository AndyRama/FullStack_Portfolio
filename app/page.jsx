import Hero from './components/Hero'
import RecentProject from './components/RecentProject'
import RecentBlog from './components/RecentBlog'
import Stats from './components/Stats'
import Client from './components/Client'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'
import DescriptionCard from './components/DescriptionCard'
import HowIworks from './components/HowIworks'
import HowIWorks2 from './components/HowIWorks2'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-22" />
      <DescriptionCard
        className="mt-28 pb-22"
        title="À propos de moi"
        subTitle="quelques mots"
      />
      <HowIworks />
      <Stats />
      <Client className="mt-22 pb-32" />
      <HowIWorks2/>
      <Testimonials />
      <RecentProject className="mt-32 pb-22" />
      <RecentBlog className="pt-14 pb-15 " />
      <Subscribe className="py-16 lg:py-32 " />
    </>
  )
}
