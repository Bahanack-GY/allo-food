import { ChevronLeft, ChevronRight, Disc, Heart, MapPin, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import BackButton from "../components/common/BackButton";

function FoodDetails() {
  const images = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
    <div className="absolute top-1 z-10 px-3 opacity-90">
        <BackButton />
    </div>
    <div className="relative flex flex-col items-center">
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2  px-2 py-1 rounded-full shadow opacity-70"
      >
        <ChevronLeft size={40} color="white" />
      </button>
      <img
        src={images[currentIndex]}
        alt="Food"
        className="w-fit rounded-b-xl object-center h-auto"
      />
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2  px-2 py-1 rounded-full shadow opacity-70"
      >
        <ChevronRight size={40} color="white" />
      </button>
    </div>
    <div className="flex flex-col bg-white ">
        <div className="flex p-5 justify-between">
            <div className="p-3 bg-pink-300 rounded-xl">
                <p className="font-medium">Populaire</p>
            </div>
            <div className="flex gap-1">
                    <button className="bg-pink-300 p-2 rounded-full flex items-center"><MapPin color="#D61355"/></button>
                    <button className="bg-gray-400 p-2 rounded-full flex items-center"><Heart color="black" fill="black"/></button>
            </div>
        </div>
        <div className="px-5 my-3">
            <h2 className="text-5xl font-light">Beef Burger promo pack</h2>
        </div>
        <div className="flex gap-5 px-5 py-3">
            <div className="flex items-center">
                <Star color="#FFED29" fill="#FFED29"/>
                <p className="font-bold text-gray-400 px-1">4,5 etoiles</p>
            </div>
            <div className="flex items-center">
                <ShoppingBag color="#C11C" />
                <p className="font-bold text-gray-400 px-1">+100 commandes</p>
            </div>
        </div>
        <p className="px-5 font-medium">
        In a medium bowl, add ground chicken, breadcrumbs, mayonnaise, onions, parsley, garlic, paprika, salt and pepper. Use your hands to combine all the ingredients together until blended, but don't over mix.
        </p>
        <ul className="py-2 px-8">
            <li>Chicken</li>
            <li>Chicken</li>
            <li>Chicken</li>
        </ul>
        <div className="flex w-full justify-center pb-36 pt-5">
            <button className="w-3/4 bg-pink-300 p-3 rounded-xl text-white font-semibold">Ajouter au panier</button>
        </div>
    </div>
    </>
  );
}

export default FoodDetails;
