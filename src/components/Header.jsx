import React from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {


  //  const carts = useSelector((state) => state.cart);
  const getdata = useSelector((state)=> state.cartreducer.carts)
  // console.log(getdata);

   
  return (
    <>
      <header className="  body-font flex">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <Link to="/" className="ml-5 hover:text-gray-900">
            <img src="https://img.icons8.com/?size=1x&id=16647&format=png" alt="" />
            </Link>
            {/* <span class="ml-3 text-xl">Tailblocks</span> */}
                       
         
          </a>
          <nav className="md:ml-auto flex ">
            <Link to="/cart">
              <Badge badgeContent={getdata.length} color="primary">
                <span className="fa-solid fa-cart-shopping items-end ml-5 text-3xl text-white bg-blue-500 rounded-xl px-1 py-1"></span>
              </Badge>
            </Link>

          </nav>
        </div>
      </header>
   
    </>
  );
};
export default Header;
