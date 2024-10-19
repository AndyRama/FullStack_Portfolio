import Image from 'next/image';
import React from 'react';

const TechBadge = ({ tech }) => (
  <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
    {tech}
  </span>
);

const UnlcoachingCard = () => {
  const techStack = [
    'NextJs', 'TypeScript', 'React', 'Vercel', 
    'Postgresql', 'Prisma', 'Nextauth'
  ];

  return (
    <div className="w-10/12 mx-auto bg-red-600 text-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
      {/* Left Section */}
      <div className="lg:w-1/3 w-full">
        <h1 className="text-4xl font-bold mb-4">Unlcoaching.com</h1>
        {/* Technology Badges */}
        <div className="flex flex-wrap mb-4">
          {techStack.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
        {/* Description */}
        <p className="text-white mb-4">
          Point De Vue est un quotidien d&apos;actualité royale qui existe depuis 1945. 
          Nous avons refait leur site à neuf, en migrant l&apos;entièreté de leurs anciens 
          contenus vers notre nouvelle plateforme sur-mesure, et en apportant de 
          nouvelles fonctionnalités, axées vers l&apos;obtention d&apos;un meilleur référencement.
        </p>
      </div>
      
      {/* Right Section (Image) */}
      <div className="lg:w-2/3 w-full flex justify-center  mt-6 lg:mt-0">
        <Image 
          src="/images/unlcoaching2.png" 
          alt="Coaching site preview" 
          className="w-full max-w-xs lg:max-w-md rounded-lg"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default UnlcoachingCard;
