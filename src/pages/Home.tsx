import { useState } from "react";
import Header from "../components/common/Header";
import Background from "../components/common/Background";
import { ChevronRight, Search } from "lucide-react";
import PromoCard from "../components/PromoCard";
import Burger from "../assets/icons/burger.png";
import { motion, AnimatePresence } from "framer-motion";
import SliderCard from "../components/SliderCard";
import burger from "../assets/icons/burger-icon.png";
import FoodCard from "../components/FoodCard";
import MenuPopulaire from "../components/PopularMenu";
import bg from "../assets/icons/Pattern.png";
import Footer from "../components/common/Footer";
import { useQuery } from "@tanstack/react-query";
import { getFoods, getBurgers, getChicken, getGrillades } from "../API/users";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stars: number;
  category: string;
}

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

  // Fetch all foods
  const { data: allFoods, isLoading: isLoadingFoods } = useQuery({
    queryKey: ['foods'],
    queryFn: async () => {
      const response = await getFoods();
      return response.data as FoodItem[];
    }
  });

  // Fetch burgers
  const { data: burgers, isLoading: isLoadingBurgers } = useQuery({
    queryKey: ['burgers'],
    queryFn: async () => {
      const response = await getBurgers();
      return response.data as FoodItem[];
    }
  });

  // Fetch chicken
  const { data: chicken, isLoading: isLoadingChicken } = useQuery({
    queryKey: ['chicken'],
    queryFn: async () => {
      const response = await getChicken();
      return response.data as FoodItem[];
    }
  });

  // Fetch grillades
  const { data: grillades, isLoading: isLoadingGrillades } = useQuery({
    queryKey: ['grillades'],
    queryFn: async () => {
      const response = await getGrillades();
      return response.data as FoodItem[];
    }
  });

  const handleSliderClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Get filtered products based on active category
  const getFilteredProducts = (): FoodItem[] => {
    if (isLoadingFoods || isLoadingBurgers || isLoadingChicken || isLoadingGrillades) {
      return [];
    }

    switch (activeIndex) {
      case 0:
        return burgers || [];
      case 1:
        return grillades || [];
      case 2:
        return allFoods?.filter((food: FoodItem) => food.category === 'Sandwich') || [];
      case 3:
        return chicken || [];
      default:
        return allFoods || [];
    }
  };

  const filteredProducts = getFilteredProducts();

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
                  title="Offre spéciale"
                  description="Découvrez nos meilleures offres"
                  image={Burger}
                />
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-4 gap-2">
              {[0, 1, 2].map((index) => (
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
            {["Burger", "Grillade", "Sandwich", "Poulet"].map((item, index) => (
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
            {filteredProducts.map((product: FoodItem) => (
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
          {allFoods?.slice(0, 2).map((food: FoodItem) => (
            <motion.div key={food.id} variants={itemVariants}>
              <MenuPopulaire 
                image={food.image}
                name={food.name}
                description={food.description}
                price={food.price}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Home;


