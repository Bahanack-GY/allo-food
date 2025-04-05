import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Phone, Calendar, MapPin } from "lucide-react";
import Background from "../components/common/Background";
import bg from "../assets/icons/Pattern2.png";
import image from "../assets/icons/login.png";
import { useMutation } from "@tanstack/react-query";
import { login, register } from "../API/users";
import { useNavigate } from "react-router-dom";

interface FormData {
    name?: string;
    email: string;
    phone?: string;
    password: string;
    confirmPassword?: string;
    dateOfBirth?: string;
    location?: string;
}

function SignInUp() {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const loginMutation = useMutation({
        mutationFn: (data: { email: string; password: string }) => login(data.email, data.password),
        onSuccess: (response) => {
            const token = response.data.token;
            localStorage.setItem('authToken', token);
            navigate('/');
        },
        onError: () => {
            setErrors({ email: "Email ou mot de passe incorrect" });
        }
    });

    const registerMutation = useMutation({
        mutationFn: (data: FormData) => register({
            name: data.name!,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword!,
            phone: data.phone!,
            location: data.location!
        }),
        onSuccess: (response) => {
            const token = response.data.token;
            localStorage.setItem('authToken', token);
            navigate('/');
        },
        onError: () => {
            setErrors({ email: "Erreur lors de l'inscription" });
            
        }
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string) => {
        const phoneRegex = /^6\d{8}$/;
        return phoneRegex.test(phone);
    };

    const validatePassword = (password: string) => {
        return password.length >= 8;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Partial<FormData> = {};

        // Common validations
        if (!validateEmail(formData.email)) {
            newErrors.email = "Email invalide";
        }
        if (!validatePassword(formData.password)) {
            newErrors.password = "Le mot de passe doit contenir au moins 8 caractères";
        }

        // Sign up specific validations
        if (isSignUp) {
            if (!formData.name?.trim()) {
                newErrors.name = "Le nom est requis";
            }
            if (!formData.phone || !validatePhone(formData.phone)) {
                newErrors.phone = "Numéro de téléphone invalide (6 suivi de 8 chiffres)";
            }

            if (!formData.location?.trim()) {
                newErrors.location = "Localisation requise";
            }
            if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            if (isSignUp) {
                registerMutation.mutate(formData);
            } else {
                loginMutation.mutate({ email: formData.email, password: formData.password });
            }
        }
    };

    return (
        <div className="min-h-screen bg-pink-bg bg-opacity-50">
            <div className="opacity-20">
                <Background image={bg} />
            </div>
            <div className="flex justify-center">
                <img src={image} alt="" className="size-52"/>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden">
                    {/* Toggle Buttons */}
                    <div className="flex">
                        <button
                            className={`flex-1 py-4 text-center font-medium transition-colors ${
                                !isSignUp ? "text-deep-pink border-b-2 border-deep-pink" : "text-gray-500"
                            }`}
                            onClick={() => setIsSignUp(false)}
                        >
                            Connexion
                        </button>
                        <button
                            className={`flex-1 py-4 text-center font-medium transition-colors ${
                                isSignUp ? "text-deep-pink border-b-2 border-deep-pink" : "text-gray-500"
                            }`}
                            onClick={() => setIsSignUp(true)}
                        >
                            Inscription
                        </button>
                    </div>

                    {/* Forms */}
                    <div className="p-6">
                        <AnimatePresence mode="wait">
                            <motion.form
                                key={isSignUp ? "signup" : "signin"}
                                initial={{ opacity: 0, x: isSignUp ? 100 : -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isSignUp ? -100 : 100 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                {isSignUp && (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Nom complet
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name || ""}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-pink ${
                                                        errors.name ? "border-red-500" : "border-gray-300"
                                                    }`}
                                                    placeholder="Entrez votre nom"
                                                />
                                            </div>
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Téléphone
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone || ""}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-pink ${
                                                        errors.phone ? "border-red-500" : "border-gray-300"
                                                    }`}
                                                    placeholder="6XXXXXXXX"
                                                />
                                            </div>
                                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Date de naissance
                                            </label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="date"
                                                    name="dateOfBirth"
                                                    value={formData.dateOfBirth || ""}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-pink ${
                                                        errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                                                    }`}
                                                />
                                            </div>
                                            {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Localisation
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={formData.location || ""}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-pink ${
                                                        errors.location ? "border-red-500" : "border-gray-300"
                                                    }`}
                                                    placeholder="Votre localisation"
                                                />
                                            </div>
                                            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-pink ${
                                                errors.email ? "border-red-500" : "border-gray-300"
                                            }`}
                                            placeholder="Entrez votre email"
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Mot de passe
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className={`w-full pl-10 pr-10 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-pink ${
                                                errors.password ? "border-red-500" : "border-gray-300"
                                            }`}
                                            placeholder="Entrez votre mot de passe"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                </div>

                                {isSignUp && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Confirmer le mot de passe
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                name="confirmPassword"
                                                value={formData.confirmPassword || ""}
                                                onChange={handleInputChange}
                                                className={`w-full pl-10 pr-10 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-deep-pink ${
                                                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                                                }`}
                                                placeholder="Confirmez votre mot de passe"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                            >
                                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loginMutation.isPending || registerMutation.isPending}
                                    className="w-full bg-deep-pink text-white py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSignUp 
                                        ? registerMutation.isPending 
                                            ? "Inscription en cours..." 
                                            : "S'inscrire"
                                        : loginMutation.isPending
                                            ? "Connexion en cours..."
                                            : "Se connecter"
                                    }
                                </button>
                            </motion.form>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInUp;
