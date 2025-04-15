// PricingPlanFree.jsx
export const PricingPlanFree = () => {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-900">Free</h2>
          <p className="text-sm text-gray-500">Perfect for tiny creator</p>
        </div>
        
        <div className="mt-6 flex items-baseline justify-center">
          <span className="text-5xl font-bold text-gray-900">$0</span>
          <span className="ml-1 text-gray-500">/month</span>
        </div>
        
        <ul className="mt-6 space-y-4">
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="ml-2 text-gray-600">1 user</span>
          </li>
        </ul>
        
        <div className="mt-8">
          <button className="w-full rounded-md bg-gray-200 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Start for free
          </button>
          <p className="mt-1 text-center text-xs text-gray-500">No credit card required</p>
        </div>
      </div>
    </div>
  );
};

// PricingPlanStandard.jsx
export const PricingPlanStandard = () => {
  const featuresStandard = [
    "Full concurrent executions",
    "1 shared project",
    "Utilisations de LLM local (Mistral, ...)",
    "Full workflow executions autant d'étapes",
    "15 credits pour la créations de vos agents",
    "Une interface pour créer d'autres agents",
    "Les données sont sécurisées sur Vps",
    "Vous pouvez déployé autant d'agent souhaités",
  ];

  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-xl border border-orange-300 bg-white p-4 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Contenu principal */}
        <div className="md:w-2/3 md:pr-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Standard | Hosted by <span className="font-normal">n8n.mon-agent-ai.com</span>
          </h2>
          
          <p className="mt-4 text-gray-600">
            Nous comprenons les défis opérationnels quotidiens des artisans et entreprises similaires. Notre solution d&apos;agent IA,
            configurable rapidement, vous permet de gérer efficacement vos interactions clients, en vous permettant de générer des 
            contenus, analyser des données et optimiser votre temps et vos ressources.
          </p>
          
          <p className="mt-2 text-gray-600">
            On déploie les agents de votre choix*.
          </p>

          {/* Liste des fonctionnalités */}
          <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-orange-600">Ce qui est inclus</h3>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {featuresStandard.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            * Dans la limite des agents disponibles.
          </p>
        </div>

        {/* Section prix */}
        <div className="mt-6 md:mt-0 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-6 md:w-1/3">
          <p className="text-lg text-gray-600">Un prix simple et transparent</p>
          <h2 className="mt-2 text-2xl font-bold text-black">29,9€/mois</h2>
          <button className="mt-4 rounded-lg bg-orange-500 px-6 py-3 text-white shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Obtenir vos agents IA
          </button>
        </div>
      </div>
    </div>
  );
};

// PricingPlanPro.jsx
export const PricingPlanPro = () => {
  const featuresPro = [
    "Aucune limite d'exécutions concurrentes",
    "15 crédits pour la création de vos agents",
    "Des résultats multipliés par 100",
    "Une interface pour créer d'autres agents",
    "Intégration de 4 LLM locaux (Mistral, DeepSeek...)",
    "Assistance d'un expert dédié",
    "Exécutions de workflow illimitées",
    "Système de parrainage",
  ];

  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-xl border border-orange-300 bg-white p-4 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Contenu principal */}
        <div className="md:w-2/3 md:pr-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Premium | Hosted by <span className="font-normal">n8n.votre-site-web.com</span>
          </h2>
          
          <p className="mt-4 text-gray-600">
            Votre projet nécessite une approche plus approfondie et personnalisée. Notre offre premium s&apos;adapte 
            précisément à vos besoins spécifiques en intégrant directement votre stratégie de relation client. 
            Conçue pour les entreprises ayant des exigences avancées, cette solution vous permet de transformer 
            vos processus métier tout en garantissant la confidentialité et en optimisant votre efficacité.
          </p>
          
          <p className="mt-2 text-gray-600">
            Nous configurons votre propre serveur et déployons vos 15 agents avec un coût et un quota fixes 
            pour tout nouvel agent*.
          </p>

          {/* Liste des fonctionnalités */}
          <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-orange-600">Ce qui est inclus</h3>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {featuresPro.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            * Dans la limite de 3 agents supplémentaires déployés par mois.
          </p>
        </div>

        {/* Section prix */}
        <div className="mt-6 md:mt-0 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-6 md:w-1/3">
          <p className="text-lg text-gray-600">Pour l&apos;installation de votre serveur</p>
          <h2 className="mt-2 text-2xl font-bold text-black">79,9€/mois</h2>
          <button className="mt-4 rounded-lg bg-orange-500 px-6 py-3 text-white shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Obtenir vos agents IA
          </button>
        </div>
      </div>
    </div>
  );
};

// PricingCardsContainer.jsx - A container component to display all pricing cards
export const PricingPack= () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choisissez votre plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des solutions adaptées à tous vos besoins
          </p>
        </div>
        
        <div className="mt-12 space-y-8">
          <PricingPlanFree />
          
          <div className="mt-8">
            <PricingPlanStandard />
          </div>
          
          <div className="mt-8">
            <PricingPlanPro />
          </div>
        </div>
      </div>
    </div>
  );
};