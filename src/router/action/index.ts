import { authApi, api } from "@/api";
import { redirect, type ActionFunctionArgs } from "react-router";
import { AxiosError } from "axios";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const authData = {
    phone: formData.get("phone") as string,
    password: formData.get("password") as string,
  };

  try {
    const response = await authApi.post("login", authData);
    if (response.status !== 200) {
      return { error: response.data || "Login Failed" };
    }

    const redirectTo = new URL(request.url).searchParams.get("redirect") || "/";
    return redirect(redirectTo);
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data || { error: "Login Failed" };
      return errorMessage;
    }
    throw error;
  }
};

export const logoutAction = async () => {
  try {
    await api.post("logout");
    return redirect("/login");
  } catch (error) {
    console.error("Logout error: ", error);
    throw error;
  }
};

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const authData = {
    phone: formData.get("phone") as string,
  };

  try {
    const response = await authApi.post("register", authData);
    if (response.status !== 200) {
      return { error: response.data || "Register Failed" };
    }

    // client state management

    return redirect("/register/otp");
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data || { error: "Register Failed" };
      return errorMessage;
    }
    throw error;
  }
};
