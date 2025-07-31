import { UserState } from "@/types";
import { create } from "zustand";
import { persist, } from "zustand/middleware";

const userStore = create<UserState>()(
    persist(
        (set, get) => ({
            user: null,
            token: "",
            isLoggedIn: false,
            hydrated: false, // to track the hydration status

            setProfile: (profile: any) => set({ ...profile }),

            setLogout: () =>
                set(() => ({
                    tokens: "",
                    user: null, // Reset user to null on logout
                    isLoggedIn: false,
                })),

            // 
            setHydrated: () => set({ hydrated: true })
        }),
        {
            name: "doctor-house-user-store",
            onRehydrateStorage: () => (state) => {
                state?.setHydrated();
            }
        }
    )
);

export default userStore;
