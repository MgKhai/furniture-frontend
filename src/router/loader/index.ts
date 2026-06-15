import { api, authApi } from "@/api";
import useAuthStore from "@/store/authStore";
import { redirect } from "react-router";

export const homeLoader = async () => {
  try {
    // const response = await api.get("user/products");
    // return response.data;
    const products = await api.get("user/products?limits=8");
    const posts = await api.get("user/posts/infinite?limits=3");
    // const [products, posts] = await Promise.all([
    //   await api.get("user/products?limits=8"),
    //   await api.get("user/posts/infinite?limits=3"),
    // ]);
    return { productsData: products.data, postsData: posts.data };
  } catch (error) {
    console.error("HomeLoader error: ", error);
    throw error;
  }
};

export const loginLoader = async () => {
  try {
    const response = await authApi.get("auth-check");
    if (response.status !== 200) {
      return null;
    }
    return redirect("/");
  } catch (error) {
    console.error("LoginLoader error: ", error);
  }
};

export const otpLoader = async () => {
  const authStore = useAuthStore.getState();

  if (authStore.status !== "otp") {
    return redirect("/register");
  }
  return null;
};

export const confirmPasswordLoader = async () => {
  const authStore = useAuthStore.getState();

  if (authStore.status !== "confirm") {
    return redirect("/register");
  }

  return null;
};
