'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IconLogo from './../../public/images/logo4.jpg'
import { motion } from 'framer-motion'

const subscribeContent = {
  heading: {
    title:
      'Vous avez besoin d’un développeur pour créer ou mettre à jour votre site ?',
    subtitle: 'Contactez-moi',
    description: 'Je reviendrai vers vous très rapidement.',
    btn: {
      label: 'Contactez-moi',
      href: 'https://calendly.com/andyramaroson/30min',
    },
  },
}

const Subscribe = ({ className }) => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('/api/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage('Merci pour votre abonnement !')
        setEmail('')
      } else {
        setMessage("Erreur lors de l'envoi de l'email. Veuillez réessayer.")
      }
    } catch (error) {
      setMessage("Erreur lors de l'envoi de l'email. Veuillez réessayer.")
    }
  }

  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="flex justify-center items-center pb-5">
          <Image
            src={IconLogo}
            width={150}
            height={150}
            alt="logo"
            className="border-black rounded-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-12/12 flex gap-0">
            <div className="text-center w-screen max-w-md mx-auto mb-4">
              {subscribeContent.heading.subtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[12.5px] mb-4 text-[#2F2E2E] flex justify-center "
                >
                  {subscribeContent.heading.subtitle}
                </motion.div>
              )}

              {subscribeContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl text-[#2F2E2E]"
                >
                  {subscribeContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto justify-center">
          {message && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="w-full max-w-md mx-auto text-center text-[#2F2E2E] text-opacity-80"
            >
              {message}
            </motion.p>
          )}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="w-auto max-w-md mx-auto text-center text-[#2F2E2E] text-opacity-80"
          >
            {subscribeContent.heading.description}
          </motion.p>
          <div className="flex flex-col mx-auto justify-center mt-10">
            <Link
              href={subscribeContent.heading.btn.href}
              target="_blank"
              className="transistion-all duration-300 ease-in-out text-[11.5px] md:tracking-[2px] font-bold uppercase 
              bg-gradient-to-r from-orange-500 to-orange-800 py-4 px-5 rounded text-white hover:bg-white
               hover:text-black hover:shadow-2xl mb-5 mr-5 inline-block w-[300px] text-center"
            >
              {subscribeContent.heading.btn.label}
            </Link>
          </div>
        </div>
      </div>
      <div className="transform-gpu blur-3xl">
        <div className="absolute right-0 bottom-60 opacity-50 -z-50 w-32 h-48 md:w-52 md:h-64 bg-gradient-to-tr from-orange-500 to-orange-800"></div>
      </div>
    </section>
  )
}

export default Subscribe
