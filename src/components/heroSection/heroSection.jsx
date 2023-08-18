import React, { useState } from "react";
import styles from "./heroSection.module.css";
import axios from "axios";
import { useResult } from "../../context/resultContext";
import { Spinner } from "../spinner/spinner";

export const HeroSection = () => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const { setResult } = useResult();
  const searchUserAddress = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/search",
      params: {
        location: address,
      },
      headers: {
        "X-RapidAPI-Key": "02f713baa7mshfdd0501cc1da63dp157545jsn068e9a5e31b3",
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setAddress("");
    }
  };
  const inputHandler = (value) => {
    setAddress(value);
  };
  const searchHandler = () => {
    searchUserAddress();
  };
  const keyPressHandler = (keyName) => {
    if(keyName === "Enter"){
        searchUserAddress();
    }
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
            onKeyDown={(e) => {
              keyPressHandler(e.key);
            }}
            onChange={(e) => inputHandler(e.target.value)}
            placeholder="Enter an address"
            className="bg-transparent outline-none w-full"
          />
          {loading ? (
            <Spinner />
          ) : (
            <img
              onClick={searchHandler}
              className="cursor-pointer"
              src="/search.svg"
            />
          )}
        </div>
      </div>
    </div>
  );
};
