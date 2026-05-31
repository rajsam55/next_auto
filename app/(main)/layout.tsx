import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { auth} from '@clerk/nextjs/server'
import { currentUser } from '@clerk/nextjs/server'
import { HomeIcon, MailIcon, SettingsIcon, ZapIcon } from 'lucide-react'
import React from 'react'
import Link from "next/link"

const MainLayOut = async({children}:{children: React.ReactNode}) => {



const {userId,has}  =  await auth()


if(!userId){

  throw new Error ("no user found")
}

const isPaidUser = has({plan : "pro_plan"})

const clerkUser = await currentUser()




const navItems = [

  {
    label : "Dashboard",
    href : "/dashboard",
    icon  : HomeIcon


  },

  
  {

    label : "Monitoring",
    href : "/monitoring",
    icon  : MailIcon



  },

  {

    label : "Settings",
    href : "/settings",
    icon  : SettingsIcon



  }







]








  return (


    
    <div className = "">

      {children}

    <div className="text-red-500 mx-10">

      <h2 className="py-6">ExecOs</h2>

    <div className="">

    {navItems.map(item=>(

      

      <Link href = {item.href} className="flex " key = {item.href}>

        

        

        <item.icon />
        

        <Button>

        {item.label}



        </Button>

        
        


      </Link>

    ))}


    </div>

    <div className="mt-70">

      <p className="">Get Your AI Agents</p>


    {isPaidUser  &&

    <>

    <div className="flex mt-6 gap-50">

      

      <UserButton/>

      


      <Button variant = "ghost" className = "text-red-500">
      <Link href= "#/pricing"></Link>

      <span className="">Pro</span>



      </Button>   

      </div>

    </>    
    
    
    
    
    }

    </div>






    </div>
      
      
      
      
      
      






    </div>
  )
}

export default MainLayOut