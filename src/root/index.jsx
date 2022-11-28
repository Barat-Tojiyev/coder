import React from 'react'
import { Main } from '../Component/Main'
import { Navbar } from '../Component/Navbar'
import { Context } from '../context'

export const Root = () => {
  return (
    <div>
      <Context>
        <Navbar/>
        <Main/>
      </Context>
    </div>
  )
}
