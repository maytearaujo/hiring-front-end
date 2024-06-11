import { useRouteError } from "react-router-dom";
import React from 'react'


const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src="./error.jpg" alt="Imagem como o número 404 e algumas nuvens simbolizando erro na página" />
    </div>
  )
}

export default ErrorPage

