import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);

  return (
     <div id='right' className='h-full rounded-4xl flex overflow-x-auto  w-2/3 p-4 '>
        
        {props.users.map(function(elem,idx){

          return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent