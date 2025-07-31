import api from "@/api/api";

export const getLanguageJson = (languageId: any) => api.get(`Form/${languageId}`);
