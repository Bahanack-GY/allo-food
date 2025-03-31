interface SliderCardProps {
    name: string;
    image: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  function SliderCard({ name, image, isActive, onClick }: SliderCardProps) {
    return (
      <button onClick={onClick} className="focus:outline-none">
        <div
          className={`flex items-center p-3 rounded-xl justify-center transition-all duration-300 ${
            isActive
              ? "bg-deep-pink text-white border-0"
              : "bg-white border border-deep-pink text-deep-pink"
          }`}
        >
          <img src={image} alt="Dish image" className="size-6 object-cover pl-1.5" />
          <p className="px-3 font-medium">{name}</p>
        </div>
      </button>
    );
  }
  
  export default SliderCard;
  