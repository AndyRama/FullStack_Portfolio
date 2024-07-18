'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
const heroContent = {
  intro: {
    subTitle: '',
    title: ' Création & Développement web sur mesure par Lemurian Agency ',
    description: {
      text1:
        "Nous sommes une agence de développement web sur mesure basée à Tours (Indre-et-Loire, 37). Nous réalisons tout type d'application web et mobile sur mesure en nous basant sur des technologies modernes.",
      text2:
        "Nous sommes spécialisés sur le langage PHP et le framework Laravel, et réalisons des interfaces dynamiques à l'aide de React. Notre agence de développement offre également des services de consulting en tant que spécialiste de projets webs.",
    },
    btn: {
      href: 'https://calendly.com/andyramaroson/30min',
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
        <div className="lg:flex ">
          {/* Content left - subtitle */}
          <div className="w -12/12 lg:w-4/12 mx-auto mb-10 mt-6">
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
                  before:left-0 before:top-0 before:bottom-0
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
                className=" text-green-500 text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-7 mt-0 lg:mt-32"
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
                className="leading-relaxed text-gray-500 w-auto md:w-screen max-w-lg text-base lg:text-lg mb-10 lg:mb-16"
              >
                {heroContent.intro.description.text1}
              </motion.p>
            )}
            {heroContent.intro.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-500 w-auto md:w-screen max-w-lg text-base lg:text-lg mb-10 lg:mb-16"
              >
                {heroContent.intro.description.text2}
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
              >
                {/* Content left - btn - calendly */}
                <Link
                  href={heroContent.intro.btn.href}
                  className="transistion-all duration-300 ease-in-out text-[11.5px]
                  md:tracking-[2px] font-bold uppercase bg-gradient-to-r from-green-400 to-green-600 py-4 px-5
                  rounded hover:text-white inline-block hover:bg-white text-gray-900 hover:shadow-2xl mb-5 mr-5"
                >
                  {heroContent.intro.btn.label}
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
