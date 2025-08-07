export interface FormLabel {
  FormID: number;
  FormName: string;
  LanguageID: number;
  Labels: string; // JSON string
  Language: any | null;
}

export interface Language {
  LanguageID: number;
  LanguageName: string;
  ShortName: string;
  CountryCode?: string;
  AppHelps: any[];
  Contacts: any[];
  FormLabels: FormLabel[];
  Legals: any[];
  PrivacyPolicies: any[];
  UserHasLanguages: any[];
}

export interface Speciality {
  ID: number;
  Speciality1: string;
  LanguageID: number;
  MappingID: number;
  UserHasSpecialities: any[];
}

export interface PaymentGateway {
  ID: number;
  PaymentGateway1: string;
  PaymentInfoes: any[];
}

export interface ISDCountry {
  ISDID: number;
  CountryName: string;
  ISDCode: string;
  LanguageID: number;
}

export interface AvailabilityType {
  AvailabilityTypeID: number;
  LanguageID: number;
  AvailabilityName: string;
  MappingID: number;
}

export interface LanguageJson {
  formLabels: FormLabel[];
  languages: Language[];
  specialities: Speciality[];
  paymentGateways: PaymentGateway[];
  countries: any[] | null;
  IsdCountries: ISDCountry[];
  availableTypes: AvailabilityType[];
}

export interface LanguageState {
  json: LanguageJson | null;
  language: Language | null;
  hydrated: boolean;
  setLanguageJsonData: (data: LanguageJson) => void;
  setLanguageInfo: (data: Language) => void;
  getLabels: (formName: string) => Record<string, any> | null;
  setHydrated: () => void;
}
// ! USER
export interface Address {
  _id: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  isDefault: boolean;
}
export interface User {
  email: string;
  fullName: string;
  role: "USER" | "ADMIN";
  address: Address[];
  createdAt?: string;
  updatedAt?: string;
}
export interface UserState {
  user: User | null;
  token: string;
  isLoggedIn: boolean;
  hydrated: boolean;
  setProfile: (profile: any) => void;
  setLogout: () => void;
  setHydrated: () => void;
}
