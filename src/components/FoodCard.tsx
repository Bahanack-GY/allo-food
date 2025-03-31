import { Plus, Star } from "lucide-react";
interface FoodCardProps{
    image?: string;
    name?: string;
    description?: string;
    price?: number;
    id?: string;
    stars?: number;
    isActive: boolean;
}
function FoodCard({image, name, description, price, id, stars}: FoodCardProps){
    return(
        <>
        <div className="flex flex-col bg-white rounded-xl p-3 shadow ">
            <div className="flex items-center ">
                <Star fill="#FFD700" color="#FFD700" size={16} />
                <p className="text-sm px-1 font-medium">{stars}</p>
            </div>
            <div className="flex w-full items-center justify-center">
            <img src={image} alt="Food image" className="size-25 object-center drop-shadow-2xl i"/>
            </div>
            <h1 className="text-md font-medium mt-2">{name}</h1>
            <p className="font-medium text-gray-500 py-2">{description}</p>
            <div className="flex justify-between ">
            <p className="font-medium text-deep-pink"><span className="text-2xl">{price}</span> FCFA</p>
            <button className="bg-deep-pink p-2 rounded-full" onClick={()=>{alert("Ajouter au panier")}}><Plus color="white"/></button>
            </div>
        </div>
        </>
    )
}
export default FoodCard;