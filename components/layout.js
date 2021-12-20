import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import React, {useState} from 'react'

const name = 'Bro Den'
export const siteTitle = 'Next.js Sample Website'
let isMenuVisible = false



export default function Layout({ children, home }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => {
    console.log('toggle Menu')
    setIsMenuVisible(!isMenuVisible)
    console.log({isMenuVisible})
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <nav class="bg-gradient-to-b from-yellow-200 to-gray-100">
          <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
              <div class="flex space-x-4">
                <div>
                  <a href="#" class="flex items-center py-5 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="font-bold">MMO Cambodia</span>
                  </a>
                </div>
                {/* Primary */}
                <div class="hidden md:flex items-center space-x-4">
                  <Link href="facebook">
                    <a class="py-5 px-3 text-blue-700 hover:text-blue-900 font-bold">
                      Facebook
                    </a>
                  </Link>
                  <Link href="youtube">
                    <a class="py-5 px-3 text-red-700 hover:text-red-900 font-bold">
                      YouTube
                    </a>
                  </Link>
                  <Link href="crypto">
                    <a class="py-5 px-3 text-green-700 hover:text-green-900 font-bold">
                      Crypto
                    </a>
                  </Link>
                </div>
              </div>
              {/* Seconday */}
              <div class="hidden md:flex items-center space-x-4">
                <a href="" class="py-5 px-3 rounded hover:text-gray-900">Register</a>
                <a href="" class="py-3 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 rounded hover:text-yellow-800 transition duration-300 font-bold">Post Ads!</a>
              </div>
              {/* Mobile Nav */}
              <div class="md:hidden flex items-center">
                <button class="mobile-menu-button" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
              </div>
            </div>
            {isMenuVisible == true && <div class="mobile-menu md:hidden">
              <a href="" class="block py-2 px-4 text-sm hover:bg-gray-400 rounded transition duration-300">Facebook</a>
              <a href="" class="block py-2 px-4 text-sm hover:bg-gray-400 rounded transition duration-300">YouTube</a>
            </div>}
          </div>
        </nav>
        {home ? (
          <>
            {/* <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
          </>
        ) : (
          <>
            {/* <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}