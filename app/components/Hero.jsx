'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const heroContent = {
  intro: {
    subTitle: '',
    title: 'Bienvenue',
    description:
      'Je suis Andy Ramaroson, un développeur FullStack JS basée sur Bordeaux (N. Aquitaine, 33) et je réalise des applications sur mesure en me basant sur des technologies web modernes et I.A. Je suis spécialisé sur le langage  JavaScript avec le framework React & NextJs.',
    btn1: {
      href: '/projects',
      label: 'Projets',
    },
    btn: {
      href: 'https://calendly.com/lemurian-agency/30min',
      label: 'Prendre rendez-vous',
    },
  },
}

const Hero = ({ className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])

  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex items-center ">
          {/* Content left - subtitle */}
          <div className="lg:w-6/12 mb-10 lg:mb-10 mt-6">
            {heroContent.intro.subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="inline-block py-0.5 pl-3 text-heading font-semibold
                  relative mb-7 before:content-[''] before:absolute before:w-2/3
                  before:bg-yellowLight before:left-0 before:top-0 before:bottom-0
                  before:z-[-1]"
              >
                {heroContent.intro.subTitle}
              </motion.span>
            )}

            {/* Content left - title */}
            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className=" text-gray-800 text-3xl sm:text-3xl md:text-4xl lg:text-5xl w-auto lg:w-screen max-w-xl mb-4 md:mb-7 mt-0 lg:mt-32"
              >
                {heroContent.intro.title}
              </motion.h1>
            )}

            {/* Content left - description */}
            {heroContent.intro.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-500 w-auto md:w-screen max-w-md text-base lg:text-lg mb-10 lg:mb-16"
              >
                {heroContent.intro.description}
              </motion.p>
            )}

            {/* Content left - btn */}
            {heroContent.intro.btn.label && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="btn-container"
              >
                {/* Content left - btn - calendly */}
                <Link
                  href={heroContent.intro.btn.href}
                  className="transistion-all duration-300 ease-in-out text-[11.5px]
                  md:tracking-[2px] font-bold uppercase bg-gradient-to-r from-orange-500 to-orange-800 py-4 px-5
                  rounded text-white inline-block hover:bg-white hover:text-orange-400
                  hover:shadow-2xl mb-5 mr-5"
                >
                  {heroContent.intro.btn.label}
                </Link>
                {/* Content left - btn - projects */}
                <Link
                  href={heroContent.intro.btn1.href}
                  className="transistion-all duration-300 ease-in-out text-[11.5px]
                  md:tracking-[2px] font-bold uppercase bg-gradient-to-r from-orange-500 to-orange-800 py-4 px-5
                  rounded text-white hover:bg-white hover:text-orange-400
                  hover:shadow-2xl mb-5 mr-5 inline-block"
                >
                  {heroContent.intro.btn1.label}
                </Link>
              </motion.div>
            )}
          </div>

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
              style={{ y: imgScroll1 }}
              className="z-[2] relative bg-cover bg-center"
            >
              <Image
                src="/images/desktop1.jpg"
                width={900}
                height={1024}
                className=" rounded-md"
                alt="hero image desktop"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
