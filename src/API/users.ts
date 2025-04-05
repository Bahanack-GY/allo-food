import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1/users";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface OrderData {
  items: Array<{
    foodId: string;
    quantity: number;
  }>;
  deliveryAddress: string;
  paymentMethod: string;
  totalAmount: number;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  location: string;
  phone: string;
}

// Authentication
export const login = (email: string, password: string) =>
  api.post("/signin", { email, password });
export const register = (data: RegisterData) => api.post("/signup", data);
export const logout = () => api.post("/auth/logout");

// Food Items
export const getFoods = () => api.get("/foods");
export const getBurgers = () => api.get("/burger");
export const getChicken = () => api.get("/chicken");
export const getGrillades = () => api.get("/grillades");
export const getDrinks = () => api.get("/drinks");
export const getFoodById = (id: string) => api.get(`/foods/${id}`);
export const getFoodInfo = (id: string) => api.get(`/plate/${id}`);

// Cart
export const addToCart = (itemId: string, quantity: number) =>
  api.post("/cart", { itemId, quantity });
export const getCart = () => api.get("/cart");
export const removeFromCart = (itemId: string) => api.delete(`/cart/${itemId}`);

// Orders
export const placeOrder = (orderData: OrderData) => api.post("/orders", orderData);
export const getUserOrders = (id: string) => api.get(`/userOrders/${id}`);
export const getOrderById = (orderId: string) => api.get(`/orders/${orderId}`);

// Reviews
export const addReview = (
  foodId: string,
  review: { rating: number; comment: string }
) => api.post(`/foods/${foodId}/reviews`, review);
export const getReviews = (foodId: string) =>
  api.get(`/foods/${foodId}/reviews`);

export default api;
