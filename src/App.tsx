import './App.css'
import { Header } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from 'react-ts-loaders/dist';
import { Home } from './AppRoutes';

export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = (props) => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Header />
         <BrowserRouter>
          <Routes>
            <Route path = '/' element={<Home />} />
          </Routes>
         </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
