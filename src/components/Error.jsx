import React from 'react'
import { useState, useEffect } from 'react'

const Error = ({ children } ) => {
  return (
    <div className=" bg-red-700 text-white rounded-xl font-bold mb-3 py-3 text-center uppercase">
        {children}
    </div>
  )
}

export default Error
