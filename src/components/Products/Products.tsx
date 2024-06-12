import axios from "axios";
import { useEffect, useState } from "react";

import * as S from './ProdutcsStyles'

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetchProdutos();
    }, []);



    const fetchProdutos = async () => {
        try {
            const response = await axios.get("https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos");
            console.log(response)
            setProdutos(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <S.DivProducts>
            <S.DivProduct>
            {produtos.length > 0 ? (
                        produtos.map((produto) => (
                            <div key={produto.id}>
                                <S.DivAvatar>
                                <h3>{produto.name}</h3>

                                <img src={produto.avatar} alt="" />

                                </S.DivAvatar>
                                <p>{produto.desciption}</p>
                                <p>{produto.price}</p>
                                {/* <label>{produto.id}</label> */}
                                {/* <td>{produto.createdAt}</td> */}
                                {/* <td>{produto.avatar}</td> */}
                            </div>
                        ))
                    ) : (
                        <div>
                            <td colSpan="5">Nenhuma consulta encontrada</td>
                        </div>
                    )}
            </S.DivProduct>

        </S.DivProducts>
    )
}
export default Produtos
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