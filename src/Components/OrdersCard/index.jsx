import { CalendarDaysIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
const OrdersCard = props => {
    const {totalPrice,totalProducts} = props

    return( 
     <div className="flex flex-row justify-around 

	 bg-gradient-to-r from-cyan-500 to-blue-600 text-white items-center rounded-md shadow-lg w-60 h-28  mb-4 ">
        <div className="flex flex-col mb-3 ">
            <span className="flex gap-2 mb-3"><CalendarDaysIcon className="h-6 w-6"/> 01.02.23</span>
            <span >{totalProducts} Articles</span>
         
        </div>
        <div className="flex flex-col justify-center h-full">
        <span className=" font-semibold py-5 "> $ {totalPrice}</span>
        <ChevronRightIcon className="w-6 h-6  "/>
        </div>
     </div>
    )
}
export default OrdersCard