import React from 'react'
import { Link } from "react-router-dom";

const root = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href={`/`}>Home</a>
            {/* <Link to={`contacts/1`}>Your Name</Link> */}
          </li>
          <li>
            <a href={`/about/`}>About</a>
          </li>
          <li>
            <a href={`/contact`}>Contact</a>
          </li>
          <li>
            <a href={`/shop/`}>Shop</a>
          </li>
        </ul>
      </nav>
      <div id="detail"></div>
    </>
  )
}

export default root