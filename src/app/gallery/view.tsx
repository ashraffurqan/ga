"use client"

import { CldImage } from "next-cloudinary"

const View = ({src}:{src:string}) => {
  return (
    <CldImage
  width="960"
  height="600" 
  src={src}
  sizes="100vw"
  alt="Description of my image"
/>
  )
}

export default View