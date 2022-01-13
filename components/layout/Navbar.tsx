import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import RenderLinks from './RenderLinks'
import Toggle from './Toggle'


// Navbar of the app
export default function Navbar(props) {


    // DARK MODE
    const [darkMode, setDarkMode] = useState(false)
    const theme = darkMode ? 'dark' : 'light'

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setDarkMode(true)
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        document.body.dataset.theme = theme
        if (darkMode) {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode, theme])

    // END DARK MODE

    return (
        <Disclosure as='nav' className='bg-zinc-800 shadow dark:shadow-zinc-700'>
            {({ open }) => (
                <>
                    <div className='container-fluid mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-between h-16'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                {/* Mobile menu button*/}
                                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? <i className='bi bi-x-lg'></i> : <i className='bi bi-list'></i>}
                                </Disclosure.Button>
                            </div>
                            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                                <Link href='/' passHref>
                                    <button className='flex-shrink-0 flex items-center w-11 h-auto relative rounded overflow-hidden'>
										{ props.user
											? <Image src={props.user.avatar} alt='avatar' layout='fill' />
											: <Image src={'/tweety.png'} alt='logo' layout='fill' />
										}
                                    </button>
                                </Link>
                                <div className='hidden sm:block sm:ml-6'>
                                    <div className='flex space-x-4'>
										<RenderLinks />
									</div>
                                </div>
                            </div>
                            <div className='absolute right-0 flex'>
                                <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
                                <div className='flex items-center justify-center ml-10 hidden md:block hover:text-indigo-500'>
                                    <a href='https://github.com/dawichi/tweety' target='_blank' className='text-2xl' rel='noreferrer'>
                                        <i className='bi bi-github'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className='sm:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
							<RenderLinks />
						</div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}



