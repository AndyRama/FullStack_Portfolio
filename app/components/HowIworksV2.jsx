'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { BiLayer } from 'react-icons/bi'
import {
  HiOutlineSparkles,
  HiOutlineFolder,
  HiOutlineCode,
} from 'react-icons/hi'

const PrestationContentDetails = {
  features: [
    {
      icon: HiOutlineCode,
      title: 'Prennez rendez-vous',
      description:
        'En tant que développeur web indépendant, je vous propose des solutions entièrement personnalisées pour répondre à vos besoins spécifiques. ',
      video:
        'https://res.cloudinary.com/demo/video/upload/glide-over-coastal-beach.mp4',
    },
    {
      icon: HiOutlineSparkles,
      title: 'Developpement Web Sur Mesure',
      description:
        'En tant que développeur web indépendant, je vous propose des solutions entièrement personnalisées pour répondre à vos besoins spécifiques. ',
      video:
        'https://aozwhu9gt7ujimzl.public.blob.vercel-storage.com/Yanniss%20video%20(1)-ULvvgHbpWQRtnvyloLmBmVD8Z1glej.mp4',
    },
    {
      icon: BiLayer,
      title: 'Optimisation pour les Moteurs de Recherche (SEO)',
      description:
        'En tant que développeur web indépendant, je vous propose des solutions entièrement personnalisées pour répondre à vos besoins spécifiques. ',
      video:
        'https://res.cloudinary.com/demo/video/upload/glide-over-coastal-beach.mp4',
    },
    {
      icon: HiOutlineFolder,
      title: 'Maintenance et Assistance Continues',
      description:
        'En tant que développeur web indépendant, je vous propose des solutions entièrement personnalisées pour répondre à vos besoins spécifiques. ',
      video:
        'https://aozwhu9gt7ujimzl.public.blob.vercel-storage.com/Yanniss%20video%20(1)-ULvvgHbpWQRtnvyloLmBmVD8Z1glej.mp4',
    },
  ],
}

function PrestationsDetails() {
  const [videoSrc, setVideoSrc] = useState(
    'https://res.cloudinary.com/demo/video/upload/glide-over-coastal-beach.mp4',
  )

  const handleVideoChange = (src) => {
    setVideoSrc(src)
  }

  return (
    <section className="mt-10 pb-20">
      {/* Content - Blur green - background - top-Left */}
      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 opacity-30 md:opacity-50 -z-20 w-56 h-64 bg-gradient-to-r from-green-300 to-green-500"></div>
      </div>

      {/* Content Right - subtitle */}
      <div className="container px-4 mx-auto">
        <h3 className="text-green-500 text-xl text-left">
          Ce que je te propose
        </h3>
        {/* Content Right - subtitle */}
        <h2 className="text-[#2F2E2E] text-3xl text-left mb-20">
          Détails de mes services
        </h2>
        <div className="lg:flex ">
          <div className="lg:w-6/12 px-4 lg:px-8 mb-10 lg:mb-0">
            {/* Content Left - video */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              ></video>
            </div>
          </div>

          {/* Content Right - feature */}
          <div className=" flex flex-col lg:w-6/12">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              {PrestationContentDetails.features.map((feature, index) => {
                const delay = index * 0.2
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: delay,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    key={feature.title}
                    className="relative z-5 flex gap-3 items-start cursor-pointer"
                    onClick={() => handleVideoChange(feature.video)}
                  >
                    <div>
                      <div>
                        <div className="flex ">
                          <span className="text-3xl text-green-500 mr-4">
                            <feature.icon />
                          </span>

                          <h3 className="text-md mb-4 text-[#2F2E2E]">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <p className="leading-relaxed text-[15px] text-[#2F2E2E] text-opacity-75 mb-7 text-justify hover:bg-green-100 px-4">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Content Left - Btn - calendly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="text-left mt-10"
        >
          <Link
            href="/prestations"
            className="transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-gradient-to-r from-green-500 to-green-800 py-4 px-3 rounded text-white inline-block items-start hover:bg-white hover:border hover:text-green-400 hover:shadow-1xl h-12"
          >
            Prendre rendez-vous
          </Link>
        </motion.div>
      </div>

      {/* Content - Blur green - background - bottom-Right */}
      <div className="transform-gpu blur-3xl">
        <div className="absolute right-0 opacity-30 md:opacity-50 -z-20 w-56 h-64 bg-gradient-to-tr from-green-300 to-green-500"></div>
      </div>
    </section>
  )
}

export default PrestationsDetails
