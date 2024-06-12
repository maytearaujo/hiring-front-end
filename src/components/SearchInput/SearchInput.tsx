import { useState, useEffect } from "react";
import axios from "axios";

const SearchInput = ({ value, onChange }) => {

  const [products, setProducts] = useState([]);
  // const [text, setText] = useState('')
  const api = 'https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos/';

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (value.length > 2) {
        fetchSearchProducts();
      } else {
        setProducts([])
      }
    }, 300);
  return () => clearTimeout(delayDebounceFn);
}, [value]);


  const fetchSearchProducts = async () => {
    try {
      // const response = await axios.get(`${api}?desciption=${value}`);
      // const response = await axios.get(`${api}?desciption=${value}&name=${value}`);
      const response = await axios.get(`${api}?desciption=${value}|name=${value}`);
      setProducts(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  

  return (
    <>
      <input
        type='search'
        value={value}
        onChange={(e) => onChange(e.target.value)} />

      <div>
        <div>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id}>
                <div>
                  <img src={product.avatar} alt={product.name} />


                </div>
                <h3>{product.name}</h3>
                <p>{product.desciption}</p>
                <p>{product.price}</p>
              </div>
            ))
          ) : (
            <div>
              <span>Nenhuma consulta encontrada</span>
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default SearchInput

