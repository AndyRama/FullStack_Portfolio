'use client';
// import { Star } from 'lucide-react'; // Pour les étoiles d'évaluation
import Image from 'next/image'; // Si vous utilisez Next.js pour gérer les images

const HeroSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl text-orange-500 font-semibold mb-4">
          Artisans français, cet outil est pour vous !
        </h2>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Le site web qui vous apporte enfin des clients
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Obtenez 100 fois plus de clients grâce à un site web contenant 100 fois plus de pages référencées sur Google ! Tout ça gratuitement en 30 minutes chrono grâce à notre intelligence artificielle.
        </p>

        <button className="bg-red-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-red-700 transition duration-300 mb-4">
          Prendre rendez-vous
        </button>
        <p className="text-sm text-gray-600 mb-6">
          Un expert crée votre site web en direct, gratuitement en 5 minutes.
        </p>

        {/* Section d'étoiles et d'avis */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          <div className="flex">
            {/* {[...Array(5)].map((_, index) => (
              <Star key={index} className="w-5 h-5 text-yellow-500" />
            ))} */}
          </div>
          <p className="text-sm text-gray-700">Utilisé par 25 artisans</p>
        </div>

        {/* Optionnel : Section image ou illustration */}
        <div className="border-2 border-orange-400 rounded-lg p-4">
          {/* Si vous avez une image */}
          <Image
            src="/path-to-your-image.png" // Remplacer par votre image
            alt="Aperçu du service"
            width={800}
            height={600}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
