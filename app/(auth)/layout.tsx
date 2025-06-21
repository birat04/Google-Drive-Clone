import React from 'react'
import Image from 'next/image'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen'>
      <section className='bg-brand p-10'>
        <div>
          <Image src="/favicon.ico" 
            alt="logo" 
            width={16} 
            height={16} 
            className='h-auto'
          />
          <div className='space-y-5 text-white'>
            <h1 className='h1'>Manage your files with ease</h1>
            <p className='body-1'>
              ZynkDrive is a free and open-source file manager that allows you to manage your files and folders in a simple and intuitive way.
            </p>
          </div>
        </div>  
      </section>
      {children}
    </div>
  )
}

export default Layout