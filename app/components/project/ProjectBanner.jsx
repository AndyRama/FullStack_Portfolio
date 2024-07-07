'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import BtnStack from './BtnStack'
import Link from 'next/link'

const projectBannerContent = {
  heading: {
    subTitle: '',
    title: '',
    time: '1 mois 1/2',
    description: '',
    btn1: {
      href: 'https://portfolio-eta-three-93.vercel.app/',
      label: 'Demo',
    },
    btn: {
      href: 'https://portfolio-eta-three-93.vercel.app/',
      label: "Plus d'informations",
    },
  },
}

const ProjectBanner = ({
  className,
  title,
  subTitle,
  description,
  image,
  time,
}) => {
  title = title || projectBannerContent.heading.title
  subTitle = subTitle || projectBannerContent.heading.subTitle
  description = description || projectBannerContent.heading.description
  time = time || projectBannerContent.heading.time

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['10%', '-20%'])

  return (
    <section className={`${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse lg:w-12/12 mx-auto">
          {/* Content Right */}
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
            className="z-[2] relative bg-cover bg-center lg:mb-0"
          >
            {image && (
              <Image src={image} width={700} height={985} alt="hero image" />
            )}
            {/* Content Right - Stack */}
            <BtnStack contentType="project" className="hidden lg:contents " />
          </motion.div>

          {/* Content Left */}
          <div className="lg:w-12/12 relative lg:mt-0 mb-8 lg:mb-0 lg:mr-20">
            <div className="lg:max-w-4xl mx-auto">
              {/* Content Left - subtitle */}
              {subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.03, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[18px] mb-5 inline-block text-orange-500 font-bold"
                >
                  {subTitle}
                </motion.span>
              )}

              {/* Content Left- Title */}
              {title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.06, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl xl:text-5xl text-[#2F2E2E] mb-5"
                >
                  {title}
                </motion.h2>
              )}

              {/* Content Left - durée */}
              {time && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.03, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="tracking-[3px] text-[14px] mb-5 inline-block text-orange-500 font-bold"
                >
                  FullStack | {time}
                </motion.span>
              )}

              {/* Content Left - Description */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="leading-relaxed text-gray-500 w-auto lg:w-screen max-w-xl text-left lg:text-lg mb-10"
                >
                  {description}
                </motion.p>
              )}

              {/* Content Left - Description */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="leading-relaxed text-gray-500 w-auto lg:w-screen max-w-xl text-left lg:text-lg mb-10 hidden lg:contents"
                >
                  {description}
                </motion.p>
              )}

              {/* Content Left - BtnAction */}
              {projectBannerContent.heading.btn.label && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="btn-container mt-10"
                >
                  {/* Content Left - btn - info */}
                  <Link
                    href={projectBannerContent.heading.btn.href}
                    target="_blank"
                    className="transistion-all duration-300 ease-in-out text-[11.5px]
                  md:tracking-[2px] font-bold uppercase bg-gradient-to-r from-orange-500 to-orange-800 py-4 px-5
                  rounded text-white inline-block hover:bg-white 
                  hover:shadow-2xl mb-5 mr-5"
                  >
                    {projectBannerContent.heading.btn.label}
                  </Link>

                  {/* Content Left - btn - demo */}
                  <Link
                    href={projectBannerContent.heading.btn1.href}
                    target="_blank"
                    className="transistion-all duration-300 ease-in-out text-[11.5px]
                  md:tracking-[2px] font-bold uppercase bg-gradient-to-r from-orange-500 to-orange-800 py-4 px-5
                  rounded text-white hover:bg-white 
                  hover:shadow-2xl mb-5 mr-5 inline-block"
                  >
                    {projectBannerContent.heading.btn1.label}
                  </Link>
                </motion.div>
              )}

              {/* Content left - stack - mobile */}
              <BtnStack contentType="project" className="contents lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectBanner
