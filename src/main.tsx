import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './tailwind.css'
import Carry from './Carry.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App
  },
  {
    path: '/test',
    element: <div>Test Page</div>
  },
  {
    path: '/carry',
    Component: Carry,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
