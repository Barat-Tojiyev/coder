import React from 'react'
import { createContext } from 'react'

export const ProductContext=createContext()

export const Context = ({children}) => {
  return (
    <div>
      <ProductContext.Provider>
        {children}
      </ProductContext.Provider>
    </div>
  )
}
