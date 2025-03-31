import { useState } from "react";
import Background from "../components/common/Background";
import bg from "../assets/icons/Pattern2.png";
import BackButton from "../components/common/BackButton";
import { Search } from "lucide-react";
import FavoriteButton from "../components/common/FavoriteButton";
import MenuCard from "../components/MenuCard";
import Footer from "../components/common/Footer";
import { motion, AnimatePresence } from "framer-motion";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeButton, setActiveButton] = useState("Burgers");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const categories = ['Burgers', 'Sandwich', 'Poulets', 'Grillades'];

  return (
    <div className="min-h-screen bg-pink-bg bg-opacity-50">
      <div className="opacity-20">
        <Background image={bg} />
      </div>
      
      <div className="px-7 flex flex-col py-3">
        <div className="flex justify-between">
          <BackButton />
          <FavoriteButton />
        </div>

        <div className="relative w-full mx-auto my-4">
          <input
            type="text"
            placeholder="Rechercher"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-pink w-full rounded-xl flex justify-center px-10 py-3 focus:outline-none focus:ring-2 focus:ring-deep-pink"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            size={20}
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-between w-full p-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setActiveButton(item)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeButton === item ? 'text-deep-pink' : 'text-gray-500'
                }`}
              >
                {item}
                <AnimatePresence>
                  {activeButton === item && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-deep-pink"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeButton}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MenuCard 
                image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                name="Pepper Pizza" 
                description="5Kg of Pizza" 
                price={5000} 
                id="hello"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Menu;