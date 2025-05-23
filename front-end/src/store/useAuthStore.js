import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => {
    return {
        authUser: null,
        isSigningUp: false,
        isLoggingIn: false,
        isUpdatingProfile: false,
        isCheckingAuth: true,

        checkAuth: async () => {
            try {
                const res = await axiosInstance.get("/auth/check");
                if (res.data) {
                    set({ authUser: res.data });
                } else {
                    set({ authUser: null });
                }
            } catch (error) {
                console.error("Error in checkAuth:", error.response?.data || error.message);
                set({ authUser: null });
            } finally {
                set({ isCheckingAuth: false });
            }
        },

        signup: async (data) => {
            set({ isSigningUp: true });
            try {
                const res = await axiosInstance.post("/auth/signup", data); // ✅ Store response
                set({ authUser: res.data }); // ✅ Use res correctly
                toast.success("Account created successfully");
            } catch (error) {
                console.error("Signup Error:", error); // Optional: for debugging
                const message = error.response?.data?.message || "Signup failed";
                toast.error(message); // ✅ Correctly display message
            } finally {
                set({ isSigningUp: false });
            }
        },

        login: async (data) => {
            set({ isLoggingIn: true });
            try {
                const res = await axiosInstance.post("/auth/login", data);
                set({ authUser: res.data });
                toast.success("Logged in successfully");

                get().connectSocket();
            } catch (error) {
                toast.error(error.response.data.message);
            } finally {
                set({ isLoggingIn: false });
            }
        },

        logout: async () => {
            try {
                await axiosInstance.post("/auth/logout");
                set({ authUser: null });
                toast.success("logged out successfully")
            } catch (error) {
                toast.error(error.response.data.message);
            }
        },

        updateProfile: async (data) => {
            set({ isUpdatingProfile: true });
            try {
                const res = await axiosInstance.put("/auth/updateProfile", data);
                set({ authUser: res.data });
                toast.success("Profile updated successfully");
            } catch (error) {
                console.log("error in update profile:", error);
                toast.error(error.response.data.message);
            } finally {
                set({ isUpdatingProfile: false });
            }
        },


    };
});
