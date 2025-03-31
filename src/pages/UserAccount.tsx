import { Edit, MapPin, Phone, Mail, User as UserIcon, Info, } from "lucide-react";
import BackButton from "../components/common/BackButton";
import Footer from "../components/common/Footer";
import Background from "../components/common/Background";
import bg from "../assets/icons/Pattern2.png";
import image from "../assets/icons/coin.png"
function User() {
    return (
        <div className="min-h-screen bg-pink-bg bg-opacity-50 mb-32">
            <div className="opacity-20">
            <Background image={bg} />
            </div>
            <div className="px-4">
                <BackButton />
            </div>
            
            <div className="flex flex-col items-center px-4">
                {/* Profile Picture */}
                <div className="relative mt-4">
                    <img 
                        src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Photo de profil" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <button className="absolute bottom-0 right-0 bg-deep-pink p-2 rounded-full text-white">
                        <Edit size={20} />
                    </button>
                </div>

                {/* User Info */}
                <div className="w-full max-w-md bg-white rounded-xl p-6 mt-6 shadow-md">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Mon Profil</h1>
                        <button className="flex items-center gap-2 bg-pink-200 px-4 py-2 rounded-xl text-deep-pink" onClick={() => alert("Modifier")}>
                            <Edit size={20} />
                            <span>Modifier</span>
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-pink-200 p-2 rounded-xl">
                                <UserIcon className="text-deep-pink" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Nom complet</p>
                                <p className="font-medium">John Doe</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-pink-200 p-2 rounded-xl">
                                <Phone className="text-deep-pink" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Téléphone</p>
                                <p className="font-medium">+237 6XX XXX XXX</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-pink-200 p-2 rounded-xl">
                                <Mail className="text-deep-pink" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">john.doe@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-pink-200 p-2 rounded-xl">
                                <MapPin className="text-deep-pink" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Adresse</p>
                                <p className="font-medium">Yaoundé, Simbock</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-md bg-white rounded-xl p-6 mt-6 shadow-md">
                    <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Mes points</h1>
                    <button className="flex items-center gap-2 bg-pink-200 px-4 py-2 rounded-xl text-deep-pink">
                        <Info size={20} />
                        <span>En savoir plus</span>
                    </button>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-center items-center flex-col">
                            <img src={image} alt="" className="p-3 size-48"/>
                            <p className="text-xl text-gray-500">Vous avez 100 points</p>
                            <button className=" px-4 py-5 rounded-xl text-deep-pink mb-deep-pink">
                                <span>Echanger mes points</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default User;