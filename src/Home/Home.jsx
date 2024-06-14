import { useState, useEffect } from 'react';
import axios from 'axios';


import Products from '../components/Products/Products';
import SearchInput from '../components/SearchInput/SearchInput';

import * as S from './HomeStyles'

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const api = 'https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos'
  


  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(api);
        setAllProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllProducts()
  }, [])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText.length > 2) {
        fetchSearchProducts(searchText);
      } else {
        setProducts([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);



  const fetchSearchProducts = async (value) => {
    try {
      const response = await axios.get(`${api}?name=${value}|desciption=${value}`);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <S.Main>
      <SearchInput value={searchText} 
      onChange={setSearchText} />
      {searchText.length > 2 ? (
        <Products products={products} />
      ) : (
        <Products products={allProducts} />
      )}
    </S.Main>
  )
}

export default Home
