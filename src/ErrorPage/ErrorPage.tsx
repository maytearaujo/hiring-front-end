import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

import * as S from './ErrorPageStyles'

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <S.Main>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error ?(<p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>) : (<p>Unknown error</p>)}
      <img src="../../src/ErrorPage/error.jpg" alt="Imagem como o número 404 e algumas nuvens simbolizando erro na página" />
      <S.LinkBackHome>
          <Link to="/">Back to Home</Link>
        </S.LinkBackHome>
    </S.Main>
  )
}

export default ErrorPage

