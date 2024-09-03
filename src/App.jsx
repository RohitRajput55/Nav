import React, { useState } from 'react';
import { Transition } from '@headlessui/react';


const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropOpen, setDropOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const dropToggle = () => {
    setDropOpen(!isDropOpen)
  }
  return (
    <>
    <nav className='bg-gray-900 p-5'>
    <div className='container flex items-center justify-between'>
      <div className='text-white text-lg font-bold'>Y&H Cargo

      </div>
      <div className='space-x-5 hidden md:flex'>
      <a className='text-gray-200 hover:text-white' href="">Home</a>
      <a className='text-gray-200 hover:text-white' href="">About</a>
      <div className='relative '>
      <button onClick={dropToggle} className='text-gray-200 flex items-center'>Services
      <svg
                  className={`w-4 h-4 ml-2 transition-transform transform ${
                    isDropOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M19 14l-7-7-7 7"
  />
      </svg>

                
      </button>
      <Transition
                  show={isDropOpen}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  className="absolute mt-5  bg-gray-900 shadow-lg"
                >
<div className='py-1 w-32'>
<a className='text-gray-200 px-2 py-2 block ' href="">Service 1</a>
<a className='text-gray-200 px-2 py-2 block ' href="">Service 2</a>
</div>

                </Transition>
      </div>
      <a className='text-gray-200 hover:text-white' href="">Blog</a>
      <a className='text-gray-200 hover:text-white' href="">Contact</a>
      </div>
      <div className='md:hidden'>
        <button onClick={toggle} className='text-white'>
        <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
        </button>
      </div>
    </div>
    <Transition
     show={isOpen}
     enter="transition ease-out duration-300"
     enterFrom="transform opacity-0 -translate-y-5"
     enterTo="transform opacity-100 translate-y-0"
     leave="transition ease-in duration-200"
     leaveFrom="transform opacity-100 translate-y-0"
     leaveTo="transform opacity-0 -translate-y-5"
    >
    {() => (     <div className="sm:hidden mt-4 bg-slate-900">
              <a className="text-gray-300 py-2 hover:text-white block" href="/">
                Home
              </a>
              <a className="text-gray-300 py-2 hover:text-white block" href="/">
                About
              </a>
              <a className="text-gray-300 py-2 hover:text-white block" href="/">
                Service
              </a>
              <a className="text-gray-300 py-2 hover:text-white block" href="/">
                Blog
              </a>
              <a className="text-gray-300 py-2 hover:text-white block" href="/">
                Contact
              </a>
            </div>)}
    </Transition>
    </nav>
    </>
  )
}

export default App
