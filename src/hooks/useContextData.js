import {useContext} from 'react'
import { DatasContext } from '../context/DatasContext'

const useContextData = () => {
    const context = useContext(DatasContext)
  return context;
}

export default useContextData
