import { createContext } from 'react'
import { User } from '../configs/interfaces'

export const UsersContext = createContext({
    user: <User>{},
    setUser: context => context,
})
