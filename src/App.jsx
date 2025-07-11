import React from 'react'
import Navbar from './Components/navbar/navbar'

export default function App({ tittle, children }) {
  return <>
    <Navbar>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Services</li>
      <li>Blog</li>
    </Navbar>

  </>
}
