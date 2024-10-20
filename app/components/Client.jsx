'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo1 from './../../public/images/logo1.png'
import logo2 from './../../public/images/logo7.jpg'
import logo3 from './../../public/images/logo3.png'
import logo4 from './../../public/images/logo4.jpg'
import logo5 from './../../public/images/logo5.jpg'
import logo6 from './../../public/images/logo6.png'
import logo8 from './../../public/images/logo8.jpg'

const clientContent = {
  intro: {
    subTitle: 'Réalisations',
    title: "ils m'ont fait confiance",
    description:
      'Je réalise au quotidien des projets pour des startups, PME, éditeurs de logiciels.',
  },
  logos: [
    { logo: logo1, id: 1 },
    { logo: logo2, id: 2 },
    { logo: logo3, id: 3 },
    { logo: logo4, id: 4 },
    { logo: logo5, id: 5 },
    { logo: logo6, id: 6 },
    { logo: logo8, id: 7 },
  ],
}

const Client = ({ className }) => {
  let id = 0

  return (
    <section className={`${className} overflow-hidden`}>
      <div className="container px-4 lg:px-16 mx-auto ">
        <div className="lg:flex justify-left">
          <div className="w-full lg:flex gap-4 pt-10 items-center mb-10 lg:mb-0 px-4">
            <div className="lg:w-8/12">
              {clientContent.intro.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.05,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-sm inline-block"
                >
                  {clientContent.intro.subTitle}
                </motion.span>
              )}
              {clientContent.intro.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl mb-4 lg:mb-0 text-[#ff5e29]"
                >
                  {clientContent.intro.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="items-center justify-beteween mt-10 md:mt-15 mb-10">
        <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7">
          {clientContent.logos.map((logo) => {
            id += 0.5
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: id,
                    duration: 0.2,
                  },
                }}
                viewport={{ once: true }}
                key={logo.id}
                whileHover={{ y: -10, transition: { duration: 0.01 } }}
                className="z-[2] relative bg-cover bg-center mx-auto"
              >
                <Image
                  src={logo.logo}
                  width={90}
                  height={90}
                  alt={`logo${logo.id}`}
                  className="rounded-md mt-10"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Client
