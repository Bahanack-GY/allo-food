import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface OrderComponentProps {
  image: string;
  name: string;
  description: string;
  price: number;
  count: number;
}

function OrderComponent({
  image,
  name,
  description,
  price,
  count,
}: OrderComponentProps) {
  const [quantity, setQuantity] = useState(count);
  function handleIncrement() {
    setQuantity(quantity + 1);
  }
  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("Vous ne pouvez pas avoir une quantité inférieure à 1");
    }
  }
  return (
    <>
      <div className="flex bg-white p-3 rounded-xl shadow justify-between items-center">
        <div className="flex gap-3 items-center">
          <img
            src={image}
            alt="Order image"
            className="size-18 object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <p className="font-medium text-lg">{name}</p>
            <p className="text-gray-300 font-bold">{description}</p>
            <p className="font-bold text-deep-pink text-xl">
              {price} <span className="text-sm">FCFA</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-pink rounded-xl" onClick={handleDecrement}>
            <Minus />
          </button>
          <p className="p-3 font-medium">{quantity}</p>
          <button
            className="p-3 bg-[#D91656] rounded-xl "
            onClick={handleIncrement}
          >
            <Plus />
          </button>
        </div>
      </div>
    </>
  );
}
export default OrderComponent;
