import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

const MyOrders = () => {
  const {order} = useContext(ShoppingCartContext)

    return(
    <Layout>
  <div className="flex items-center w-80 relative justify-center mb-4">
    <h1>My Orders</h1>
  </div>

  {order.map((order,index) => (
    <Link key={index} to={`/my-orders/${index}`}>
       <OrdersCard 
      totalPrice={order.totalPrice}
      totalProducts ={order.totalProducts}
      />
    </Link>
   
  )
)}
</Layout>
    )
}
export default MyOrders