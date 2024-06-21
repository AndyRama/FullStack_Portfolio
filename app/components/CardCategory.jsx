'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiSparkles } from 'react-icons/hi'
import { HiOutlineTerminal } from 'react-icons/hi'
import { HiOutlineTemplate } from 'react-icons/hi'
import { GrReactjs } from 'react-icons/gr'
import { TbBrandNextjs } from 'react-icons/tb'
import { BiSolidGrid } from 'react-icons/bi'

const iconMapping = {
  icon1: (
    <HiSparkles
      data-testid="icon1"
      className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10"
    />
  ),
  icon2: (
    <GrReactjs
      data-testid="icon2"
      className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10"
    />
  ),
  icon3: (
    <TbBrandNextjs
      data-testid="icon3"
      className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10"
    />
  ),
  icon4: (
    <HiOutlineTerminal
      data-testid="icon4"
      className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10"
    />
  ),
  icon5: (
    <HiOutlineTemplate
      data-testid="icon5"
      className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10"
    />
  ),
  icon6: (
    <BiSolidGrid
      data-testid="icon5"
      className="mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10"
    />
  ),
}
const CardCategoriesContent = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      title1: 'Inteligence Art.',
      icon1: 'icon1',
      btn1: {
        href: '/blog/categories/complement',
        label: 'Complément Alim.',
      },
      title2: 'React',
      icon2: 'icon2',
      btn2: {
        href: '/blog/categories/competition',
        label: 'Compétition',
      },
      title3: 'NextJs',
      icon3: 'icon3',
      btn3: {
        href: '/blog/categories/exercice',
        label: 'Exercices',
      },
      title4: 'Dévelop. Web',
      icon4: 'icon4',
      btn4: {
        href: '/blog/categories/entrainement',
        label: 'Entraînement',
      },
      title5: 'Code Reviews',
      icon5: 'icon5',
      btn5: {
        href: '/blog/categories/exercice',
        label: 'Exercices',
      },
      title6: 'No code',
      icon6: 'icon6',
      btn6: {
        href: '/blog/categories/exercice',
        label: 'Exercices',
      },
    },
  ],
}

const CardCategory = ({ className }) => {
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
            className="group duration-300 bg-white border border-gray-200 relative overflow-hidden hover:shadow-2xl rounded-md h-[365px] mr-3"
          >
            <div className="px-2 mt-2 relative flex flex-col gap-2 items-start ">
              <span className="text-3xl flex">
                <Link href="/blog">
                  <h2
                    data-testid="categories-title"
                    className="text-3xl text-[#2F2E2E] hover:text-orange-500"
                  >
                    Catégories
                  </h2>
                </Link>
              </span>
              <p className="text-justify leading-relaxed text-[15px] text-gray-500 duration-300 transition-all ease-in-out group-hover:text-white">
                {step.description}
              </p>

              {['title1', 'title2', 'title3', 'title4', 'title5', 'title6'].map(
                (titleKey, idx) => (
                  <div key={idx}>
                    <Link href={step[`btn${idx + 1}`].href}>
                      <span className="text-3xl flex ">
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
