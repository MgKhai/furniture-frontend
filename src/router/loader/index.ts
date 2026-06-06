import { api, authApi } from "@/api";
import { redirect } from "react-router";

export const homeLoader = async () => {
  try {
    const response = await api.get("user/products");
    return response.data;
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
