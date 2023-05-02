import {createContext, useState} from 'react'
import useFetch from '../hooks/useFetch'
  
export const DatasContext = createContext();

export const DatasContextProvider = ({children}) => {
    const {getPost, users} = useFetch();

    return (
        <DatasContext.Provider value={{getPost, users}}>
            {children}
        </DatasContext.Provider>
    )
}
