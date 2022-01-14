import { useContext } from 'react'
import { UsersContext } from 'hooks/userContext'
import { styles } from 'styles/styles.config'
import { loginWithGitHub } from 'configs/firebase/client'

const Home = () => {
    const { user, setUser } = useContext(UsersContext)

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className={`${styles.foreground} rounded shadow flex flex-col justify-center items-center p-8`}>
                <h1 className='text-2xl mb-5'>Tweety</h1>
                <img src='/tweety.png' className='w-24 rounded' alt='tweety' />
                <p className='text-center my-5'>
                    Talk with other developers <br /> about development
                </p>
                {user === undefined && <div>undefined uwu</div>}
                {user === null && (
                    <button className='bg-zinc-800 text-white rounded-full px-6 py-2 hover:bg-zinc-900' onClick={() => loginWithGitHub()}>
                        <i className='bi bi-github'></i> Login with GitHub
                    </button>
                )}
                {user && (
                    <div>
                        <img src={user.avatar} />
                        <strong>{user.displayName}</strong> ({user.username}){user.email}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home
