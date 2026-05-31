import { api } from "@/api";

export const homeLoader = async () => {
  try {
    const response = await api.get("/user/products");
    return response.data;
  } catch (error) {
    console.error("Error home loading:", error);
  }
};
