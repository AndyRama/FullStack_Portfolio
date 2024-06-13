'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const subHeroRContent = {
  heading: {
    subTitle: '',
    title: '',
    description: '',
  },
}
const SubHeroR = ({ className, title, subTitle, description }) => {
  if (title) {
    title = title
  } else {
    title = subHeroRContent.heading.title
  }
  if (subTitle) {
    subTitle = subTitle
  } else {
    subTitle = subHeroRContent.heading.subTitle
  }
  if (description) {
    description = description
  } else {
    description = subHeroRContent.heading.description
  }

  return (
    <section className={`${className}`}>
      <div className="container mx-auto">
        <div className="lg:flex lg:w-12/12 mx-auto items-left justify-between">
          {/* Image right */}
          <div className="lg:w-12/12 relative lg:-mt-140 mb-8 ">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delai: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              // style={{ y: imgScroll1 }}
              className="z-[2] relative bg-cover bg-center"
            >
              <Image
                src="/images/desktop.jpg"
                width={700}
                height={985}
                alt="hero image desktop"
              />
            </motion.div>
          </div>
          <div className="lg:max-w-3xl mx-auto mt-[75px] md:mt-[150px] mb-10">
            {/* Content center - subtitle */}
            {subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.03, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-[18px]
                  mb-5 inline-block text-orange-500 font-bold"
              >
                {subTitle}
              </motion.span>
            )}

            {/* Content center - title */}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.06, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl xl:text-7xl text-[#2F2E2E] mb-10"
              >
                {title}
              </motion.h2>
            )}

            {/* Content left - description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-500 w-auto lg:w-screen max-w-lg text-base lg:text-lg mb-10 lg:mb-16"
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubHeroR
