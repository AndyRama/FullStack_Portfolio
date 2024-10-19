'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero1() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgScroll = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gradient-to-r from-white to-orange-200">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Andy Ramaroson,
            </motion.h1>
            <motion.h2 
              className="text-3xl lg:text-5xl font-semibold mb-4 text-orange-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Full-Stack Developer
            </motion.h2>
            <motion.h3 
              className="text-2xl lg:text-2xl font-medium mb-6 text-orange-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              NextJs | React | TypeScript
            </motion.h3>
            <motion.p 
              className="text-lg mb-8 text-gray-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Développeur FullStack JS basé à Bordeaux, spécialisé en React & NextJS. Je crée des applications web modernes sur mesure.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link 
                href="/projects" 
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
              >
                CV
              </Link>
              <Link 
                href="https://calendly.com/andyramaroson/30min" 
                className="bg-white text-orange-500 px-6 py-3 rounded-md border border-orange-500 hover:bg-orange-50 transition duration-300"
              >
                Prendre rendez-vous
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            style={{ y: imgScroll }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image
              src="/images/andy.jpeg"
              width={500}
              height={700}
              alt="Andy Ramaroson"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="absolute bottom-10 left-30 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <p className="text-gray-600">Scroll Down ↓</p>
      </motion.div>
    </section>
  )
}
