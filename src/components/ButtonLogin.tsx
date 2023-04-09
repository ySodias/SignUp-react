
import { faArrowRightFromBracket, faArrowRightToBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { cookies } from '../providers';


const handleLogout = () => {
    cookies.remove('token')
  }

const ButtonLogin = () => {
    const isLoggedIn = cookies.get('token') ? true : false;
      
    return (
        <>
         {isLoggedIn ? (
            <>
            <a className="px-3 text-decoration-none" href='/Administrador'> <FontAwesomeIcon icon={faGear}></FontAwesomeIcon></a>
            <a className="px-3 text-decoration-none" href='/' onClick={handleLogout}><FontAwesomeIcon  icon={faArrowRightFromBracket}></FontAwesomeIcon></a>
            </>
        ) : (
            <a className="px-3 text-decoration-none" href='/Login'><FontAwesomeIcon  icon={faArrowRightToBracket}></FontAwesomeIcon></a>
        )}
        </>
        
    )
}
export default ButtonLogin