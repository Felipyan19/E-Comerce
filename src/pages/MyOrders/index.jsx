import { useContext } from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from '../../Context'
import { OrdersCard } from "../../Components/OrdesCard"

function MyOrders() {

    const context = useContext(ShoppingCartContext)

    return (

        <Layout >
            <div className="flex items-center justify-center relative w-80">
                <h1>MyOrders</h1>
            </div>
            {
                context.order.map((product, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            totalPrice={product.totalPrice}
                            totalProducts={product.totalProducts}
                            date={product.date}
                        />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders