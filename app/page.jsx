import Hero from './components/Hero'
import RecentProject from './components/RecentProject'
import PricingDetails from './components/prestation/PricingDetails'
import RecentBlog from './components/RecentBlog'
import Stats from './components/Stats'
import Client from './components/Client'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'
import DescriptionCard from './components/DescriptionCard'
import HowIworks from './components/HowIworks'
import HowIworksV2 from './components/HowIworksV2'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-20" />
      <DescriptionCard
        className="mt-28 pb-22"
        title="À propos de moi"
        subTitle="quelques mots"
      />
      {/* <HowIworks /> */}
      <HowIworksV2 />
      <RecentProject className="mt-28 pb-22" />
      <Client className="mt-22 pb-22" />
      <Testimonials />
      <Stats />
      {/* <PricingDetails /> */}
      <RecentBlog className="pt-14 pb-15 " />
      <Subscribe className="py-16 lg:py-32 " />
    </>
  )
}
