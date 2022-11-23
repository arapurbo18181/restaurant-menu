import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Menu from "../components/Menu";

const categories = ["breakfast", "lunch", "shakes", "dinner", "All Items"];

const Home: NextPage = () => {
  const [items, setItems] = useState(Menu);
  const selectCat = (cat: string) => {
    if (cat === "All Items") {
      setItems(Menu);
      console.log(items);
    } else {
      const updatedData = Menu.filter((elem) => {
        return cat == elem.category;
      });
      setItems(updatedData);
    }
  };
  return (
    <section className="">
      <Head>
        <title>Food Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center text-5xl font-bold">Food Menu</div>
      <section className="flex justify-center items-center my-4 text-sm md:text-xl space-x-1 md:space-x-4">
        {categories.map((elem) => {
          return (
            <button
              onClick={() => selectCat(elem)}
              className="bg-[#ff4d41] text-white py-2 px-4 rounded my-5 border border-[#ff4d41] hover:bg-transparent hover:text-[#ff4d41] transition duration-500 inline-block font-medium cursor-pointer"
            >
              {elem}
            </button>
          );
        })}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 xl:m-5 place-content-center place-items-center w-[97vw]">
        {items.map((elem) => {
          return (
            <div
              key={elem.id}
              className="flex justify-between bg-gray-100 border rounded-lg h-[40vh] md:h-[35vh] xl:h-[30vh] w-full md:w-[40vw] xl:w-[30vw] overflow-hidden"
            >
              <div className="flex-1 h-full w-full">
                <img
                  className="h-full w-full object-cover"
                  src={elem.img}
                  alt=""
                />
              </div>
              <div className="flex-1 flex flex-col justify-center items-center mx-4 space-y-3">
                <h1 className="text-xl font-bold">{elem.title}</h1>
                <p className="text-sm text-center">{elem.desc}</p>
                <b className="text-[#ff4d41]">Price: {elem.price}$</b>
                <button className="bg-[#ff4d41] text-white py-2 px-4 rounded my-5 border border-[#ff4d41] hover:bg-transparent hover:text-[#ff4d41] transition duration-500 inline-block font-medium cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Home;
