import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error ?(<p>
        <i>{error.statusText || error.message}</i>
      </p>) : (<p>Unknown error</p>)}
      <img src="../ErrorPage/error.jpg" alt="Imagem como o número 404 e algumas nuvens simbolizando erro na página" />
    </div>
  )
}

export default ErrorPage

