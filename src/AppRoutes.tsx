import React from 'react';

//Lazy Loading for pages and components
export const Home = React.lazy(() => {
  return Promise.all([
    import('./pages/Home'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Dashboard = React.lazy(() => {
  return Promise.all([
    import('./pages/Dashboard'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Alunos = React.lazy(() => {
  return Promise.all([
    import('./pages/Alunos'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Cadastro = React.lazy(() => {
  return Promise.all([
    import('./pages/Cadastro'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Login = React.lazy(() => {
  return Promise.all([
    import('./pages/Login'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Treino = React.lazy(() => {
  return Promise.all([
    import('./pages/Treino'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const CriarTreino = React.lazy(() => {
  return Promise.all([
    import('./pages/CriarTreino'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const EditarCadastro = React.lazy(() => {
  return Promise.all([
    import('./pages/EditarCadastro'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Administrador = React.lazy(() => {
  return Promise.all([
    import('./pages/Administrador'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const EditarTreino = React.lazy(() => {
  return Promise.all([
    import('./pages/EditarTreino'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const CriarAdministrador = React.lazy(() => {
  return Promise.all([
    import('./pages/CriarAdministrador'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const EditarAdministrador = React.lazy(() => {
  return Promise.all([
    import('./pages/EditarAdministrador'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const AlunosTreinos = React.lazy(() => {
  return Promise.all([
    import('./pages/AlunosTreinos'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Planos = React.lazy(() => {
  return Promise.all([
    import('./pages/Planos'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});


