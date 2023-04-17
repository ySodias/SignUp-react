// @ts-nocheck
import './App.css'
import { Header } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import { Route } from "react-router";
import { BrowserRouter, Routes } from 'react-router-dom';
import Loader from 'react-ts-loaders/dist';
import { Dashboard, Home, Alunos, Cadastro, Login, Treino, CriarTreino, EditarCadastro, Administrador, CriarAdministrador, EditarAdministrador } from './AppRoutes';
import { Footer } from './components';
import EditarTreino from './pages/EditarTreino';
export interface IApplicationProps {}
const App: React.FC<IApplicationProps> = (props) => {
  return (
    <div>
      <Suspense fallback={<Loader />} >
        <Header />
         <BrowserRouter>
         <Routes>
            <Route path = '/' element={<Home />} />
            <Route path = '/dashboard' element={<Dashboard />} />
            <Route path = '/alunos' element={<Alunos />} />
            <Route path = '/cadastro' element={<Cadastro />} />
            <Route path = '/editarCadastro' element={<EditarCadastro />} />
            <Route path = '/login' element={<Login />} />
            <Route path = '/treino' element={<Treino />} />
            <Route path = '/criartreino' element={<CriarTreino />} />
            <Route path = '/administrador' element={<Administrador />} />
            <Route path = '/editarTreino' element={<EditarTreino />} />
            <Route path = '/criarAdministrador' element={<CriarAdministrador />} />
            <Route path = '/editarAdministrador' element={<EditarAdministrador />} />
          </Routes>
         </BrowserRouter>
         <Footer />
      </Suspense>
    </div>
  )
}

export default App
