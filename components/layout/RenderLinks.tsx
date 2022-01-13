import { useRouter } from 'next/router'
import Link from 'next/link'
import { navigation } from 'configs'

// Links, used both in desktop and mobile view
const RenderLinks = () => {
    const router = useRouter()

    return (
        <>
            {navigation.map((item, idx) => (
                <Link href={item.url} key={idx} passHref>
                    <button
                        key={item.name}
                        className={
                            'block px-3 py-2 rounded-md text-base font-medium ' +
                            (router.pathname === item.url
                                ? 'bg-emerald-400 dark:bg-zinc-900'
                                : 'dark:text-zinc-300 hover:bg-emerald-400 hover:dark:bg-zinc-700')
                        }
                    >
                        {item.name}
                    </button>
                </Link>
            ))}
        </>
    )
}

export default RenderLinks
