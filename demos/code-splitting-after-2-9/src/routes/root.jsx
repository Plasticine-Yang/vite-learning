import { Form, Link, NavLink, Outlet, redirect, useLoaderData, useNavigation, useSubmit } from 'react-router-dom'

import { createContact, getContacts } from '../contacts.js'
import { useCallback, useEffect, useMemo, useState } from 'react'

export async function loader({ request }) {
  const url = new URL(request.url)
  const q = url.searchParams.get('q') || ''
  const contacts = await getContacts(q)

  return { contacts, q }
}

export async function action() {
  const contact = await createContact()

  return redirect(`/contacts/${contact.id}/edit`)
}

export default function Root() {
  const { contacts, q } = useLoaderData()
  const navigation = useNavigation()
  const submit = useSubmit()

  const [query, setQuery] = useState(q)

  const isSearching = useMemo(() => {
    return navigation.location && new URLSearchParams(navigation.location.search).has('q')
  }, [])

  const handleQueryChange = useCallback((e) => {
    const isFirstSearch = q === null
    setQuery(e.target.value)
    submit(e.currentTarget.form, { replace: !isFirstSearch })
  }, [])

  useEffect(() => {
    setQuery(q)
  }, [q])

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <button>
            <Link to="/" style={{ textDecoration: 'none', color: '#67b779' }}>
              Home
            </Link>
          </button>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              className={isSearching ? 'loading' : ''}
              value={query}
              onChange={handleQueryChange}
            />
            <div id="search-spinner" aria-hidden hidden={!isSearching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) => (isActive ? 'active' : isPending ? 'pending' : '')}
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{' '}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </>
  )
}
