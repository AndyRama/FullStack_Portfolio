'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { BiSolidHeart } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import IconLinkedin from './../../public/images/linkedin.svg'
import IconMalt from './../../public/images/malt.svg'
import IconLogo from 'public/images/logo4.jpg' 

const footerContent = {
  footerLinks: [
    {
      heading: 'site',
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
        {
          href: '/contact',
          label: 'Contact',
        },
      ],
    },
    {
      heading: 'services',
      links: [
        {
          href: '/projects',
          label: 'Réalisations',
          badge: 'New',
        },
        {
          href: '/methodologie',
          label: 'Methodologie',
        },
        {
          href: '/expertise',
          label: 'Expertise',
        },
      ],
    },
    {
      heading: 'Performance',
      links: [
        {
          href: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fportfolio-eta-three-93.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&utm_source=lh-chrome-ext#',
          label: 'LighHouse',
          target: '_blank',
        },
        {
          href: 'https://www.websitecarbon.com/website/portfolio-eta-three-93-vercel-app/',
          label: 'CO2',
          badge: 'New',
          target: '_blank',
        },
      ],
    },
    {
      heading: 'Cvg',
      links: [
        {
          href: '/document/privacy',
          label: 'Privacy',
          target: '_blank',
        },
        {
          href: '/document/terms',
          label: 'Terms',
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
        &copy; 2025
        <Link href="/" className="text-[#ff5e29] ml-1 mr-1">
          Portfolio
        </Link>
        Crée avec <BiSolidHeart className="text-red-400 inline-block mr-1" />
        par
        <Link href="/" className="text-[#ff5e29] ml-1">
          Andy Ramaroson
        </Link>
      </div>
    </div>
  )
}

const Footer = ({ className }) => {
  return (
    <footer className={`${className} overflow-hidden w-full h-full z-[2] `}>
      <div className="container mx-auto px-4 relative mt-8">
        <div className="lg:flex">
          <div className="lg:w-4/12"> 
            <div className="mb-0">
              <Link href="/" className="flex flex-row text-2xl font-bold"> 
                {/* Logo - Navigation - left */}
                {/* <span className="mt-2 py-2 pr-2">
                  <Image src={IconLogo} width={30} height={30} alt="logo" /> 
                </span> */}
                <span className="text-black">
                  Lemurian Agency
                </span>
              </Link>

              <p className="text-start text-black">
                60 rue François 1er 75008 Paris
              </p>
              <p className="text-start text-black">
                lemuriane33@gmail.com
              </p>
              <p className="text-start text-black font-bold">
                {' '}
                05.56.34.89.79 -{' '}
                <span className="text-[#ff5e29] font-bold text-center">
                  06.56.34.89.79
                </span>
              </p>
            </div>
            <br />
            <div className="flex mt-2">
              <span className="flex flex-row">
                <FaGithub />
                <Link
                  href="https://github.com/AndyRama"
                  className="text-[12px] text-[#2F2E2E] hover:text-[#ff5e29] font-bold ml-2 mr-5" 
                  alt="andy rama Github link"
                  target="_blank"
                >
                  Github
                </Link>
              </span>
              <span className="flex flex-row text-center">
                <Image
                  src={IconLinkedin}
                  width={18} 
                  height={18}
                  alt="logo linkedin"
                />
                <Link
                  href="http://www.linkedin.com/in/andy-ramaroson"
                  className="text-[12px] text-[#2F2E2E] hover:text-[#ff5e29] font-bold ml-2 mr-5"
                  alt="andy rama Linkedin link"
                  target="_blank"
                >
                  Linkedin
                </Link>
              </span>
              {/* <span className="flex flex-row text-center">
                <Image 
                  src={IconMalt} 
                  width={18} 
                  height={18} 
                  alt="logo malt" 
                />
                <Link
                  href="#"
                  className="text-[12px] text-[#2F2E2E] hover:text-[#ff5e29] font-bold ml-2 mt-[-2px]"
                  alt="andy rama Linkedin link"
                  target="_blank"
                >
                  Malt
                </Link>
              </span> */}
            </div>
          </div>

          <div className="md:w-8/12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> 
              {footerContent.footerLinks.map((item, index) => (
                <div className="mb-5 md:mb-0" key={item.heading}>
                  <h3 className="text-gray-400 mb-3">{item.heading}</h3>
                  <ul className="list-none">
                    {item.links.map((link, index) => (
                      <li className="mb-2" key={link.label}>
                        <Link
                          href={link.href}
                          target={link.target || '_self'}
                          className={`${link.badge ? 'flex gap-2 items-center' : ''
                            }
                            text-[#2F2E2E] duration-300 transition-all ease-in-out hover:text-[#ff5e29]`}
                        >
                          {link.label === 'CO2' ? (
                            <>
                              <span>{link.label}</span>
                              <span
                                className="py-0.5 px-1 rounded-full bg-orange-100
                                    border border-orange-500 text-[10px] text-[#ff5e29]
                                    invisible sm:visible"
                              >
                                {link.badge}
                              </span>
                            </>
                          ) : (
                            <>
                              <span>{link.label}</span>
                              {link.badge && (
                                <span
                                  className="py-0.5 px-1 rounded-full bg-orange-100
                                      border border-orange-500 text-[10px] text-[#ff5e29]
                                      invisible sm:visible"
                                >
                                  {link.badge}
                                </span>
                              )}
                            </>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Version 2 */}
        {/* <div className="text-right items-right mx-auto text-sm pb-0">
          <Link
            href="#"
            target="_blank"
            className="text-[#ff5e29] hover:text-[#2F2E2E]"
          >
            Privacy{' '}
          </Link>{' '}
          <Link
            href="#"
            target="_blank"
            className="text-[#2F2E2E] hover:text-[#ff5e29]"
          >
            Terms{' '}
          </Link>
        </div> */}

        <Copyright />
      </div>
      <div className="transform-gpu blur-3xl">
        <div className="absolute -mt-20 left-0 opacity-50 -z-50 w-32 h-48 md:w-80 md:h-96 bg-gradient-to-tr from-orange-300 to-orange-500"></div>
        <div className="absolute -mt-20 right-0 opacity-0 md:opacity-50 -z-50 w-80 h-96 bg-gradient-to-tr from-orange-300 to-orange-500"></div>
      </div>
    </footer>
  )
}

export default Footer