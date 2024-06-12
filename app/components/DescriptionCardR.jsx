'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const CardDescriptionR = ({ className, title, subTitle, description }) => {
  const cardDescriptionRContent = {
    heading: {
      title: title || '',
      subTitle: subTitle || '',
      description: description || '',
    },
    content: {
      img: '/images/andy.jpeg',
      descriptions: [
        "Je réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
        "Je réalise depuis plus de 2 ans des outils sur-mesure à destination d'entreprises de toutes tailles. Je transforme chaque besoin de mes clients en solution web, en garantissant le respect de leurs règles métiers.",
      ],
    },
  }

  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['30%', '-10%'])

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl mx-auto mb-15 mt-10 md:mt-0 lg:mb-12 relative z-[5]">
          {cardDescriptionRContent.heading.subTitle && (
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
              className="uppercase tracking-[3px] text-[12.5px] mb-2 inline-block text-gray-500"
            >
              {cardDescriptionRContent.heading.subTitle}
            </motion.span>
          )}

          {cardDescriptionRContent.heading.title && (
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
              className="text-2xl lg:text-4xl"
            >
              {cardDescriptionRContent.heading.title}
            </motion.h2>
          )}
        </div>

        <div className="lg:flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="lg:w-6/12 mt-20 text-justify">
              <Image
                src={cardDescriptionRContent.content.img}
                className="object-cover !w-full !h-[400px] lg:max-w-2xl object-center rounded-md"
                alt="Andy profile"
                width={200}
                height={200}
              />
            </div>
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              {cardDescriptionRContent.content.descriptions.map(
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
                    className="text-xl mb-7 text-gray-500"
                  >
                    {description}
                  </motion.p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardDescriptionR
