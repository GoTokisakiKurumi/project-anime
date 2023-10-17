import './style.scss'

const Navbar = () =>
{
  return (
    <>
      <div className='container navbar-section'>
        <nav className='wrapper nav'>
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">news</a></li>
            <li><a href="#">anime top</a></li>
            <li><a href="#">anime schedule</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

 export default Navbar
