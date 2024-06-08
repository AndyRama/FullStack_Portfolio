import React from 'react'
import Link from 'next/link'

const statContent = {
  stats: [
    { number: '5', label: 'Projets achevés' },
    { number: '3', label: "Années d'expériences" },
    { number: '2', label: 'Cafés par jour' },
    { number: '4', label: 'Clients' },
  ],
  getStarted: {
    heading:
      'Vous avez besoin d’un développeur pour créer ou mettre à jour votre site ?',
    description: 'Contactez-moi, je reviendrai vers vous très rapidement.',
    image: '/images/icon.',
    cta: {
      cta_href: 'https://calendly.com/lemurian-agency/30min',
      cta_label: 'Prendre rendez-vous',
    },
  },
}

const Stats = () => {
  return (
    <section className="pt-10 pb-10 bg-white">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0">
          <div className="w-full lg:w-9/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {statContent.stats.map((stat, index) => (
                <div
                  className="text-center w-full hover:shadow-xl transition-all duration-300 ease-in-out"
                  key={index}
                >
                  <strong className="text-primary text-4xl xl:text-[52px] font-bold leading-tight">
                    {stat.number}
                  </strong>
                  <br />
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="bg-light py-10 px-7 lg:px-10 md:pr-32 rounded-lg relative">
              {statContent.getStarted.heading && (
                <h3 className="text-heading font-bold text-xl mb-3">
                  {statContent.getStarted.heading}
                </h3>
              )}

              {statContent.getStarted.description && (
                <p className="text-md mb-5">
                  {statContent.getStarted.description}
                </p>
              )}

              {statContent.getStarted.cta.cta_label && (
                <Link
                  href={statContent.getStarted.cta.cta_href}
                  className="block text-center text-[11.5px] tracking-[2px] font-bold uppercase bg-orange-600 py-4 px-5 text-white rounded-md"
                >
                  <span>{statContent.getStarted.cta.cta_label}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
