'use client'

import React, { useState } from 'react'

function HowIworks() {
  const [videoSrc, setVideoSrc] = useState(
    'https://aozwhu9gt7ujimzl.public.blob.vercel-storage.com/Yanniss%20video%20(1)-ULvvgHbpWQRtnvyloLmBmVD8Z1glej.mp4',
  )

  const handleVideoChange = (src) => {
    setVideoSrc(src)
  }

  return (
    <section>
      <div className="container px-4 mx-auto">
        <div className="h-full w-full">
          <div className="px-6 md:px-0 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
              <p className="font-display font-semibold leading-7 text-[#6DCC4C] text-base lg:text-4xl">
                Developpement
              </p>
              <h2 className="font-display mt-1 text-xl lg:text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Cher Lemurian Agency, j&apos;ai une passion pour les services !
              </h2>
              <p className="mt-4 leading-[1.8rem] text-slate-500">
                Je m&apos;attache à comprendre le coeur métier de notre client,
                pour définir le besoin exact
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-24 md:grid-cols-2 lg:items-start">
            <div className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 lg:mx-0 lg:max-w-lg">
              <div
                className="relative my-2 flex cursor-pointer flex-col items-start justify-center rounded-lg border border-transparent p-4 transition-all duration-300 ease-in-out  hover:bg-green-200"
                onClick={() =>
                  handleVideoChange(
                    'https://res.cloudinary.com/demo/video/upload/glide-over-coastal-beach.mp4',
                  )
                }
              >
                <div className="font-display flex items-center font-semibold text-slate-900">
                  <span
                    className="mr-3 font-bold text-[#6DCC4C] "
                    aria-hidden="true"
                  >
                    01
                  </span>
                  <h3 className="font-bold text-2xl">Prenez rendez-vous</h3>
                </div>
                <div className="ml-9 inline">
                  Choisissez votre créneau pour une session de 30 minutes avec
                  moi, durant laquelle on definit votre site web puis on
                  convient d&apos;une solution qui s&apos;accorde avec votre
                  avis, votre budget.
                </div>
              </div>

              <div
                className="relative my-2 flex cursor-pointer flex-col items-start justify-center rounded-lg border border-transparent p-4 transition-all duration-300 ease-in-out  hover:bg-green-200"
                onClick={() =>
                  handleVideoChange(
                    'https://aozwhu9gt7ujimzl.public.blob.vercel-storage.com/Yanniss%20video%20(1)-ULvvgHbpWQRtnvyloLmBmVD8Z1glej.mp4',
                  )
                }
              >
                <div className="font-display flex items-center font-semibold text-slate-900">
                  <span
                    className="mr-3 font-bold text-[#6DCC4C] "
                    aria-hidden="true"
                  >
                    02
                  </span>
                  <h3 className="font-bold text-2xl">Durant le process</h3>
                </div>
                <div className="ml-9 inline">
                  Je reviens constamment vers l&apos;utilisateur final pour
                  qu&apos;il valide les développements.
                </div>
              </div>

              <div
                className="relative my-2 flex cursor-pointer flex-col items-start justify-center rounded-lg border border-transparent p-4 transition-all duration-300 ease-in-out  hover:bg-green-200 "
                onClick={() =>
                  handleVideoChange(
                    'https://res.cloudinary.com/demo/video/upload/glide-over-coastal-beach.mp4',
                  )
                }
              >
                <div className="font-display flex items-center font-semibold text-slate-900">
                  <span
                    className="mr-3 font-bold text-[#6DCC4C] "
                    aria-hidden="true"
                  >
                    03
                  </span>
                  <h3 className="font-bold text-2xl">Livraison</h3>
                </div>
                <div className="ml-9 inline">
                  On livre une solution et on reste en contact constant avec
                  notre client pour assurer de sa satisfaction.
                </div>
              </div>
            </div>

            <div className="relative mt-10 h-[320px] w-full max-w-2xl overflow-hidden rounded-2xl border-[2px] border-green-400 bg-white">
              <video
                className="absolute inset-0 h-full w-full rounded-lg object-cover object-center"
                playsInline
                autoPlay
                loop
                key={videoSrc}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowIworks
