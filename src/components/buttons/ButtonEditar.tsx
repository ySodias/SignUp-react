import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
  


const ButtonEditar = () => {
    const navigate = useNavigate()

    const handleEditarAluno = () => {
        navigate('/EditarCadastro')
    }

    return (
        <>
         <Button variant="warning" onClick={handleEditarAluno}> Editar
         </Button>
        </>
        
    )
}
export default ButtonEditar