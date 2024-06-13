
import * as S from './ProdutcsStyles'

const Products = ({products}) => {

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
