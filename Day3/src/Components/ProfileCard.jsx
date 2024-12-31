import Image from './Image'
const ProfileCard = ({src, name}) => {
  return (
    <div className=''>
        <Image path={src}/>
        <p>{name}</p>
    </div>
  )
}

export default ProfileCard
