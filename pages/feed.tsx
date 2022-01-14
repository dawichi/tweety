import Image from 'next/image'
import { useEffect, useState } from 'react'
import { styles } from 'styles/styles.config'

const Feed = () => {
    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        fetch('/api/statuses/timeline')
            .then(res => res.json())
            .then(setTimeline)
    }, [])

    console.log(timeline)

    return (
        <div className='container mx-auto p-4'>
			<div className='grid grid-cols-3 gap-4'>
				{timeline.map(tweet => (
					<article key={tweet.id} className={`${styles.foreground} rounded shadow p-4 flex`}>
						<div className='flex flex-col items-center'>
							<div className='relative w-16 h-16 rounded overflow-hidden'>
								<Image src={tweet.avatar} alt={tweet.username} layout='fill'/>
							</div>
							<span>@{tweet.username}</span>
						</div>
						<div className='pl-4'>
							<p>
								<strong>{tweet.name}</strong> 
							</p>
							<p>{tweet.message}</p>
						</div>
					</article>
				))}
			</div>
        </div>
    )
}

export default Feed
