import * as S from './HomeStyles'
// import Products from '../components/Products/Products'
import SearchInput from '../components/SearchInput/SearchInput'
import { useState } from 'react'

const Home = () => {

  const [textSearch, setTextSearch] = useState('');
  // console.log(text)

  return (
    <S.Main>
      <h2>Products</h2>

      <SearchInput
        value={textSearch} 
        onChange={(setTextSearch)} 
      />
      {/* <Products /> */}
    </S.Main>
  )
}

export default Home
