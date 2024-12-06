import React from 'react'

const CurrFileStatus = () => {
    return (
        <div className='w-1/2 h-1/2 border-2  border-black'>
            
            <h1 className='text-3xl font-bold m-4 pb-6'>Current File Status</h1>

            <div className='flex-col m-10 '>
                <h1 className='text-xl py-4'>Filename : <span className='font-semibold'>Helix_Wireless_Inc-2024_12_05-18-29-09_data.csv</span></h1>
                <h1 className='text-xl py-4'>File Load DateTime : <span className='font-semibold'>	2024-12-05 15:50:01 </span></h1>
            </div>

            <div className='flex m-10'>
                <div className='w-10 h-10 my-4 rounded-full bg-green-500 border border-slate-300'>&nbsp;</div>
                <div className='w-10 h-10 my-4 mx-2 rounded-full bg-yellow-500 border border-slate-300'>&nbsp;</div>
                <div className='w-10 h-10 my-4 mx-2 rounded-full bg-red-500 border border-slate-300'>&nbsp;</div>
                <div className='w-10 h-10 my-4 mx-2 rounded-full bg-white border border-slate-300'>&nbsp;</div>
            </div>

        </div>
    )
}

export default CurrFileStatus