import axios from "axios";
import { useEffect, useState } from "react";


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
        } catch (error){
            console.error(error)
        }
    }

  return (
    <div>
      <h2>Produtos</h2>
      <table>
        <thead>
            <tr>
                <th>id</th>
                <th>createdAt</th>
                <th>name</th>
                <th>avatar</th>
                <th>desciption</th>
                <th>price</th>
            </tr>
        </thead>
        <tbody>
            {produtos.length > 0 ? (
                produtos.map((produto) => (
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.createdAt}</td>
                        <td>{produto.name}</td>
                        {/* <td>{produto.avatar}</td> */}
                        <img src={produto.avatar} alt="" />
                        <td>{produto.desciption}</td>
                        <td>{produto.price}</td>                        
                    </tr>
                ))
): (
    <tr>
      <td colSpan="5">Nenhuma consulta encontrada</td>
    </tr>
)}
        </tbody>
      </table>
    </div>
  )
}

export default Produtos

