import {  ShoppingBag, User, Home, UtensilsCrossedIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx"; 
const FOOTER_ITEMS = [
  { name: "Accueil", icon: Home, path: "/" },
  { name: "Menu", icon: UtensilsCrossedIcon, path: "/Menu" },
  { name: "Compte", icon: User, path: "/users" },
  { name: "Panier", icon: ShoppingBag, path: "/Cart" },
];

function Footer() {
  const location = useLocation();

  return (
    <footer className="w-screen flex justify-center">
      <div className="fixed bottom-6 rounded-xl pt-2 z-10 flex items-center w-5/6 justify-center h-18 bg-white shadow-lg">
        <nav className="flex-grow flex justify-evenly w-screen overflow-hidden md:justify-center md:gap-10">
          {FOOTER_ITEMS.map(({ name, icon: Icon, path }) => {
            const isActive = location.pathname === path;

            return (
              <Link to={path} key={name} className="relative">
                <div
                  className={clsx(
                    "flex items-center p-3 text-sm font-medium rounded-xl transition-colors mb-2",
                    isActive && "bg-[#FFF0F0]"
                  )}
                >
                  <Icon
                    size={24}
                    strokeWidth={2}
                    className="text-[#D61355] min-w-[15px]"
                  />
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        className="whitespace-nowrap ml-2 text-md font-medium "
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
