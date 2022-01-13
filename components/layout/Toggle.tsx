import { Switch } from '@headlessui/react'

// Toggle to switch between dark and light mode
const Toggle = ({ darkMode, setDarkMode }) => {
    return (
        <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={
                'relative inline-flex flex-shrink-0 h-[34px] w-[58px] border-2 dark:border-transparent border-orange-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 bg-orange-50 dark:bg-zinc-900'
            }
        >
            <span className='sr-only'>Use setting</span>
            <span
                aria-hidden='true'
                className={`${
                    darkMode ? 'translate-x-6 bg-zinc-700' : 'translate-x-0 bg-orange-200'
                } pointer-events-none inline-block h-[30px] w-[30px]
				rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200 flex justify-center items-center`}
            >
                {darkMode ? <i className='bi bi-moon-fill text-white'></i> : <i className='bi bi-sun-fill text-black'></i>}
            </span>
        </Switch>
    )
}

export default Toggle
