
import { NextRequest, NextResponse } from "next/server"
import {auth} from "@clerk/nextjs/server"
import { runAgent } from "@/lib/agent"
import { BaseNextResponse } from "next/dist/server/base-http"


export async function POST (req : NextRequest, res:NextResponse){


    const isCron = await process.env.CRON_SECRET

    if(!isCron){

        const {userId ,clerkId}  =  await auth()

        if(!clerkId) {
    
            return NextResponse.json({message : "not authorized"})
        }

        const user = await getUserByClerkId(clerkId)

        if(!user){

            return NextResponse.json({message : "user not found"})

        }

        const result =  await runAgent(user.id)

        if(!user.agentEnabled){

            return NextResponse.json({error : "agent not enabled", status : 400})


            return NextResponse.json({message : ""})

        }




        return NextResponse.json({message : "agent run successful", success : result})





        

    }

   












}