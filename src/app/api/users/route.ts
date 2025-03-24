import User from "../(models)/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req : any){
    try{
        const body = await req.json()
        const userData = await body.formData
        console.log(userData,"User Data")

        if(!userData.email || !userData.password){
            return NextResponse.json({ message : "Invalid Credential!" },{ status : 400})
        } 
            const duplicate = await User.findOne({ 
            email : userData.email 
        }).lean().exec()
        
        if(duplicate){
            return NextResponse.json({ message : "User Already Exist!" },{ status : 409})
        }
        const hashPassword = await bcrypt.hash(userData.password,10)
        userData.password = hashPassword;
        await User.create(userData)
        return NextResponse.json({ message : "user created!"  },{ status : 200})
        
    }catch(err){
        console.log(err)
        return NextResponse.json({ message : (err as any)?.message ?? "Server Error" , err },{ status : 500})
    }
}