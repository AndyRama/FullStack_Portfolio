'use client'

import React from 'react'
import { BiSolidHeart } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const footerContent = {
  footerLinks: [
    {
      heading: '',
      links: [
        {
          href: '/',
          label: 'Home',
        },
        {
          href: '/blog',
          label: 'Blog',
          badge: 'New',
        },
        // {
        //   href: '/expertise',
        //   label: 'Expertise',
        // },
      ],
    },
    {
      heading: '',
      links: [
        {
          href: '/projects',
          label: 'Projects',
          badge: 'en cours',
        },
        // {
        //   href: '/methodologie',
        //   label: 'Methodologie',
        // },
        {
          href: '/contact',
          label: 'Contact',
        },
      ],
    },
    {
      heading: '',
      links: [
        // {
        //   href: '/prestations',
        //   label: 'Prestations',
        // },
        {
          href: 'https://www.websitecarbon.com/website/portfolio-eta-three-93-vercel-app/',
          label: 'CO2',
          badge: 'New',
          target: '_blank',
        },
      ],
    },
  ],
}

const Copyright = () => {
  return (
    <div className="pt-2 mb-5 md:mt-5 md:pt-3 mr-1 border-t border-t-gray-100 text-center text-[#2F2E2E] ">
      <div className="text-center items-center mx-auto text-sm">
        &copy; 2024
        <Link href="/" className="text-orange-500 ml-1 mr-1">
          Portfolio
        </Link>
        Crée avec <BiSolidHeart className="text-red-400 inline-block mr-1" />
        par
        <Link href="/" className="text-orange-500 ml-1">
          Andy Ramaroson
        </Link>
      </div>
    </div>
  )
}

const Footer = ({ className }) => {
  return (
    <footer className={`${className} overflow-hidden w-full h-full z-[2] `}>
      <div className="container mx-auto px-4 relative mt-10">
        <div className="md:flex ">
          <div className="md:w-4/12 mb-5 md:mb-0">
            <Link href="#" className="text-[28px] text-[#2F2E2E] font-bold">
              Andy Ramaroson
              <span className="text-[#2F2E2E]">.</span>
            </Link>
            <br />
            <div className="flex mt-2">
              <span>
                <Link
                  href="https://github.com/AndyRama"
                  className="text-[28px] text-[#2F2E2E] hover:text-orange-200 font-bold mr-10"
                  alt="Github-icon"
                  target="_blank"
                >
                  <FaGithub />
                </Link>
              </span>
              <span>
                <Link
                  href="http://www.linkedin.com/in/andy-ramaroson"
                  className="text-[28px] text-[#2F2E2E] hover:text-orange-200 font-bold mr-10"
                  alt="Linkedin-icon"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </span>
            </div>
          </div>

          <div className="md:w-7/12 ">
            <div className="grid grid-cols-3 md:grid-cols-3 ">
              {footerContent.footerLinks.map((item, index) => (
                <div className="mb-5 md:mb-0" key={item.heading}>
                  <h3 className="text-gray-400 mb-3">{item.heading}</h3>
                  <ul className="list-none">
                    {item.links.map((link, index) => (
                      <li className="mb-2" key={link.label}>
                        <Link
                          href={link.href}
                          target={link.target || '_self'}
                          className={`${
                            link.badge ? 'flex gap-2 items-center' : ''
                          }
                            text-[#2F2E2E] duration-300 transition-all ease-in-out hover:text-orange-500`}
                        >
                          {link.label === 'CO2' ? (
                            <>
                              <span className="target_blanc">{link.label}</span>
                              <span
                                className="py-0.5 px-1 rounded-full bg-orange-100
                                    border border-orange-500 text-[10px] text-orange-500
                                    invisible sm:visible"
                              >
                                {link.badge}
                              </span>
                            </>
                          ) : (
                            link.label
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>{' '}
        {/* Version 2 */}
        <div className="text-right items-right mx-auto text-sm pb-0">
          <Link
            href="/document/privacy"
            target="_blank"
            className="text-orange-500 hover:text-[#2F2E2E]"
          >
            Privacy{' '}
          </Link>{' '}
          <Link
            href="/document/terms"
            target="_blank"
            className="text-[#2F2E2E] hover:text-orange-500"
          >
            Terms{' '}
          </Link>
        </div>
        <Copyright />
      </div>
      <div className="transform-gpu blur-3xl ">
        <div className="absolute -mt-20 left-0 opacity-50 -z-50 w-32 h-48 md:w-80 md:h-96 bg-gradient-to-tr from-orange-500 to-orange-800"></div>
        <div className="absolute -mt-20 right-0 opacity-0 md:opacity-50 -z-50 w-80 h-96 bg-gradient-to-tr from-orange-500 to-orange-800"></div>
      </div>
    </footer>
  )
}

export default Footer
