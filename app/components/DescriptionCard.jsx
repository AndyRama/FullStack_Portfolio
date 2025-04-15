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
        "Fort de mon expertise technique et de ma passion pour le développement web, je propose mes services pour transformer vos idées en solutions digitales concrètes. Mon approche méthodique et organisée me permet de gérer efficacement chaque projet, de la conception initiale au déploiement final.",
        "Que vous soyez une entreprise cherchant à renforcer votre présence en ligne ou un particulier avec un projet innovant, je mets à votre disposition mes compétences techniques et mon expérience pour vous accompagner vers le succès digital",
        "Basé à Bordeaux, je travaille également en remote. N'hésitez pas à me contacter pour discuter de votre projet et explorer ensemble les meilleures solutions pour le concrétiser.",
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
      <div className="container px-4 lg:px-16 mx-auto">
        <div className="text-left lg:max-w-xl pb-0 md:pb-10 relative z-[5]">
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
          <div className="w-12/12 lg:flex gap-20 items-center md:items-start">
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
                  className="w-[400px] h-[400px]  md:w-[450px] md:h-[550px] lg:max-w-2xl mx-auto rounded-xl"
                  alt="Andy profile"
                  width={300}
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
