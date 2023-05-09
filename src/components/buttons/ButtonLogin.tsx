
import { faArrowRightFromBracket, faArrowRightToBracket, faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from 'csstype';

const spanStyle: CSS.Properties = {
    textTransform: 'capitalize'
}

const handleLogout = () => {
    sessionStorage.removeItem('token')
  }

const ButtonLogin = () => {
    const isLoggedIn = sessionStorage.getItem('token') ? true : false;
    const nome = sessionStorage.getItem('nome')
   
    return (
        <>
         {isLoggedIn ? (
            <>
            <div className='px-2'>
                <a href='/Administrador' className="px-2"><FontAwesomeIcon  icon={faUser}></FontAwesomeIcon></a>
                <span style={spanStyle}>{ nome }</span>
            </div>

            <a className="px-3 text-decoration-none" href='/' onClick={handleLogout}><FontAwesomeIcon  icon={faArrowRightFromBracket}></FontAwesomeIcon></a>
            </>
        ) : (
            <a className="px-3 text-decoration-none" href='/Login'><FontAwesomeIcon  icon={faArrowRightToBracket}></FontAwesomeIcon></a>
        )}
        </>
        
    )
}
export default ButtonLogin