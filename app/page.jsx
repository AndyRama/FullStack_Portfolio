// import Hero from './components/Hero'
import CardDescriptionL from './components/CardDescriptionL'
import CardDescriptionR from './components/CardDescriptionR'
import CardGridImage from './components/CardGridImage'
import CardDescription from './components/CardDescription'
import RecentBlog from './components/RecentBlog'
import CardProgram from './components/CardProgram'
import Subscribe from './components/Subscribe'
import Carousel from './components/Carousel'

export default function Home() {
  return (
    <>
      {/* <Hero className="pt-32 md:pt-22 pb-0 lg-pb:10" /> */}
      <Carousel />
      <CardDescriptionL className=" pt-14 pb-15" />
      {/* <CardDescriptionR className=" relative pt-14 pb-15" /> */}
      {/* <CardGridImage /> */}
      {/* <CardDescription className="pb-15 " /> */}
      <RecentBlog className="pt-14 pb-15 lg:pb-32" />
      <CardProgram />
      <Subscribe className="py-16 pt-64 lg:py-32 " />
    </>
  )
}
