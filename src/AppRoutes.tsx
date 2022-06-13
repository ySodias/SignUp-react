import React from 'react';

//Lazy Loading for pages and components
export const Home = React.lazy(() => {
  return Promise.all([
    import('./pages/Home'),
    new Promise(resolve => setTimeout(resolve, 500))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Dashboard = React.lazy(() => {
  return Promise.all([
    import('./pages/Dashboard'),
    new Promise(resolve => setTimeout(resolve, 500))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Pagamentos = React.lazy(() => {
  return Promise.all([
    import('./pages/Pagamentos'),
    new Promise(resolve => setTimeout(resolve, 500))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Cadastro = React.lazy(() => {
  return Promise.all([
    import('./pages/Cadastro'),
    new Promise(resolve => setTimeout(resolve, 500))
  ])
  .then(([moduleExports]) => moduleExports);
});