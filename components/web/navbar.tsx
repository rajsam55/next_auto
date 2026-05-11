import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'

const Navbar = () => {










  return (



    <div className='flex justify-between items-center mx-auto max-w-7xl'  >
        <div className='flex items-center gap-2'>
            <Link href='/' >
                <h1 className='text-xl text-white mx-6'>ExecOS</h1>
            </Link>
        </div>

        <div className='flex items-center gap-2 px-4'>

        <Show when= "signed-out">

        <SignUpButton>
            <Button >Sign Up</Button>
        </SignUpButton>

        <SignInButton>
            <Button>Sign In</Button>
        </SignInButton>

        </Show>        

        <Show when= "signed-in">

        <Link href= "/dashboard"><Button className = "text-blue-300 mt-2">Dashboard</Button></Link>

        <UserButton/>

        
        </Show>
        
           
        </div>         
        
    </div>
  )
}

export default Navbar

