import './App.css'
import { Header } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from 'react-ts-loaders/dist';
import { Dashboard, Home, Pagamentos, Cadastro } from './AppRoutes';
import { Footer } from './components';

export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = (props) => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Header />
         <BrowserRouter>
          <Routes>
            <Route path = '/' element={<Home />} />
            <Route path = '/dashboard' element={<Dashboard />} />
            <Route path = '/pagamentos' element={<Pagamentos />} />
            <Route path = '/cadastro' element={<Cadastro />} />
          </Routes>
         </BrowserRouter>
         <Footer />
      </Suspense>
    </div>
  )
}

export default App
