import BorderComponent from './BorderComponent'
import Image from './Image'
const ProfileCard = ({src, name}) => {
  return (
    <BorderComponent>
      <div className='profilecard'>
        <Image src={src}/>
        <p>{name}</p>
    </div>
    </BorderComponent>
  )
}

export default ProfileCard
