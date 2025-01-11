import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
      
    </div>
  )
}

export default Navbar
