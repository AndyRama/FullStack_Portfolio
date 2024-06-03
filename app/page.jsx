import Hero from './components/Hero'
// import Carousel from './components/Carousel'
import CardDescriptionL from './components/CardDescriptionL'
import RecentBlog from './components/RecentBlog'
// import WhyUs from './components/WhyUs'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-0 lg-pb:10" />
      {/* <Carousel /> */}
      <CardDescriptionL className=" pt-14 pb-15" />
      {/* <WhyUs /> */}
      <RecentBlog className="pt-14 pb-15 lg:pb-32" />
      <Subscribe className="py-16 pt-64 lg:py-32 " />
      <Testimonials />
    </>
  )
}
