import Link from 'next/link'
import React from 'react'
import SubHero from '@/app/components/projects/SubHero'
import Projects from '../components/projects/Projects'
import Subscribe from '@/app/components/Subscribe'
import { allProjects } from 'contentlayer/generated'

export const metadata = {
  title: 'Projects - Lemurian by Andy Ramaroson',
}

const page = ({ params }) => {
  return (
    <>
      <SubHero
        className="pt-32 pb-10 capitalize"
        title="Projects"
        subTitle="Categories"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Projects
        className="pb-32"
        archive={true}
        params={params}
        itemsPerPage={50}
      />
      <Subscribe className="py-16 pt-32 lg:py-32" />
    </>
  )
}

export default page
