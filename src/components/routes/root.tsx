import React from 'react'
import { Link } from "react-router-dom";

import * as S from './rootStyles'

const root = () => {
  return (
    <>
      <S.Nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
            {/* <a href={`/`}>Home</a> */}
            {/* <Link to={`contacts/1`}>Your Name</Link> */}
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact</Link>
          </li>
          <li>
            <Link to={`/shop`}>Shop</Link>
          </li>
          {/* <li>
            <Link to={`/error`}>Shop</Link>
          </li> */}
        </ul>
      </S.Nav>
      <div id="detail"></div>
    </>
  )
}

export default root