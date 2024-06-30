import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiOutlineTerminal } from 'react-icons/hi'
import { HiOutlineTemplate } from 'react-icons/hi'
import { TbBrandNextjs } from 'react-icons/tb'
import { BiSolidGrid } from 'react-icons/bi'
import { HiSparkles } from 'react-icons/hi'
import { GrReactjs } from 'react-icons/gr'
import { LuWrench } from 'react-icons/lu'

const iconMappingBlog = {
  icon1: (
    <BiSolidGrid className="mt-0 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon2: (
    <TbBrandNextjs className="mt-0 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon3: (
    <GrReactjs className="mt-0 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon4: (
    <HiSparkles className="mt-0 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon5: (
    <HiOutlineTerminal className="mt-0 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon6: (
    <HiOutlineTemplate className="mt- mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
}

const BtnCategoriesContentBlog = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      title1: 'Tous les articles',
      icon1: 'icon1',
      btn1: {
        href: '/blog',
        label: 'Tous les articles',
      },
      title2: 'NextJs',
      icon2: 'icon2',
      btn2: {
        href: '/blog/categories/nextjs',
        label: 'NextJs',
      },
      title3: 'React',
      icon3: 'icon3',
      btn3: {
        href: '/blog/categories/react',
        label: 'React',
      },
      title4: 'I.A',
      icon4: 'icon4',
      btn4: {
        href: '/blog/categories/inteligence',
        label: 'Inteligence Art.',
      },
      title5: 'Dev.',
      icon5: 'icon5',
      btn5: {
        href: '/blog/categories/developpement',
        label: 'Développement Web',
      },
      title6: 'No code [0]',
      icon6: 'icon6',
      btn6: {
        href: '/blog/categories/noCode',
        label: 'No code',
      },
    },
  ],
}

const BtnCategory = ({ className, contentType }) => {
  const isBlog = contentType === 'blog'
  const iconMapping = isBlog ? iconMappingBlog : iconMappingBlog
  const BtnCategoriesContent = isBlog
    ? BtnCategoriesContentBlog
    : BtnCategoriesContentBlog

  return (
    <section className={className}>
      <div className="table mx-auto xl:hidden items-center justify-center">
        let idx = 0
        {BtnCategoriesContent.step.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.2,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: 0.1 }}
            className=" bg-white relative rounded-md"
          >
            <div className="pb-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-4 lg:gap-8 ">
              {/* {['title1', 'title2', 'title3', 'title4', 'title5', 'title6'].map( */}
              {/* (titleKey, idx) => ( */}
              <div key={idx}>
                <Link href={step[`btn${idx + 1}`].href}>
                  <span className="text-2xl md:text-3xl flex ">
                    {iconMapping[step[`icon${idx + 1}`]]}
                    <h3
                      className="text-xl hover:text-gray-500 text-[#2F2E2E] pb-2 inline-block duration-300 transition-all bg-white-600 ease-in-out 
                        relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r from-orange-500
                        to-orange-800  before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0
                        before:scale-y-[1] before:scale-z[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] 
                        hover:before:scale-y-[1] hover:before:scale-z-[1]"
                    >
                      {/* {step[titleKey]} */}
                    </h3>
                  </span>
                </Link>
              </div>
              {/* ), */}
              {/* } */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default BtnCategory
