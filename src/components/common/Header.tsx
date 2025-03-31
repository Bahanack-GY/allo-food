import { AlignLeft, MapPin, MapPinIcon } from "lucide-react";
function Header(){
    return(
        <div className="flex justify-between items-center px-8 pt-5">
        <AlignLeft />
        <div className="flex gap-1"><MapPinIcon color="#D91656"/><span>Yaounde, simbock</span></div>
        <img src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User profile picture" className="size-12 rounded-full object-cover"/>
    </div>
    )
}
export default Header;