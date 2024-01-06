import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorPage from './error-page'
import Contact, { action as contactAction, loader as contactLoader } from './routes/contact'
import { action as destroyAction } from './routes/destroy'
import EditContact, { action as editAction } from './routes/edit'
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
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            errorElement: <div>Oops! There was an error when editing.</div>,
            loader: contactLoader,
            action: editAction,
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
