import { Button } from "@/components/ui/button";
import Navbar from "@/components/web/navbar";
import { PricingTable } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10 mx-4">

      <Navbar/>

      
      <div className="flex flex-col justify-center items-center mt-6">

      <h1 className="text-2xl text-red-400">Hello World</h1>
      <Button className = "text-red-500 text-xl">Click Me</Button>

      </div>

      <section className = "text-center text-white">

        <h2 className="text-blue-500">Simple Transparent Pricing</h2>

        <div className="bg-black text-red-500">

        <PricingTable apperance= {{

          variables : {

            colorBackground : "#f4f4f4"


          }



        }} />
        </div>
        

        





      </section>






    </div>
    
    

  );
}
