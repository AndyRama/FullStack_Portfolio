'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiOutlineTerminal } from 'react-icons/hi'
import { HiOutlineTemplate } from 'react-icons/hi'
import { FaShop } from 'react-icons/fa6'
import { TbBrandNextjs } from 'react-icons/tb'
import { BiSolidGrid } from 'react-icons/bi'
import { HiSparkles } from 'react-icons/hi'
import { GrReactjs } from 'react-icons/gr'
import { TbDeviceMobileCode } from 'react-icons/tb'
import { CgWebsite } from 'react-icons/cg'

const iconMappingProject = {
  icon1: (
    <CgWebsite className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon2: (
    <HiOutlineTerminal className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon3: (
    <TbDeviceMobileCode className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon4: (
    <FaShop className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon5: (
    <BiSolidGrid className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon6: (
    <HiOutlineTemplate className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
}

const CardCategoriesContentProject = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      title1: 'Site vitrine [3]',
      icon1: 'icon1',
      btn1: {
        href: '/projects',
        label: 'Projets',
      },
      title2: 'Appli. web [1]',
      icon2: 'icon2',
      btn2: {
        href: '/projects/categories/nextjs',
        label: 'NextJs',
      },
      title3: 'Appli. mob. [0]',
      icon3: 'icon3',
      btn3: {
        href: '/projects/categories/maintenance ',
        label: 'Maintenance ',
      },
      title4: 'E-commerce [1]',
      icon4: 'icon4',
      btn4: {
        href: '/projects/categories/studientsCases',
        label: "Cas d'etudes",
      },
      title5: "Cas d'étude [9]",
      icon5: 'icon5',
      btn5: {
        href: '/projects/categories/ecommerce',
        label: 'E-commerce',
      },
      title6: 'Webflow [1]',
      icon6: 'icon6',
      btn6: {
        href: '/projects/categories/webflow',
        label: 'Webflow',
      },
    },
  ],
}

const iconMappingBlog = {
  icon1: (
    <BiSolidGrid className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon2: (
    <TbBrandNextjs className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon3: (
    <GrReactjs className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon4: (
    <HiSparkles className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon5: (
    <HiOutlineTerminal className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
  icon6: (
    <HiOutlineTemplate className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10" />
  ),
}

const CardCategoriesContentBlog = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      title1: 'Tous les articles [7]',
      icon1: 'icon1',
      btn1: {
        href: '/blog',
        label: 'Tous les articles',
      },
      title2: 'NextJs [2]',
      icon2: 'icon2',
      btn2: {
        href: '/blog/categories/nextjs',
        label: 'NextJs',
      },
      title3: 'React [2]',
      icon3: 'icon3',
      btn3: {
        href: '/blog/categories/react',
        label: 'React',
      },
      title4: 'Inteligence Art. [1]',
      icon4: 'icon4',
      btn4: {
        href: '/blog/categories/inteligence',
        label: 'Inteligence Art.',
      },
      title5: 'Dévelop. Web [0]',
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

const CardCategory = ({ className, contentType }) => {
  const isProject = contentType === 'project'
  const iconMapping = isProject ? iconMappingProject : iconMappingBlog
  const CardCategoriesContent = isProject
    ? CardCategoriesContentProject
    : CardCategoriesContentBlog

  return (
    <section className={className}>
      <div className="w-auto contents">
        {CardCategoriesContent.step.map((step, index) => (
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
            className=" bg-white border border-gray-200 relative overflow-hidden hover:shadow-2xl rounded-md h-[365px] w-[250px] mr-3"
          >
            <div className="px-4 lg:mt-5 mt-8 relative flex flex-col gap-2 items-start ">
              <span className="text-2xl flex">
                <h2
                  data-testid="categories-title"
                  className="text-2xl text-[#2F2E2E] hover:text-orange-500"
                >
                  Catégories
                </h2>
              </span>
              <p className="text-justify leading-relaxed text-[15px] text-gray-500 duration-300 transition-all ease-in-out group-hover:text-white">
                {step.description}
              </p>

              {['title1', 'title2', 'title3', 'title4', 'title5', 'title6'].map(
                (titleKey, idx) => (
                  <div key={idx}>
                    <Link href={step[`btn${idx + 1}`].href}>
                      <span className="text-2xl flex ">
                        {iconMapping[step[`icon${idx + 1}`]]}
                        <h3
                          className="text-xl hover:text-gray-500 text-[#2F2E2E] pb-2 inline-block duration-300 transition-all bg-white-600 ease-in-out 
                        relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px]
                        before:bg-gradient-to-r from-orange-500 to-orange-800  before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0
                        before:scale-y-[1] before:scale-z[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] 
                        hover:before:scale-y-[1] hover:before:scale-z-[1]"
                        >
                          {step[titleKey]}
                        </h3>
                      </span>
                    </Link>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CardCategory
