import { useEffect, useState } from 'react'

const Feed = () => {
    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        fetch('/api/statuses/timeline')
            .then(res => res.json())
            .then(setTimeline)
    }, [])

    console.log(timeline)

    return (
        <div>
            {timeline.map((tweet, idx) => (
                <div key={idx}>
                    <strong>{tweet.username}</strong>
                    <p>{tweet.message}</p>
                </div>
            ))}
        </div>
    )
}

export default Feed
