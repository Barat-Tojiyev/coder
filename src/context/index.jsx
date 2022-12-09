import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
import { Data } from '../data/Data'
import { reducer } from './reducer'

export const ProductContext=createContext()

export const Context = ({children}) => {
  const [state,dispatch]=useReducer(reducer,
  {
    product:Data,
    basket:[],
    likes:[],
    
    korzinka:false
  })
  
  return (
    <div>
      <ProductContext.Provider value={[state,dispatch]}>
        {children}
      </ProductContext.Provider>
    </div>
  )
}
