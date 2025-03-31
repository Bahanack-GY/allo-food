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

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stars: number;
  category: string;
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

const products: Product[] = [
  {
    id: "1",
    name: "Beef Burger",
    description: "100 gr Beef + tomato + cheese Lettuce",
    price: 1500,
    image: sampleBurger,
    stars: 4.5,
    category: "Burger"
  },
  {
    id: "2",
    name: "Chicken Burger",
    description: "100 gr Chicken + tomato + cheese Lettuce",
    price: 1200,
    image: sampleBurger,
    stars: 4.2,
    category: "Burger"
  },
  {
    id: "3",
    name: "Margherita Pizza",
    description: "Tomato sauce, mozzarella, fresh basil",
    price: 2500,
    image: sampleBurger,
    stars: 4.8,
    category: "Pizza"
  },
  {
    id: "4",
    name: "Pepperoni Pizza",
    description: "Tomato sauce, mozzarella, pepperoni",
    price: 2800,
    image: sampleBurger,
    stars: 4.6,
    category: "Pizza"
  },
  {
    id: "5",
    name: "Club Sandwich",
    description: "Chicken, bacon, lettuce, tomato",
    price: 1800,
    image: sampleBurger,
    stars: 4.3,
    category: "Sandwich"
  },
  {
    id: "6",
    name: "Grilled Chicken",
    description: "Marinated chicken with special sauce",
    price: 2000,
    image: sampleBurger,
    stars: 4.7,
    category: "Poulet"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleSliderClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
    const category = ["Burger", "Pizza", "Sandwich", "Poulet"][index];
    setFilteredProducts(products.filter(product => product.category === category));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === promoData.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen bg-pink-bg bg-opacity-50">
      <Background image={bg}/>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-screen"
      >
        <Header />
        
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-5/6 mx-auto my-4"
        >
          <input
            type="text"
            placeholder="Rechercher votre plat préféré..."
            value={searchTerm}
            onChange={handleSearch}
            className="bg-pink w-full rounded-xl flex justify-center px-10 py-3 focus:outline-none focus:ring-2 focus:ring-deep-pink placeholder-gray-500"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            size={20}
          />
        </motion.div>

        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-between"
        >
          <div className="px-4 sm:px-8 flex flex-col overflow-hidden h-48 md:h-52 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="w-full flex justify-center items-center"
              >
                <PromoCard
                  title={promoData[currentIndex].title}
                  description={promoData[currentIndex].description}
                  image={promoData[currentIndex].image}
                />
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-4 gap-2">
              {promoData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-deep-pink w-4" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="overflow-x-auto flex no-scrollbar gap-4 py-4 px-4 sm:px-8"
        >
          <div className="flex gap-3">
            {["Burger", "Pizza", "Sandwich", "Poulet"].map((item, index) => (
              <SliderCard
                key={index}
                name={item}
                image={burger}
                isActive={activeIndex === index}
                onClick={() => handleSliderClick(index)}
              />
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 px-4 sm:px-7 gap-3 md:grid-cols-3 lg:grid-cols-4"
          >
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                variants={itemVariants}
                layout
              >
                <FoodCard 
                  image={product.image}
                  stars={product.stars}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  isActive={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex px-4 sm:px-7 py-4 justify-between items-center"
        >
          <h2 className="text-xl font-medium">Menu populaire</h2>
          <button className="flex items-center gap-2 text-deep-pink hover:text-opacity-80 transition-colors">
            <span className="text-sm font-medium">Tout voir</span>
            <ChevronRight size={20} />
          </button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 pb-28 px-4 sm:px-7"
        >
          <motion.div variants={itemVariants}>
            <MenuPopulaire 
              image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              name="Pepper Pizza" 
              description="5Kg of Pizza" 
              price={5000}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <MenuPopulaire 
              image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              name="Pepper Pizza" 
              description="5Kg of Pizza" 
              price={5000}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Home;


