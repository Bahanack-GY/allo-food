import { motion } from "framer-motion";
import { Share2, Home, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Background from "../components/common/Background";
import bg from "../assets/icons/Pattern2.png";


function ConfirmedPaiement() {
    const navigate = useNavigate();

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Allo-Food',
                text: 'Découvrez Allo-Food, votre application de livraison de repas préférée!',
                url: window.location.origin
            }).catch(console.error);
        } else {
            // Fallback for browsers that don't support Web Share API
            alert('Partagez Allo-Food avec vos amis!');
        }
    };

    return (
        <div className="min-h-screen bg-pink-bg bg-opacity-50 ">
            <div className="opacity-20">
                <Background image={bg} />
            </div>

            <div className="container mx-auto px-4 py-8 flex justify-center items-center h-screen">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md mx-auto p-8 text-center border rounded-xl border-deep-pink"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="bg-pink-200 p-4 rounded-full">
                            <CheckCircle size={60} className="text-deep-pink" />
                        </div>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl font-bold text-gray-800 mb-4"
                    >
                        Merci pour votre commande!
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-600 mb-8"
                    >
                        Votre commande a été confirmée avec succès. Nous vous enverrons un email avec les détails de votre commande.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="space-y-4"
                    >
                        <button
                            onClick={() => navigate('/')}
                            className="w-full bg-deep-pink text-white py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                        >
                            <Home size={20} />
                            Continuer vos achats
                        </button>

                        <button
                            onClick={handleShare}
                            className="w-full bg-pink-200 text-deep-pink py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                        >
                            <Share2 size={20} />
                            Partager l'application
                        </button>
                    </motion.div>
                </motion.div>
            </div>

    
        </div>
    );
}

export default ConfirmedPaiement;