/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { loginWithGitHub } from '../firebase/client'
import { styles } from '../styles/styles.config'

const Home = () => {

	const handleClick = async () => {
		const user = await loginWithGitHub()
		console.log(user)
	}

	return (
		<div className='min-h-screen flex justify-center items-center'>
			<div className={`${styles.foreground} rounded shadow flex flex-col justify-center items-center p-8`}>
				<h1 className='text-2xl mb-5'>Tweety</h1>
				<img src='/tweety.png' className='w-24 rounded' alt='tweety' />
				<p className='text-center my-5'>Talk with other developers <br/> about development</p>
				<button
					className='bg-zinc-800 text-white rounded-full px-6 py-2 hover:bg-zinc-900'
					onClick={handleClick}
				>
					<i className="bi bi-github"></i> Login with GitHub
				</button>
			</div>
		</div>
	)
}

export default Home
