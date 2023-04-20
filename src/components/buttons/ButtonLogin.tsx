
import { faArrowRightFromBracket, faArrowRightToBracket, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const handleLogout = () => {
    sessionStorage.removeItem('token')
  }

const ButtonLogin = () => {
    const isLoggedIn = sessionStorage.getItem('token') ? true : false;
   
    return (
        <>
         {isLoggedIn ? (
            <>
            <a className="px-3 text-decoration-none" href='/' onClick={handleLogout}><FontAwesomeIcon  icon={faArrowRightFromBracket}></FontAwesomeIcon></a>
            </>
        ) : (
            <a className="px-3 text-decoration-none" href='/Login'><FontAwesomeIcon  icon={faArrowRightToBracket}></FontAwesomeIcon></a>
        )}
        </>
        
    )
}
export default ButtonLogin