import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
      <div className='border-b px-8 py-3'>India</div>
      <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-x-7 sm:space-y-0'>
           <ul className='flex items-center space-x-6'>
              <li className='link'>About</li>
              <li className='link'>Adevertising</li>
              <li className='link'>Business</li>
              <li className='link'>New Search Works</li>

           </ul>
           <ul className='flex items-center space-x-6'>
              <li className='link'>Privacy</li>
              <li className='link'>Terms</li>
              <li className='link'>Setting</li>

           </ul>


      </div>
      </footer>
    </>
  )
}

export default Footer
