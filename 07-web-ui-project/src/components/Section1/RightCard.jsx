
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative p-4 w-80 rounded-4xl">
        <img className='h-full w-full rounded-2xl object-cover' src={props.img} alt="" />
        <RightCardContent color={props.color} id={props.id} tag={props.tag}/>

    </div>
  )
}

export default RightCard