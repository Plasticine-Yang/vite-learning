import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorPage from './error-page'
import { action as destroyAction } from './routes/destroy'
import Index from './routes/index'
import Root, { action as rootAction, loader as rootLoader } from './routes/root'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: 'contacts/:contactId',
            lazy: () => import('./routes/contact'),
          },
          {
            path: 'contacts/:contactId/edit',
            errorElement: <div>Oops! There was an error when editing.</div>,
            lazy: () => import('./routes/edit'),
          },
          {
            path: 'contacts/:contactId/destroy',
            errorElement: <div>Oops! There was an error when destroying.</div>,
            action: destroyAction,
          },
        ],
      },
    ],
  },
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
)
