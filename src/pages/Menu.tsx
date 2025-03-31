import { useState } from "react";
import Background from "../components/common/Background";
import bg from "../assets/icons/Pattern2.png";
import BackButton from "../components/common/BackButton";
import { Search } from "lucide-react";
import FavoriteButton from "../components/common/FavoriteButton";
import MenuPopulaire from "../components/PopularMenu";
import MenuCard from "../components/MenuCard";
import Footer from "../components/common/Footer";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeButton, setActiveButton] = useState("Burgers");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
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
            className="bg-pink w-full rounded-lg flex justify-center px-10 py-3 focus:outline-none"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            size={20}
          />
        </div>
        <div className="flex px-1 justify-between flex-col gap-3 w-full">
            <div className="flex px-1 justify-between w-full">
            {['Burgers', 'Sandwich', 'Poulets', 'Grillades'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveButton(item)}
              className={`px-4 py-1 ${activeButton === item ? 'border-b-2 border-black' : ''}`}
            >
              {item}
            </button>
          ))}
            </div>
          <MenuCard image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Pepper Pizza" description="5Kg of Pizza" price={5000} id="hello"/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;