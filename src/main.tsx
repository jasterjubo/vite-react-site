import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Landing Page</div>
  },
  {
    path: '/test',
    element: <div>Test Page</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
