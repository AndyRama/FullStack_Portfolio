'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const CardDescription = ({ className, title, subTitle, description }) => {
  const cardDescriptionContent = {
    heading: {
      title: title || '',
      subTitle: subTitle || '',
      description: description || '',
    },
    content: {
      img: '/images/andy.jpeg',
      descriptions: [
        "Avec plus de deux ans d'expérience dans le développement d'applications web sur mesure, j'ai acquis une expertise approfondie qui me permet de transformer leurs idées en solutions web sur mesure, performantes et répondant au mieux à leurs besoins",
        "Avec plus de deux ans d'expérience dans le développement d'applications web sur mesure, j'ai acquis une expertise approfondie qui me permet de transformer leurs idées en solutions web sur mesure, performantes et répondant au mieux à leurs besoins",
        "Avec plus de deux ans d'expérience dans le développement d'applications web sur mesure, j'ai acquis une expertise approfondie qui me permet de transformer leurs idées en solutions web sur mesure, performantes et répondant au mieux à leurs besoins",
      ],
    },
  }

  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section className={`${className}`} ref={ref}>
      {/* Content - Blur orange - background - bottom-left */}
      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 opacity-30 md:opacity-50 -z-20 w-48 h-56 bg-gradient-to-tr from-orange-300 to-orange-500"></div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl pb-0 md:pb-10 relative z-[5]">
          {cardDescriptionContent.heading.subTitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="uppercase tracking-[3px] text-[12.5px] inline-block "
            >
              {cardDescriptionContent.heading.subTitle}
            </motion.span>
          )}

          {cardDescriptionContent.heading.title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl text-orange-500"
            >
              {cardDescriptionContent.heading.title}
            </motion.h2>
          )}
        </div>

        <div className="lg:flex justify-center">
          <div className="lg:w-10/12 lg:flex gap-20 items-center md:items-start">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                style={{ y: imgScroll1 }}
                className="z-[2] relative bg-cover bg-center"
              >
                <Image
                  src={cardDescriptionContent.content.img}
                  className="!w-full !h-full md:w-[500px] md:h-[500px] lg:max-w-2xl object-center rounded-md"
                  alt="Andy profile"
                  width={350}
                  height={400}
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12 text-justify lg:text-base mt-10">
              {cardDescriptionContent.content.descriptions.map(
                (description, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    className="text-lg mb-7 text-gray-500"
                  >
                    {description}
                  </motion.p>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardDescription
