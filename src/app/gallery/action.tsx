"use server"
import cloudinary  from "cloudinary"
import { revalidatePath } from "next/cache"
export async function AddTags(publiceIdid:string, fav:boolean){
    if(fav){
        await  cloudinary.v2.uploader.remove_tag("favourite",[publiceIdid])
    }else{

        await  cloudinary.v2.uploader.add_tag("favourite",[publiceIdid])
    }
    await new Promise ((resolve )=>{
        setTimeout(resolve),1000
        revalidatePath("/gallery")
    })
    }