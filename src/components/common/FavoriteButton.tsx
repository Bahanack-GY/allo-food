import { Star } from "lucide-react";

function handleClick(){
    alert("Ajouter aux favoris")
}

function FavoriteButton(){
    return(
        <button onClick={handleClick}>
        <div className="p-3 bg-pink-200 rounded-xl mt-3 ">
            <Star size={20} color="#D91656"/>
        </div>
        </button>
    )
}
export default FavoriteButton