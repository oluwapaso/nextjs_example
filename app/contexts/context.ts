import { LangContextType } from "@/types/types";
import { createContext } from "react";

export const LanguageContext = createContext<LangContextType | null>(null)