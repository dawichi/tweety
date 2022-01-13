import React from 'react'
import { User } from '../configs/interfaces'

export const UsersContext = React.createContext({
    user: <User>{},
    setUser: (context) => context,
})