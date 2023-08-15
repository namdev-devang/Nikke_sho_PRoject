import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DLT } from "../redux/action/Action";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);
  
  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  // const diss = useDispatch();

  const Total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    Total();
  }, [Total]);

  return (
    <>
      {getdata.map((ele) => {
        return (
          <>
            <Link to={`/details/${ele.id}`}>
              <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-5 mx-auto">
                  <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                      alt="ecommerce"
                      class="lg:w-1/5 w-1/2 h-auto object-cover object-center rounded"
                      src={ele.imgdata}
                    />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                      <h2 class="text-sm title-font text-gray-500 tracking-widest">
                        {ele.rname}
                      </h2>
                      <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                        {ele.rname}
                      </h1>

                      <p class="leading-relaxed">{ele.somedata}</p>
                      <div class="flex">
                        <span class="title-font font-medium text-2xl text-gray-900">
                        ₹{ele.price}
                        <span class=" text-lg text-gray-900">
                        <br />
                         Quantity : {ele.qnty}
                        </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Link>
            <button
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center  ml-4 fas fa-trash text-red-500"
              onClick={() => dlt(ele.id)}
            ></button>
          </>
        );
      })}
      <hr />
      <h1 className="text-3xl text-center font-bold">Total : {price}</h1>
      {/* <h1 className="text-3xl text-center my-52">Your Cart is Empty🛒</h1> */}
    </>
  );
};

export default Cart;
