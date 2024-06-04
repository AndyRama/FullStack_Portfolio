'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const heroContent = {
  intro: {
    title: 'Création ',
    subTitle: 'de site web',
    description:
      'Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable.',
    btn: {
      href: '/team',
      label: 'Discutons en !',
    },
  },
}

const Hero = ({ className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['30%', '-20%'])

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 md:px-16 mx-auto pt-20">
        <div className="md:flex justify-between space-x-0 ">
          <div className="lg:w-9/12 lg:mb-32">
            {/* Content left - title */}
            {heroContent.intro.title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                data-testid="hero-title"
                className=" text-[#2F2E2E] font-bold text-4xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-2"
              >
                {heroContent.intro.title}
              </motion.h2>
            )}

            {/* Content left - subTitle */}
            {heroContent.intro.subTitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                data-testid="hero-subTitle"
                className=" text-orange-500 font-bold text-4xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8"
              >
                {heroContent.intro.subTitle}
              </motion.h2>
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
                className="leading-relaxed text-[#2F2E2E] md:w-[600px] max-w-xl
                  text-xl xl:text-2xl mb-10 lg:mb-16"
              >
                {heroContent.intro.description}
              </motion.p>
            )}

            {/* btn link */}

            {heroContent.intro.btn.label && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={heroContent.intro.btn.href}
                  alt="Team Page redirection"
                  className="transistion-all duration-300 ease-in-out text-[14px] 
                    tracking-[2px] font-bold uppercase bg-white py-4 px-5
                    rounded text-[#1D1D1D] inline-block hover:bg-transparent border hover:text-[#2F2E2E] hover:shadow-2xl mb-10"
                >
                  {heroContent.intro.btn.label}
                </Link>
              </motion.button>
            )}
          </div>

          {/* Image right */}

          <div className="md:w-8/12 ">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
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
                src="/images/desktop.jpg"
                width={900}
                height={900}
                alt="hero image"
                className="rounded-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

export default Hero
