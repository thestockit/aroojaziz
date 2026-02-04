import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/shop/gulab.webp";
import img2 from "../assets/shop/lal12.webp";
import img3 from "../assets/shop/black-dress.webp";
import img4 from "../assets/shop/navyblue.webp";

const categories = [
  {
    img: img1,
    title: "Formals",
    name: "GULAAB",
    link: "/chahatcollection/3pc/suit",
  },
  {
    img: img2,
    title: "Bridals",
    link: "/shop",
  },
  {
    img: img3,
    title: "Wania",
    link: "/chahatcollection/kurti&trouser/suit",
  },
  {
    img: img4,
    title: "Aaira",
    link: "/chahatcollection/allover/suit",
  },
];

const Category = () => {
  const [autoShow, setAutoShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAutoShow(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="w-full px-8 mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((item, i) => (
          <Link
            to={item.link}
            key={i}
            className="relative group h-[500px] overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-all duration-300
              ${autoShow ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
            >
              <h2 className="text-xl font-semibold text-white tracking-wide">
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
