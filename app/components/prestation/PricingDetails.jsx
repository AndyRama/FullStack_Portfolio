'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BiHardHat, BiPaintRoll, BiNote, BiLayer } from 'react-icons/bi'

const PricingContentDetails = {
  features: [
    {
      icon: BiHardHat,
      title: 'Transformation Physique',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit  consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit !',
    },
    {
      icon: BiNote,
      title: 'Préparation aux Compétitions',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit  consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit !',
    },
    {
      icon: BiLayer,
      title: "Maintien de l'Activité Physique",
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit  consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit !',
    },
    {
      icon: BiPaintRoll,
      title: 'Support pour TCA',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit  consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit !',
    },
  ],
}

const PricingDetails = ({ className }) => {
  return (
    <>
      <section className="pb-20">
        <div className="transform-gpu blur-3xl">
          <div className="absolute left-0 opacity-30 md:opacity-50 -z-20 w-56 h-64 bg-gradient-to-tr from-orange-500 to-orange-800"></div>
        </div>
        <div className="container px-4 mx-auto">
          <h3 className="text-orange-500 text-xl text-center">
            Ce que tu obtiens
          </h3>
          <h2 className="text-[#2F2E2E] text-3xl text-center mb-20">
            Détails de mon offre
          </h2>
          <div className="lg:flex justify-center">
            <div className="w-full lf:w-8/12 flex gap-0 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {PricingContentDetails.features.map((feature, index) => {
                  index *= 0.2
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      key={feature.title}
                      className="relative z-5 flex gap-3
                      items-start "
                    >
                      <div>
                        <div className="flex">
                          <span className="text-3xl text-orange-500 mr-4">
                            <feature.icon />
                          </span>
                          <h3 className="text-lg mb-4 text-[#2F2E2E]">
                            {feature.title}
                          </h3>
                        </div>
                        <p
                          className="leading-relaxed text-[15px] text-[#2F2E2E]
                          text-opacity-75 mb-7 text-justify"
                        >
                          <span>• </span>
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
          {/*  Content center - btn Right + de Projects  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="btn-container text-left mt-5"
          >
            <Link
              href="/prestations"
              className="transistion-all duration-300 ease-in-out text-[11.5px]
          tracking-[2px] font-bold uppercase bg-gradient-to-r from-orange-500 to-orange-800  py-4 px-3
          rounded text-white inline-block items-start hover:bg-white hover:border hover:text-orange-400
          hover:shadow-1xl h-12"
            >
              Prestations
            </Link>
          </motion.div>
        </div>
        <div className="transform-gpu blur-3xl">
          <div className="absolute right-0 opacity-30 md:opacity-50 -z-20 w-56 h-64 bg-gradient-to-tr from-orange-500 to-orange-800"></div>
        </div>
      </section>
    </>
  )
}

export default PricingDetails
