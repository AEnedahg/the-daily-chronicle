import React from 'react'

function Footer() {
  return (
    <footer className='mt-20 p-4 lg:px-20 flex justify-between max-w-[1440px] mx-auto'>
      <p>The Daily Chronicle</p>
      <p>{new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer