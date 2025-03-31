interface PromoCardProps {
    title: string;
    description: string;
    image: string;
}
function PromoCard({ title, description, image }: PromoCardProps) {
    return (
      <div className="rounded-xl bg-gradient-to-r from-red-500 to-rose-400 h-48 grid grid-cols-2 overflow-hidden">
        <div className="flex-col flex py-5 px-5 justify-between">
            <div className="txt">
            <h1 className="font-bold text-white text-lg">{title}</h1>
            <p className="text-white text-sm mt-2">{description}</p>
            </div>
          
          <button className="bg-white rounded-lg text-red-500 font-bold text-lg mt-2 px-1 w-3/4 py-0.5">
            Voir
          </button>
        </div>
        <img src={image} alt="Promo image" className="object-contain w-full h-full" />
      </div>
    );
  }
  
  export default PromoCard;
  