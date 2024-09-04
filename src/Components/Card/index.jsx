import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusCircleIcon,CheckCircleIcon } from "@heroicons/react/24/solid"

const Card = ({data}) => {
const {count,
    setCount,
    openProductDetail,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeProductDetail,


    
} = useContext(ShoppingCartContext)

const showProduct = (productDetail) => {
    openProductDetail()
    setProductToShow(productDetail)
}
const addProductsToCart = (event ,productData) => {
    event.stopPropagation()
    setCount(count + 1)
   setCartProducts([...cartProducts,productData])
   openCheckoutSideMenu()
   closeProductDetail() 
}

const renderIcon =(id) => {
const isInCart = cartProducts.filter(product => product.id === id).length > 0
if(isInCart){
    return(
          <div 
    className="absolute top-0 right-0" 
   
   >
        <CheckCircleIcon  className="size-8 text-blue-600"/>
</div>  
    )
 
}else{
    return(
          <div 
    className="absolute top-0 right-0" 
    onClick={(event) => addProductsToCart(event, data)} 
    >
        <PlusCircleIcon  className="size-8 fill-blue-600 "/>
</div> 
    )
      
}    
}


    return(
<div
 className="bg-white cursor-pointer w-56 h-60 rounded-lg"
 onClick={() => showProduct(data)}
 >
    <figure className="relative mb-2 w-full h-4/5">
       <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category.name}</span>
            <img className="w-full h-full object-cover rounded-lg" 
            src={data.images[0]} alt={data.title} />
       
        {renderIcon(data.id)}
    </figure>
    <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
<span className="text-lg font-semibold">${data.price}</span>

    </p>

</div>
    )
}
export default Card