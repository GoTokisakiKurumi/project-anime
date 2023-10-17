import './style.scss'
import Button from '../../Button'
import * as Icons from 'react-bootstrap-icons'

const HeaderSection = ({ children }) =>
{
  return (
    <header className="container header">
      <figure className='wrapper brand'>
        <img src='./logo.png' alt='logo' loading='lazy'/>  
        <figcaption>pustaka anime</figcaption>
      </figure>
      { children }
      <div className='wrapper search'>
        <form>
          <input id='input_search' type='text' placeholder='search' autoComplete='off' autoFocus='on'/>
          <Icons.Search/>
        </form>
      </div>
      <div className='wrapper button-header'>
        <Button text='sign up' />
        <Button text='sign in' />
      </div>
      <div className='wrapper hamburger'>
        <Icons.Justify/>
      </div>
    </header>
  )
}

export default HeaderSection
