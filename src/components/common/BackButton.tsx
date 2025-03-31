import { ChevronLeft } from "lucide-react"
function handleClick(){
    window.history.back();
}

function BackButton(){
    return(
        <button onClick={handleClick}>
        <div className="p-3 bg-pink-200 rounded-xl mt-3 ">
            <ChevronLeft size={20} color="#D91656"/>
        </div>
        </button>
    )
}
export default BackButton