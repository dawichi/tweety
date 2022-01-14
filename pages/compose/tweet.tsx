import React, { useContext } from 'react'
import useFormInput from 'hooks/useFormInput'
import { styles } from 'styles/styles.config'
import { UsersContext } from 'hooks/userContext'
import Image from 'next/image'

const Tweet = () => {

    const { user, setUser } = useContext(UsersContext)

    const tweet = useFormInput('')

	return (
		<div className='flex justify-center items-center'>
			<div className='w-96 m-auto mt-16'>
				<div className={`${styles.foreground} rounded shadow p-4`}>
					<div className='flex flex items-center'>
						<div className='relative w-16 h-16 rounded overflow-hidden mr-5'>
							<Image src={user.avatar} alt={user.username} layout='fill'/>
						</div>
						<div>
							<strong>{user.displayName}</strong>
							<div>@{user.username}</div>
						</div>
					</div>
					<br/>
					<hr/>
					<br/>
					<textarea
						className='bg-white dark:bg-zinc-700 p-2 w-full h-12 rounded shadow outline-0 focus:ring-4 ring-emerald-400 h-48'
						{...tweet.inputProp}
						placeholder='Tweet a message'
					/>
				</div>
			</div>
		</div>
	)
}

export default Tweet
