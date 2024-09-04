import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";
const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setCount,
    count,
    order,
    setOrder,
    setSearchByTitle
  
  } = useContext(ShoppingCartContext);

  const  handleDelete = (id) => {
    const filterProducts = cartProducts.filter((e) => e.id !== id);
    setCartProducts(filterProducts);
    setCount(count - 1);
  };
const handleCheckout = () => {
    const orderToAdd = {
        date: '01.02.23',
        products: cartProducts,
        totalProducts: cartProducts.length,
        totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order,orderToAdd])
    setCartProducts([])
    setSearchByTitle(null)
}

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu  flex-col fixed  right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XCircleIcon
            onClick={() => closeCheckoutSideMenu()}
            className="size-8 text-blue-600"
          />
        </div>
      </div>

      <div className="px-6 overflow-y-scroll flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete ={handleDelete}
          />
        ))}
      </div>

      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
   <span className="font-ligth">Total:</span>
     <span className="font-medium text-2xl ">$ {totalPrice(cartProducts)}</span>
        </p>
        <Link to='my-orders/last'>
        <button  className="w-full bg-blue-600 hover:bg-blue-500 py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
        
        </Link>
      </div>
    </aside>
  );
};
export default CheckoutSideMenu;
