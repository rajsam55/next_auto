import {SignIn}  from "@clerk/nextjs"
import Link from "next/link"




const SignInPage = () => {




  return (

    <>

    <div className="flex flex-col justify-center items-center min-h-screen">

    <div className="absolute top-10 left-10 text-white">

    <Link href= "/">

    Go Back
    
    
    </Link>

    </div>


    <div className="auth-container">

    <SignIn appearance = {{

        elements : {

            rootBox : "mx-auto",
            card : "shadow-xl"
        }




    }}
    
    
    
    
    />


    </div>

    </div>


    
    </>



    
  )
}

export default SignInPage