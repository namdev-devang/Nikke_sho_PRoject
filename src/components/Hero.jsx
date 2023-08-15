import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ApiData from "./Api/ApiData";
import {ADD} from '../redux/action/Action'
import { Link } from "react-router-dom";
export const Hero = () => {
  const [data, setData] = useState(ApiData);
  // console.log(data);

  const dispatch = useDispatch();

  const send = (e) =>{
    // console.log(e);
    dispatch(ADD(e));
  }
  return (
    <>
      <section class="text-gray-600 body-font bg-slate-100">
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
            
            </div>
          </div>
        </div>
      </section>
    <hr className="shadow shadow-pink-600" />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex flex-wrap -m-4">
          {
            data.map((ele,id)=>{
                return(
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
              <Link to={`/details/${ele.id}`}>
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={ele.imgdata}
                />
                </Link>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {ele.somedata}
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  {ele.rname}
                </h2>
                <p className="mt-1 font-extrabold">₹{ele.price}</p>

                <button className="bg-sky-600 text-white px-2 py-1 rounded-lg my-2"
                onClick={()=> send(ele)}
                >Add To Cart</button>
              </div>
            </div>
                )
            })
          }
         

          </div>
        </div>
      </section>
      
    </>
  );
};
