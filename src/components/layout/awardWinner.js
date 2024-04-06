import React from 'react'

const AwardWinner = ({ show }) => {
    return (
        <div className={`fixed h-48 w-16 bg-blue-100 bottom-20 left-0 flex justify-center items-center ${show ? "left-0" : "-left-[56px] lg:-left-12 hover:left-0"} duration-300 transition-all`}>
            <div className='flex flex-col justify-center items-center leading-tight'>
                <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress' className='h-7 mb-2' />
                <p className='text-[7px] text-center font-semibold'>Created</p>
                <p className='text-[7px] text-center font-semibold mb-2'>By</p>
                <h1 className='text-center font-bold text-xs'>🏆</h1>
                <h1 className='text-center font-bold text-xs'>V</h1>
                <h1 className='text-center font-bold text-xs'>A</h1>
                <h1 className='text-center font-bold text-xs'>I</h1>
                <h1 className='text-center font-bold text-xs'>D</h1>
                <h1 className='text-center font-bold text-xs'>I</h1>
                <h1 className='text-center font-bold text-xs'>K</h1>
            </div>
        </div>
    )
}

export default AwardWinner