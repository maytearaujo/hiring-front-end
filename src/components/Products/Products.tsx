import axios from "axios";
import { useEffect, useState } from "react";

import * as S from './ProdutcsStyles'

const Products = () => {
    const [products, setProducts] = useState([]);
    const api = 'https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos/';
    
    useEffect(() => {
        fetchProducts();
    }, []);
   
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${api}`);
            // const response = await axios.get(`https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos/?desciption=chair`);
            console.log(response)
            setProducts(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <S.DivProducts>
            <S.DivProduct>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id}>
                            <S.DivAvatar>
                                <img src={product.avatar} alt={product.name} />


                            </S.DivAvatar>
                            <h3>{product.name}</h3>
                            <p>{product.desciption}</p>
                            <p>{product.price}</p>
                            {/* <label>{produto.id}</label> */}
                            {/* <td>{produto.createdAt}</td> */}
                            {/* <td>{produto.avatar}</td> */}
                        </div>
                    ))
                ) : (
                    <div>
                        <span>Nenhuma consulta encontrada</span>
                    </div>
                )}
            </S.DivProduct>

        </S.DivProducts>
    )
}
export default Products
// <table>
//     <thead>
//         <tr>
//             <th>id</th>
//             <th>createdAt</th>
//             <th>name</th>
//             <th>avatar</th>
//             <th>desciption</th>
//             <th>price</th>
//         </tr>
//     </thead>
//     <tbody>
//         {produtos.length > 0 ? (
//             produtos.map((produto) => (
//                 <tr key={produto.id}>
//                     <td>{produto.id}</td>
//                     <td>{produto.createdAt}</td>
//                     <td>{produto.name}</td>
//                     {/* <td>{produto.avatar}</td> */}
//                     <img src={produto.avatar} alt="" />
//                     <td>{produto.desciption}</td>
//                     <td>{produto.price}</td>
//                 </tr>
//             ))
//         ) : (
//             <tr>
//                 <td colSpan="5">Nenhuma consulta encontrada</td>
//             </tr>
//         )}
//     </tbody>
// </table>