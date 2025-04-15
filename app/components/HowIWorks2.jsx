'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import {
  BiLayer,
  BiCode,
  BiFolder,
  BiTerminal,
  BiCog,
  BiMicrochip,
  BiUser,
  BiDevices,
  BiChip
} from 'react-icons/bi'

import {
  FaAndroid,
  FaCompass,
  FaConnectdevelop,
  FaCommentDots,
  FaCodeBranch,
  FaCheck,
  FaStar
} from 'react-icons/fa'

const serviceDetails = {
  development: {
    title: "Développement",
    description: "Chez nous, nous avons une passion pour les passions !",
    image: "/images/agile.jpg",
    link: "/developpement-sur-mesure",
    features: [
      {
        icon: BiCode,
        text: "On s'attache à comprendre le métier de notre client, pour définir le besoin exact."
      },
      {
        icon: FaStar,
        text: "Puis on convient d'une solution qui s'accorde avec son avis, son budget."
      },
      {
        icon: BiTerminal,
        text: "On revient constamment vers l'utilisateur final pour qu'il valide nos développements."
      },
      {
        icon: BiLayer,
        text: "On livre une solution et on reste en contact constant avec notre client pour s'assurer de sa satisfaction."
      }
    ]
  },
  hosting: {
    title: "Hébergement",
    description: "Notre coeur de métier comporte aussi la mise en place et le maintien de serveurs.",
    image: "/images/cahierDesCharges.jpg",
    link: "/hebergement",
    features: [
      {
        icon: BiFolder,
        text: "Pour accueillir nos propres solutions ou pour propulser les applications de nos clients."
      },
      {
        icon: BiCog,
        text: "La sécurité, la performance et la disponibilité sont nos priorités."
      },
      {
        icon: BiTerminal,
        text: "15 ans d'expérience dans la gestion et le déploiement de solutions d'hébergement."
      },
      {
        icon: BiChip,
        text: "Une veille constante pour se tenir informé des failles potentielles."
      }
    ]
  },
  maintenance: {
    title: "Maintenance",
    description: "Maintenir aujourd'hui, pour mieux développer demain !",
    image: "/images/Team.jpg",
    link: "/maintenance",
    features: [
      {
        icon: BiMicrochip,
        text: "Tous les composants que nous utilisons sont maintenus et bénéficient des dernières mises à jour."
      },
      {
        icon: BiUser,
        text: "Une veille constante nous permet de rester à la pointe de la sécurité informatique."
      },
      {
        icon: BiCog,
        text: "Notre métier, c'est de garantir que tous vos services fonctionnent les uns avec les autres, à tout moment."
      },
      {
        icon: BiLayer,
        text: "Notre code est constamment versionné, archivé, sauvegardé, et le créateur d'une fonctionnalité est identifié."
      }
    ]
  },
  mobile: {
    title: "Mobile & tablette",
    description: "Nous assurons le développement sur mesure et le support d'applis mobiles.",
    image: "/images/productivité.jpg",
    link: "/developpement-applications-mobiles",
    features: [
      {
        icon: BiDevices,
        text: "Des applications mobiles et tablettes programmées pour s'adapter parfaitement à tous les appareils."
      },
      {
        icon: FaAndroid,
        text: "Expertise dans le développement d'applications pour iOS & Android."
      },
      {
        icon: FaCompass,
        text: "Création d'interfaces conviviales, axées sur l'utilisateur, pour une navigation fluide et une satisfaction maximale."
      },
      {
        icon: BiChip,
        text: "Optimisation pour des performances rapides et une efficacité énergétique sur les appareils mobiles et tablettes."
      }
    ]
  },
  consulting: {
    title: "Consulting",
    description: "Nous offrons également un service de conseil aux entreprises !",
    image: "/images/Team.jpg",
    link: "/consulting",
    features: [
      {
        icon: FaConnectdevelop,
        text: "Une évaluation ciblée de vos besoins en développement web."
      },
      {
        icon: FaCommentDots,
        text: "Des conseils pour maximiser l'efficacité de votre présence en ligne."
      },
      {
        icon: FaCodeBranch,
        text: "Des recommandations claires pour une mise en œuvre réussie."
      },
      {
        icon: FaCheck,
        text: "Suivi et ajustements pour une performance web optimale."
      }
    ]
  }
}

function HowIWorks2() {
  const [activeTab, setActiveTab] = useState('maintenance')

  return (
    <section className="mt-10 pb-20">
      <div className="container px-4 lg:px-0 mx-auto">
        <h4 className="text-[#2F2E2E] text-left uppercase tracking-[3px] text-sm inline-block">
          Nos services
        </h4>
        <h3 className="text-[#ff5e29] text-3xl text-left mb-12 md:mb-10">
          Comment nous pouvons vous aider
        </h3>

        <div className="flex flex-col lg:flex-row">
          {/* Tabs navigation */}
          <div className="lg:w-2/12 mb-6 lg:mb-0">
            <ul className="flex flex-row lg:flex-col flex-wrap">
              {Object.keys(serviceDetails).map((key) => (
                <li key={key} className="w-1/2 lg:w-full mb-2">
                  <button
                    className={`px-4 py-2 w-full text-left ${activeTab === key
                        ? 'font-bold text-[#ff5e29] border-l-4 border-[#ff5e29]'
                        : 'text-[#2F2E2E] hover:text-[#ff5e29]'
                      }`}
                    onClick={() => setActiveTab(key)}
                  >
                    {serviceDetails[key].title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content panels */}
          <div className="lg:w-10/12">
            {Object.keys(serviceDetails).map((key) => (
              <div
                key={key}
                className={`${activeTab === key ? 'block' : 'hidden'}`}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-7/12 mb-6 lg:mb-0">
                    <div className="p-0 lg:p-5">
                      <h3 className="font-bold text-xl mb-2">
                        <Link href={serviceDetails[key].link} className="text-[#2F2E2E] hover:text-[#ff5e29]">
                          {serviceDetails[key].title}
                        </Link>
                      </h3>
                      <p className="text-lg mb-6">{serviceDetails[key].description}</p>

                      <div className="grid grid-cols-2 gap-4">
                        {serviceDetails[key].features.map((feature, index) => (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            key={index}
                            className="text-center p-3"
                          >
                            <span className="flex justify-center text-2xl text-[#ff5e29] mb-2">
                              <feature.icon />
                            </span>
                            <p className="text-sm text-[#2F2E2E]">{feature.text}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-5/12 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-lg overflow-hidden shadow-lg"
                    >
                      <Link href={serviceDetails[key].link}>
                        <div className="w-[300px] h-[400px] relative">
                          <Image
                            src={serviceDetails[key].image}
                            alt={serviceDetails[key].title}
                            width={300}
                            height={400}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Link href="/expertise" className="inline-flex items-center px-6 py-3 text-white bg-[#ff5e29] rounded hover:bg-[#e64d18] transition-colors">
            <span className="mr-2">Notre Expertise</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Background decorative element */}
      <div className="transform-gpu blur-3xl">
        <div className="absolute right-0 opacity-30 md:opacity-50 -z-20 w-56 h-64 bg-gradient-to-tr from-orange-300 to-orange-500"></div>
      </div>
    </section>
  )
}

export default HowIWorks2