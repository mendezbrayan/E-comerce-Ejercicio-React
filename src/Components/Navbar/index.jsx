// import img from '../img/shopi-removebg-preview.png'
import React from "react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import {ShoppingBagIcon } from '@heroicons/react/24/solid'
import './styles.css'


const Navbar = () => {
  const {cartProducts,setSearchByCategory} = useContext(ShoppingCartContext)

  const activeStyle = "underline underline-offset-4 decoration-blue-600 text-black-600 ";

  return (
    <nav className="bg-white flex justify-between  items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light   ">
      <ul className="flex items-center gap-3 ">
        <li className="text-2xl font-semibold ">
      
      Shopi
            
        
        </li>

        <li>
          <NavLink
            to="/"
          onClick={() => setSearchByCategory()}
            className={({ isActive }) => 
            isActive ? activeStyle : undefined}

          >
            All
          </NavLink>
        </li>

        <li >
          <NavLink
          to="/clothes"
          onClick={() => setSearchByCategory('clothes')}
            className={({ isActive }) =>
             (isActive ? activeStyle : undefined)}
            
          >
            Clothes
          </NavLink>
        </li>

        <li >
          <NavLink
            to="/electronics"
          onClick={() => setSearchByCategory('electronics')}
           className={({ isActive }) =>
             (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>

        <li>
          <NavLink
           to="/furniture"
          onClick={() => setSearchByCategory('furniture')}

            className={({ isActive }) => 
            (isActive ? activeStyle : undefined)}
           
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/toys"
          onClick={() => setSearchByCategory()}
            className={({ isActive }) =>
             (isActive ? activeStyle : undefined)}
            
          >
            Toys
          </NavLink>
        </li>

        <li>
          <NavLink 
           to="/miscellaneous"
          onClick={() => setSearchByCategory('miscellaneous')}

            className={({ isActive }) => 
            (isActive ? activeStyle : undefined)}
          
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3 ">
        <li className="text-black/60">Brayan@mendez.com</li>
        <li>
          <NavLink
          to="/my-orders"
            className={({ isActive }) =>
             (isActive ? activeStyle : undefined)}   
          >
            MY Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/my-account"
            className={({ isActive }) => 
            (isActive ? activeStyle : undefined)}
         
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
           to="/sign-in"
            className={({ isActive }) => 
            (isActive ? activeStyle : undefined)}
           
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <div className="flex">
          <ShoppingBagIcon className="size-6 text-blue-600" />{cartProducts.length}

          </div>
          </li>
      </ul>
    </nav>
  );
};
export default Navbar;
