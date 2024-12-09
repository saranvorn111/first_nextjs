import React from 'react'

// export default async function page({params} :{params: {id: string}}) {
//     const {id} = await params;
//   return (
//     <div className='container mx-auto px-4 py-8 mt-20'>Product {id}</div>
//   )
// }


 async function page({params}: {params : {id: string}}) {
    const {id} = await params;

  return (
    <div className='container mx-auto px-4 py-8 mt-20'>Product Param {id}</div>
  )
}

export default page