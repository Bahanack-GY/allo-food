import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Background from "../components/common/Background";
import { ChevronRight, Search } from "lucide-react";
import PromoCard from "../components/PromoCard";
import Burger from "../assets/icons/burger.png";
import { motion, AnimatePresence } from "framer-motion";
import SliderCard from "../components/SliderCard";
import burger from "../assets/icons/burger-icon.png";
import sampleBurger from "../assets/img/sample-burger.png";
import FoodCard from "../components/FoodCard";
import MenuPopulaire from "../components/PopularMenu";
import bg from "../assets/icons/Pattern.png";
import Footer from "../components/common/Footer";



interface Promo {
  title: string;
  description: string;
  image: string;
}

const promoData: Promo[] = [
  {
    title: "Offre spéciale Saint Valentin",
    description: "Nous servons les meilleurs burgers",
    image: Burger,
  },
  {
    title: "Pizza Party",
    description: "2 pizzas achetées, 1 offerte",
    image: Burger,
  },
  {
    title: "Sandwich Délice",
    description: "Sandwich + Boisson à prix réduit",
    image: Burger,
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleSliderClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === promoData.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000); // 1 minute interval

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Background image={bg}/>
      <div className="w-screen">
        <Header />
        <div className="relative w-5/6 mx-auto my-4">
          <input
            type="text"
            placeholder="Rechercher"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-pink w-full rounded-lg flex justify-center px-10 py-3 focus:outline-none"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            size={20}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="px-8 flex flex-col overflow-hidden h-48 md:h-52 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full flex justify-center items-center"
              >
                <PromoCard
                  title={promoData[currentIndex].title}
                  description={promoData[currentIndex].description}
                  image={promoData[currentIndex].image}
                />
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-4">
              {promoData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 mx-1 rounded-full ${
                    index === currentIndex ? "bg-red-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <Slider /> */}
        <div className="overflow-x-auto flex no-scrollbar gap-4 py-4 px-8">
        {/* Slider Cards */}
        <div className="overflow-x-auto flex no-scrollbar gap-3">
          {["Burger", "Pizza", "Sandwich", "igname"].map((item, index) => (
            <SliderCard
              key={index}
              name={item}
              image={burger}
              isActive={activeIndex === index}
              onClick={() => handleSliderClick(index)}
            />
          ))}
        </div>
        </div>
        <div className="grid grid-cols-2 px-7 gap-3 md:grid-cols-3 lg:grid-cols-4">
          <FoodCard image={sampleBurger} stars={2.5} name="Beef Burger" description="100 gr Chicken + tomato + cheese Lettuce" price={1500} isActive={false}/>
          <FoodCard image={sampleBurger} stars={2.5} name="Beef Burger" description="100 gr Chicken + tomato + cheese Lettuce" price={1500} isActive={false}/>
        </div>
        <div className="flex px-7 py-2 justify-between">
          <h2 className="text-xl font-medium">Menu populaire</h2>
          <button className="flex items-center text-gray-500">Tout voir <ChevronRight /></button>
        </div>
        <div className="flex flex-col gap-3 pb-28">
          <MenuPopulaire image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Pepper Pizza" description="5Kg of Pizza" price={5000}/>
          <MenuPopulaire image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Pepper Pizza" description="5Kg of Pizza" price={5000}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;


