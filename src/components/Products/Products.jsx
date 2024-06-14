// import { useState } from "react";
// import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";

import * as S from './ProdutcsStyles'


const Products = ({products}) => {
    
    // const [cart, setCart] = useState([]);
    
    // const handleClickProduct = (product) => {
        
    // }

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
                            {/* <button
                                onClick={() => handleClickProduct(product)}
                            >
                                {
                                    cart.some((itemCart) => itemCart.id === product.id) ?(
                                        <BsFillCartCheckFill />
                                    ) : (
                                        <BsFillCartPlusFill />
                                    )
                                }
                            </button> */}
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
