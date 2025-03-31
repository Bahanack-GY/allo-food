import Background from "../components/common/Background";
import bg from "../assets/icons/Pattern3.png";
import background from "../assets/icons/Pattern4.png";
import BackButton from "../components/common/BackButton";
import { ShoppingBag } from "lucide-react";
import OrderComponent from "../components/OrderComponent";

function handleOrder(){
    alert("Commande passée")!
}
function Cart() {
  return (
    <div>
      <Background image={bg} />
      <div className="px-7 py-3 flex justify-between items-center">
        <BackButton />
        <div className="p-3 mt-2 bg-pink-200 rounded-2xl">
          <ShoppingBag size={30} color="#D91656" />
        </div>
      </div>
      <div className="flex flex-col px-7 gap-3">
        <h2 className="text-2xl font-medium ">Détails de la commande</h2>
        <OrderComponent image="https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Hamburger" description="Hamburger" price={1000} count={1}/>
        <OrderComponent image="https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Hamburger" description="Hamburger" price={1000} count={1}/>
      </div>
      <div className="w-screen flex justify-center px-2">
      <div className="absolute bottom-3 w-11/12 bg-gradient-to-r from-fuchsia-600 to-pink-600 p-3 rounded-lg ">
      <img src={background} alt="" className="absolute right-0 object-cover opacity-80"/>
        <div className="flex flex-col gap-2 px-5">
            <div className="flex justify-between text-white font-medium text-lg">
                <p>Sous-Total</p>
                <p>2000 FCFA</p>
            </div>
            <div className="flex justify-between text-white font-medium text-lg">
                <p>Frais de livraison</p>
                <p>2000 FCFA</p>
            </div>
            <div className="flex justify-between text-white font-medium text-lg">
                <p>Reduction</p>
                <p>2000 FCFA</p>
            </div>
            <div className="flex justify-between text-white font-thin text-lg">
                <p>Mode de paiement</p>
                <p>A la livraison</p>
            </div>
            <div className="flex justify-between text-white font-bold text-2xl py-3">
                <p>Total</p>
                <p>2000 FCFA</p>
            </div>
            <button className="bg-white w-full py-5 text-xl rounded-xl text-deep-pink font-bold" onClick={handleOrder}>Passer la commande</button>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Cart;
