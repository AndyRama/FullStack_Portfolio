'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { allProjects } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import CardCategory from '@/app/components/CardCategory'

import { getMDXComponent } from 'next-contentlayer/hooks'

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

const ProjectContent = ({ project }) => {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  let MDXContent

  if (!projects) return null

  if (!project) {
    console.log('Project not found')
  } else {
    MDXContent = getMDXComponent(project.body.code)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transistion: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="pt-44 pb-20 container px-4 mx-auto"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {/* Content title project */}
          <h2 className="text-[#2F2E2E] text-center text-4xl/none lg:text-6xl/none font-medium">
            {project.title}
          </h2>

          <p className="text-[#2F2E2E] mt-10 text-center">
            <span className="inline-flex space-x-3">
              <span>{format(parseISO(project.date), 'LLL d, yyyy')}</span>
              <span>•</span>
              <span>{project.client}</span>
            </span>

            <span className="mx-3">•</span>

            {project.categories?.map((category, index) => (
              <Link
                href={`/project/categories/${slugify(category.title)}`}
                key={category.title}
                className="font-medium"
              >
                {category.title}
                {index < project.categories.length - 1 ? ` | ` : ``}
              </Link>
            ))}
          </p>
        </div>

        {/* Content Image project */}
        <div className="mb-16">
          <Image
            src={project.image}
            width={1065}
            height={644}
            className="object-cover object-top rounded-md border border-[#] w-full"
            alt={project.title}
          />
        </div>

        {/* Content Article */}
        <div className="flex">
          <article className="prose mx-auto max-w-3xl">
            <MDXContent />
          </article>
          <CardCategory className="hidden w-3/12 mr-2" />
        </div>

        {/* Btn others project */}
        <div className="flex justify-end mt-10">
          <Link
            href="/projects"
            className="transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase
               bg-gradient-to-r from-orange-500 to-orange-800 hover:transparent hover:border-white py-4 px-5
             text-white hover:shadown-2xl rounded-md"
          >
            Voir tous les projects
          </Link>
        </div>
      </div>
      {/* </div> */}
    </motion.div>
  )
}

export default ProjectContent
