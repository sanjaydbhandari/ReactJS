
const BorderComponent = ({children}) => {
  return (
    <div style={{border:"2px solid gray",borderRadius:"1rem",padding:"1rem",margin:"1rem"}}>
      {children}
    </div>
  )
}

export default BorderComponent
