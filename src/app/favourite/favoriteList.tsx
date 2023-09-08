"use client"
import { useEffect, useState } from "react"
import { MyImage } from "./page"
import View from "./view"

const FavoriteList = ({resources}:{resources:MyImage[]}) => {
    const [initialState,setInitialState]=useState(resources)
    useEffect(()=>{
        setInitialState(resources)
    },[resources])
  return (
      <>
  
    <div className='columns-4 gap-4 mx-auto p-5 space-y-4 '>
            {initialState.map((item,i)=>{
                return <div key={i} className='break-inside-avoid'>
                    <View src={item.public_id} tag={item.tags} fun={(public_id:string)=>{
                        setInitialState((current)=>
                        current.filter((val)=>val.public_id!==public_id))
                    }}  />
                    </div>
            })}

    </div>
</>
  )
}
export default FavoriteList
