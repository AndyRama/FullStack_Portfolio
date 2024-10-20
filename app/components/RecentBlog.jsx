'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { allPosts } from '.contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

const recentBlogContent = {
  heading: {
    title: 'Articles récents',
    subTitle: 'Mon blog',
    description:
      'Ma veille technologique se concentre principalement sur le langage JavaScript. Je suis également les évolutions des frameworks populaires comme React et NextJS, en explorant les nouvelles fonctionnalités, les meilleures pratiques et les patterns de conception émergents que je partage au travers de ce blog.',
  },
}
const PostCard = ({ index, post }) => {
  index *= 0.05
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="border border-gray-300 bg-gray-50 relative overflow-hidden group rounded "
    >
      <Link href={post.url} className="relative block overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={1064}
          height={350}
          className="object-cover object-center h-[250px] duration-300
            transition-all ease-in-out group-hover:scale-[1.1]"
        />
      </Link>

      <div className="p-4 lg:p-6 ">
        <p className="text-[#2F2E2E] mb-2 uppercase text-[12px] tracking-[1px]">
          {format(parseISO(post.date), 'LLL d, yyyy')} • {post.author}
        </p>

        <h3 className="mb-4 text-[#ff5e29]">
          <Link href={post.url} className="text-lg leading-none">
            {post.title}
          </Link>
        </h3>

        {/* <p className="text-[#2F2E2E] mb-3 text-[14px] tracking-[1px]">
          {post.excerpt}
        </p> */}

        <div>
          <Link
            href={post.url}
            className="text-gray-500 hover:text-[#2F2E2E] text-[12px] tracking-[2px] uppercase
            inline-block  duration-300 transistion-all bg-white-600
            ease-in-out relative before:content-['']
            before:absolute before:bottom-0 before:left-0 before:w-full
            before:h-[2px] before:bg-gradient-to-tr from-[#e78738] to-[#fb923c]before:origin-[100%, 50%]
            before:transistion-all before:duration-300 before:ease-in-out
            before:scale-x-0 before:scale-y-[1] before:scale-z[1]
            before:wil-change-transform hover:before:origin-[100%, 0%]
            hover:before:scale-x-[1] hover:before:scale-y-[1]
            hover:before:scale-z-[1] pb-2"
          >
            lire l&apos;article
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const RecentBlog = ({ className }) => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  return (
    <section className={`${className}`}>
      {/* Content - Blur orange - background - bottom-left */}
      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 opacity-30 md:opacity-50 -z-20 w-48 h-56 bg-gradient-to-tr from-orange-300 to-orange-500"></div>
      </div>

      <div className="container mx-auto rounded-md ">
        <div className=" px-4 md:px-16 lg:flex justify-left mb-2">
          <div className="lg:w-10/12">
            {recentBlogContent.heading.subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.05,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-sm inline-block text-[#ff5e29]"
              >
                {recentBlogContent.heading.subTitle}
              </motion.span>
            )}
            {recentBlogContent.heading.title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="text-2xl lg:text-4xl mb-4 lg:mb-0 text-[#2F2E2E]"
              >
                {recentBlogContent.heading.title}
              </motion.h2>
            )}
          </div>
          <div className="lg:w-5/12 self-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.15,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="text-[#2F2E2E]"
            >
              {recentBlogContent.heading.description}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-9/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-auto mt-10 mb-10 px-4">
        {posts.slice(0, 4).map((post, index) => (
          <PostCard key={index} index={index} post={post} />
        ))}

        {/*  Content center - btn Right + de Article  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="btn-container text-left mt-5"
        >
          <Link
            href="/blog"
            className="transistion-all duration-300 ease-in-out text-[11.5px]
          tracking-[2px] font-bold uppercase bg-gradient-to-r from-orange-400 to-orange-600 py-4 px-3
          rounded hover:text-black text-white inline-block items-start hover:bg-white hover:shadow-2xl 
          hover:shadow-1xl h-12"
          >
            Voir tous les articles
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default RecentBlog
