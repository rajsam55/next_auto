import { Button } from "@/components/ui/button"
import { Card,CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card"
import { Badge, CalendarIcon, MailIcon } from "lucide-react"

const providers = [

    {

        key : "gmail",

        name : "gmail",

        description : "read and manage your emails",

        icon : MailIcon,

        integrations : true





    },

    {


     key : "google-calendar",

        name : "google-clalendar",

        description : "view and manage your calendar events",

        icon : CalendarIcon,

        integrations : true

    }   


]


const Settings = () => {

    
  return (


    <div className="text-center mt-20 text-red-500">


    <h1 className = " text-red-500">Dashboard</h1>
    <p className="">Manage your integrations and preferences!</p>



    <Card>

    <div className="">

    <h1 className="">Settings</h1>

    <p className="">Manage your Integrations and Preferences</p>


    </div>

    <CardHeader>

    <CardTitle>Google Integrations</CardTitle>

    <CardDescription>
        
    Connect your google account to get AI assistance


    </CardDescription>
    

    </CardHeader>

    <CardContent>

    {providers.map((provider)=>(


        <div className="" key = {provider.key}>


        <div className="">

        <provider.icon  className = "" />

        <div className="">

        <span className="">{provider.name}</span>

        <p className=""> {provider.description}</p>   

        {false ? <Badge>Connected</Badge>
        
        
        
        :

        <Button >

        <a href= {`/api/auth/google?provider = ${provider.key} `}>


        Connect


        </a>


        </Button>
        
        
        
        
        }   






        </div>












        </div>


        
     


        </div>





    ))}



    </CardContent>


    </Card>




    </div>

    )
}

export default Settings

    