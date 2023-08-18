import React, { useState } from "react";
import { data } from "../dump";
import { useResult } from "../../context/resultContext";

export const SearchResult = () => {
    const [showMore , setShowMore] = useState(false);
    const { result } = useResult();

  return ( result &&
    <div className={`grid md:grid-cols-3  px-10  my-8 gap-4 `}>
      <div
      style={{
        gridTemplateRows: "repeat(3, auto)"
      }}
        className={`grid col-span-2  md:grid-cols-3  w-[100%] grid-cols-2 gap-1 md:max-h-[33rem] max-h-[20rem] overflow-y-scroll`}
      >
        {result.big.map((item, idx) => {
          return (
            <img
              key={item.url}
              className={` ${idx%9 === 0 ? "col-span-2 w-full row-span-2" : ""} rounded-md`}
              src={item.url}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className=" text-4xl font-bold">${result.price}</h1>
        <p>{result.abbreviatedAddress}</p>
        <div className="flex gap-2 mt-2">
        <button className=" bg-black px-4 py-4 text-white rounded-lg flex-grow hover:bg-gray-900">Request a tour</button>
        <button className=" px-4 py-4 border-2 rounded-lg border-black hover:bg-gray-100">Contact Agent</button>
        </div>
        <h1 className=" text-2xl font-bold mt-4">Overview</h1>
        <p className={`${!showMore ? "line-clamp-4": "max-h-[16rem] overflow-y-scroll"}`}>{result.description}</p>
        <button onClick={() => setShowMore(prev => !prev)} className=" text-blue-500 mr-auto">{showMore ? "Hide" : "ShowMore"}</button>
      </div>
    </div>
  );
};
