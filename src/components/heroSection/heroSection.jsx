import React, { useState } from "react";
import styles from "./heroSection.module.css";
import { useEffect } from "react";
import axios from "axios";

export const HeroSection = () => {
  const [address, setAddress] = useState("");
  const searchUserAddress = async () => {
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/search",
      params: {
        location: "555 Byron St APT 305, Palo Alto, CA 94301",
      },
      headers: {
        "X-RapidAPI-Key": "02f713baa7mshfdd0501cc1da63dp157545jsn068e9a5e31b3",
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const inputHandler = (value) => {
    setAddress(value);
  };
  const searchHandler = () => {
    console.log("hello");
  };

  return (
    <div className=" flex justify-center px-10">
      <div
        className={`${styles.heroBackground} w-full rounded-3xl flex justify-center flex-col md:items-start items-center md:px-20 px-10`}
      >
        <div className="flex flex-col md:text-left text-center gap-5 mb-5">
          <h1 className=" md:text-5xl text-3xl font-bold md:w-[55%]">
            Easy way to find a perfect property
          </h1>
          <p className=" text-gray-800 text-lg md:w-[50%]">
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </p>
        </div>

        <div className={`${styles.inputBg} md:w-[75%] w-full p-4 flex`}>
          <input
            value={address}
            onChange={(e) => inputHandler(e.target.value)}
            placeholder="Enter an address"
            className="bg-transparent outline-none w-full"
          />
          <img
            onClick={searchHandler}
            className="cursor-pointer"
            src="/search.svg"
          />
        </div>
      </div>
    </div>
  );
};
