import Hero from './components/Hero'
import RecentProject from './components/RecentProject'
// import Carousel from './components/Carousel'
import RecentBlog from './components/RecentBlog'
import Client from './components/Client'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'
import DescriptionCard from './components/DescriptionCard'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-20" />
      <DescriptionCard className="mt-28 pt-22" />
      <Client className="mt-28 pt-22" />
      <RecentProject className="mt-20 pb-20" />
      <Testimonials className="mt-20" />
      <RecentBlog className="pb-15 lg:pb-32" />
      <Subscribe className="py-16 pt-20 lg:py-32 " />
    </>
  )
}
