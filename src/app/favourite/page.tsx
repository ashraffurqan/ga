
import React from 'react'

import cloudinary from 'cloudinary';
import View from '../gallery/view';
import FavoriteList from './favoriteList';

export interface MyImage {
    public_id: string,
    tags:string[],

}
const Page = async () => {
   
    let res = await cloudinary.v2.search
        .expression("resource_type:image AND tags=favourite")
        .sort_by('created_at', 'desc')
        .max_results(50)
        .with_field("tags")
        .execute() as { resources: MyImage[] }
        

    return (
        <>
        <div className='flex items-center justify-between py-4 px-5'>
        <h2 className="text-3xl font-semibold tracking-tight"> Favourite</h2>

       
    </div>
        <FavoriteList resources={res.resources} />
        </>
   )   
}

export default Page