import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute p-8 flex flex-col justify-between top-0 left-0 h-full w-full '>
          <h1 className='bg-white rounded-full text-xl font-bold h-12 w-12 flex justify-center items-center'>{props.id+1}</h1>
          <div>
            <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor, 
              sit amet consectetur adipisicing elit. Corrupti, atque.
              Lorem ipsum dolor sit amet.
            </p>
            <div className='flex justify-between'>
              <button style={{backgroundColor:props.color}} className=' text-white font-medium 
                  px-8 py-2 rounded-full text-lg'  >{props.tag}</button>
              <button style={{backgroundColor:props.color}} className=' text-white font-medium 
                  px-4 py-2 rounded-full text-lg' ><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>
  )
}

export default RightCardContent