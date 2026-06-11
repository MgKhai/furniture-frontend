import { authApi, api } from "@/api";
import { redirect, type ActionFunctionArgs } from "react-router";
import { AxiosError } from "axios";
import useAuthStore, { Status } from "@/store/authStore";

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
  const authStore = useAuthStore.getState();
  const formData = await request.formData();
  const authData = {
    phone: formData.get("phone") as string,
  };

  try {
    const response = await authApi.post("register", authData);
    if (response.status !== 200) {
      return { error: response.data || "Sending OTP Failed" };
    }

    // client state management
    authStore.setAuth(response.data.phone, response.data.token, Status.otp);

    return redirect("/register/otp");
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data || {
        error: "Sending OTP Failed",
      };
      return errorMessage;
    }
    throw error;
  }
};

export const otpAction = async ({ request }: ActionFunctionArgs) => {
  const authStore = useAuthStore.getState();
  const formData = await request.formData();

  const credentials = {
    phone: authStore.phone,
    token: authStore.token,
    otp: formData.get("otp"),
  };

  try {
    const response = await authApi.post("verify-otp", credentials);

    if (response.status !== 200) {
      return { error: response.data || "Verifying OTP Failed" };
    }

    // client state management
    authStore.setAuth(response.data.phone, response.data.token, Status.confirm);

    return redirect("/register/confirm-password");
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data || {
        error: "Verfying OTP Failed",
      };
      return errorMessage;
    }
    throw error;
  }
};

export const confirmPasswordAction = async ({
  request,
}: ActionFunctionArgs) => {
  const authStore = useAuthStore.getState();
  const formData = await request.formData();

  const credentials = {
    phone: authStore.phone,
    password: formData.get("password"),
    token: authStore.token,
  };

  try {
    const response = await authApi.post("confirm-password", credentials);

    if (response.status !== 200) {
      return { error: response.data || "Registration Failed" };
    }

    // client state management
    authStore.clearAuth();

    return redirect("/");
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data || {
        error: "Registration Failed",
      };
      return errorMessage;
    }
    throw error;
  }
};
