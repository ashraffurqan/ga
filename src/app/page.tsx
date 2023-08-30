"use client"
import { CldUploadButton } from 'next-cloudinary'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface uplaodImage{
  event:"success",
  info:{public_id:string} ,
  publiceId:string
}
export default function Home() {
  const [imageId,setimageId]=useState("ad1mlhugbaxq2dkfrid9")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

{/* upload Image */}
<CldUploadButton uploadPreset="dgv2lgrso" onUpload={(result) => { 
  let res =result as uplaodImage /* upload image humn ne type dene ke lye use kra hai*/
setimageId(res.info.public_id)
} }/>

 {/* view Image */}
<CldImage
  width="400"
  height="400" 
  src={imageId}
  sizes="100vw"
  alt="Description of my image"
/>
    </main>
  )
}
