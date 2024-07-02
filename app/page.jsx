import Hero from './components/Hero'
import RecentProject from './components/RecentProject'
import PricingDetails from './components/prestation/PricingDetails'
import RecentBlog from './components/RecentBlog'
import Stats from './components/Stats'
import Client from './components/Client'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'
import DescriptionCard from './components/DescriptionCard'
import AnimatedBanner from './components/AnimatedBanner'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-20" />
      <DescriptionCard
        className="mt-28 pb-22"
        title="À propos de moi"
        subTitle="quelques mots"
      />
      <RecentProject className="mt-28 pb-22" />
      <Client className="mt-28 pb-22" />
      <Testimonials />
      <Stats />
      <PricingDetails />
      <RecentBlog className="pt-14 pb-15 " />
      <Subscribe className="py-16 lg:py-32 " />
      <AnimatedBanner />
    </>
  )
}
