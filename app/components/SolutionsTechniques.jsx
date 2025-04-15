import React from 'react';
import Image from 'next/image';


export default function SolutionsTechniques() {
  const technologies = [
    {
      name: 'React',
      color: 'bg-cyan-500',
      logo: '/react-logo.png',
      alt: 'Logo React'
    },
    {
      name: 'Next.js',
      color: 'bg-gray-800',
      logo: '/nextjs-logo.png',
      alt: 'Logo Next.js'
    },
    {
      name: 'Postgres',
      color: 'bg-red-800',
      logo: '/Neon-logo.png',
      alt: 'Logo Neon'
    },
    {
      name: 'Pré-prod',
      color: 'bg-indigo-200',
      logo: '/vercel-logo.png',
      alt: 'Logo Vercel'
    },
    {
      name: 'Production',
      color: 'bg-indigo-200',
      logo: '/Hostinger-logo.png',
      alt: 'Logo Hostinger'
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Nos solutions techniques pour créer des{' '}
          <span className="text-cyan-500">applications métier</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Dans un souci de transparence et de liberté, Kernl a fait le choix d&apos;utiliser des technologies open source : 
          elles permettent aux clients de ne pas rester captifs et de pouvoir choisir à tout le moment le bon prestataire, 
          sans être contraint par un modèle de licences restrictif.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {technologies.map((tech) => (
          <div key={tech.name} className={`${tech.color} rounded-lg overflow-hidden`}>
            <div className="flex items-center justify-center bg-white rounded-full w-40 h-40 mx-auto my-8">
              <Image 
                src="#" 
                alt={tech.alt} 
                width={150}
                height={150}
                className="w-24 h-24 object-contain" 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}