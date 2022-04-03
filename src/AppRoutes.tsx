import React from 'react';

//Lazy Loading for pages and components
export const Home = React.lazy(() => {
  return Promise.all([
    import('./pages/Dashboard'),
    new Promise(resolve => setTimeout(resolve, 500))
  ])
  .then(([moduleExports]) => moduleExports);
});