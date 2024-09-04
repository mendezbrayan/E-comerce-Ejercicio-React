import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout/index"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import Modal from "../../Components/Modal";

const Home = () => {
  const {setSearchByTitle,filteredItems} = useContext(ShoppingCartContext)

    const renderView = () => {
    if(filteredItems?.length > 0){
      return(
        <div className="grid gap-4 grid-cols-4 w-full  max-w-screen-lg ">
           {filteredItems?.map((item) => (
        <Card
        key={item.id} 
        data={item}/>
        ))}
        </div>
      )
    }else{
      return(
  <Modal />
      )
    }
  }
  return(
<Layout>

<div className="flex items-center justify-center relative w-80 mb-5">
  <h1 className="font-medium text-xl ">Exclusive Product</h1>
  </div>
  <input onChange={(event) => setSearchByTitle( event.target.value)} className="focus:shadow-lg duration-1000 focus:shadow-black rounded-lg border border-blue-600 w-80 p-4 mb-5 focus:outline-none" type="text" placeholder=" Search a Product" />

  {renderView()}

<ProductDetail/>
</Layout>
  )
}
export default Home