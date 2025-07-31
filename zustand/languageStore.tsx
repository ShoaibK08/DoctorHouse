import { Language, LanguageJson, LanguageState } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const languageStore = create<LanguageState>()(
    persist(
        (set, get) => ({
            json: null,
            language: null,
            hydrated: false, // to track the hydration status

            setLanguageJsonData: (data: LanguageJson) => set({ json: data }),
            setLanguageInfo: (data: Language) => set({ language: data }),
            getLabels: (formName: string) => {
                const json = get().json;
                if (!json) return null;
                const formLabel = json.formLabels.find(label => label.FormName === formName);
                return formLabel ? JSON.parse(formLabel.Labels) : null;
            },
            setHydrated: () => set({ hydrated: true }),
        }),
        {
            name: "doctor-house-language-store",
            onRehydrateStorage: () => (state) => {
                state?.setHydrated();
            },
        }
    )
);

export default languageStore;
