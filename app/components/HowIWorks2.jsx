'use client';
import Image from 'next/image';

const HowItWorks2 = () => {
  return (
    <div className="container mx-auto  px-8 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Section gauche : Texte et étapes */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-2">Gardez du temps pour votre famille</h3>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Obtenir des clients n&apos;a jamais été aussi simple
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Arrêtez de vous prendre la tête à comparer les agences. Prenez rendez-vous dès maintenant pour obtenir un site web en 30 minutes. Les clients viennent à vous sans que vous ayez à bouger le petit doigt. Vous pouvez enfin souffler !
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-orange-500 text-2xl font-bold mr-4">01</div>
              <div>
                <h4 className="font-bold text-gray-900">Prenez rendez-vous dès maintenant</h4>
                <p className="text-gray-700">
                  Choisissez votre créneau pour une session de 30 minutes avec un expert, durant laquelle votre site sera créé gratuitement et en direct grâce à notre IA.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-orange-500 text-2xl font-bold mr-4">02</div>
              <div>
                <h4 className="font-bold text-gray-900">On indexe votre site en 72H</h4>
                <p className="text-gray-700">
                  Votre site est indexé sur Google en moins de 72H, prêt à recevoir des visiteurs et des clients.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-orange-500 text-2xl font-bold mr-4">03</div>
              <div>
                <h4 className="font-bold text-gray-900">Attirez des clients en masse</h4>
                <p className="text-gray-700">
                  Votre site monte rapidement dans les résultats de recherche et attire des clients en masse.
                </p>
              </div>
            </div>

              <div className="flex items-start">
              <div className="text-orange-500 text-2xl font-bold mr-4">03</div>
              <div>
                <h4 className="font-bold text-gray-900">Attirez des clients en masse</h4>
                <p className="text-gray-700">
                  Votre site monte rapidement dans les résultats de recherche et attire des clients en masse.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section droite : Image */}
        <div className="text-center">
          {/* <div className="relative mx-auto w-full max-w-md">
            <Image
              src="/images/bannerLemurian.jpg"
              alt="Aperçu du site"
              width={800}
              height={800}
              className="rounded-lg shadow-lg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks2;
