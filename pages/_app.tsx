import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer, Navbar } from '../components'
import { styles } from '../styles/styles.config'
import 'tailwindcss/tailwind.css'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Tweety</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='Twitter clone with React for education purposes' />
                {/* Bootstrap Icons */}
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css' />
                {/* Animate CSS */}
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' />
            </Head>

            <header style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Navbar />
            </header>

            <main className={`pb-20 dark:text-white min-h-screen ${styles.background}`}>
                <Component {...pageProps} />
            </main>

            <Footer />
        </>
    )
}
