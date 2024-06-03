'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs'

import img1 from './../../public/images/hero-img-1-min.jpg'
import img2 from './../../public/images/maquette.jpg'
import img3 from './../../public/images/desktop.jpg'
import img4 from './../../public/images/Team.jpg'

const slides = [img1, img2, img3, img4]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-[500px] relative flex-shrink-0 }"
          >
            <Image
              src={slide}
              alt={`Slide ${index}`}
              width={2048}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            key={`circle-${i}`}
            onClick={() => setCurrent(i)}
            className={`rounded-full w-5 h-5 cursor-pointer ${i === current ? 'bg-white' : 'bg-gray-500'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}
