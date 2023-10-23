import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"
function MyOrder() {

    const context = useContext(ShoppingCartContext)

    return (
     
        <Layout>
         soy myOrder
         <div className="flex flex-col w-80">
                {
                    context.order.slice(-1)[0]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            imgUrl={product.images[0]}
                        />
                    ))
                }
            </div>
        </Layout>
    )
  }
  
  export default MyOrder