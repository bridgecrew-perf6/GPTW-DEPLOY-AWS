import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  productupdateError,
  productupdateStart,
  productupdateSuccess,
} from "../redux/productSlice";
import axios from "axios";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(productupdateStart());

    await axios({
      method: "get",
      url: "/api/v1/products",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        localStorage.setItem("product", JSON.stringify(response.data.product));
        dispatch(productupdateSuccess(response.data.product));
      })
      .catch((err) => {
        dispatch(productupdateError());
        console.log(err);
      });
  }, []);

  const theme = localStorage.getItem("theme");

  return (
    <div>
      <div className="mx-auto container">
        <div
          className="flex item-center justify-center flex-col items-center"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <h1 className="text-xl lg:text-2xl dark:text-white">
            Looks like you haven't <br />
            added any{" "}
            <span className="text-primary font-bold dark:text-white">
              Products!
            </span>{" "}
          </h1>
          <img
            src="./Empty-rafiki.svg"
            alt=""
            className="mt-6 w-70 md:w-80 lg:w-96"
          />
          <Link to="/product">
            <button className="bg-primary px-3 py-2 lg:px-5 lg:py-3 text-white rounded-md mt-6 shadow-lg hover:bg-primary-hover flex items-center justify-center hover:scale-110 dark:bg-darkBtn dark:hover:bg-indigo-700 text-sm md:text-base">
              <span className="mr-3">Add Products</span>
              <span className="animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
