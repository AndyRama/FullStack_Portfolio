'use client';
// import { CheckCircle } from 'lucide-react'; // Importation des icônes depuis lucide-react

const Pricing2 = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      {/* Section principale */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Ne vous faites plus avoir</h2>
        <h1 className="text-4xl font-bold mb-4">Un prix simple, des résultats concrets</h1>
        <p className="text-lg text-gray-700">
          Nous connaissons bien ces récits d&apos;artisans approchés par des agences qui leur font miroiter des promesses extraordinaires... contre des tarifs exorbitants et sans résultat concret. Nous avons décidé de changer cela.
        </p>
      </div>

      {/* Section des prix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Agence Classique */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Agence Classique</h3>
          <p className="text-gray-700 mb-4">
            Bonjour, je suis une agence classique. Je crée votre site web pour SEULEMENT 2 000 €. Ensuite, je vous facture 200 € par mois pour l&apos;hébergement et le référencement. Si vous souhaitez des modifications, cela vous coûtera 100 € de l&apos;heure. Avec un peu de chance, vous aurez 1 client par mois ! Vous avez 5 minutes pour vous décider.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center">
              {/* <CheckCircle className="w-5 h-5 text-blue-500 mr-2" /> */}
              <span className="text-gray-700">1 site avec 5 pages</span>
            </li>
            <li className="flex items-center">
              {/* <CheckCircle className="w-5 h-5 text-blue-500 mr-2" /> */}
              <span className="text-gray-700">Peut-être des résultats</span>
            </li>
            <li className="flex items-center">
              {/* <CheckCircle className="w-5 h-5 text-blue-500 mr-2" /> */}
              <span className="text-gray-700">Un support qui répond en moins d&apos;un an !</span>
            </li>
            <li className="flex items-center">
              {/* <CheckCircle className="w-5 h-5 text-blue-500 mr-2" /> */}
              <span className="text-gray-700">Nous vendons vos informations personnelles, cool non ?</span>
            </li>
          </ul>
        </div>

        {/* Section de prix et bouton d'action */}
        <div className="bg-orange-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-4">Nous souhaitons vous arnaquer</h3>
          <div className="text-5xl font-bold text-gray-900 mb-4">
            2 000€ <span className="text-lg">EUR</span>
          </div>
          <p className="text-gray-700 text-lg mb-4">Puis 200€/mois</p>
          <p className="text-sm text-gray-500 mb-8">Engagement de 4 ans, sans garantie de résultat.</p>
          <button className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
            Me faire arnaquer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing2;
