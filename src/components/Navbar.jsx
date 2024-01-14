import { useNavigate } from 'react-router-dom'
import { LogoIcon } from '../icons/icons'
import '../styles/Navbar.css'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='nav-container'>
      <nav className='nav'>
        {/* redireccionamos al index con click en el logo a traves del path con react router dom */}
        <div className="logo-container" onClick={() => navigate('./')}>
          <LogoIcon />
        </div>
        <div className="title-container" onClick={() => navigate('./')}>
          <h1>Crypteando Ando</h1>
        </div>
      </nav>
    </div>
  
  )
}

export default Navbar
