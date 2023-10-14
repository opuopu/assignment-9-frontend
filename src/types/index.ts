import { loginType } from "@/types";
import { loginType } from "./index";
import { ChangeEvent, FormEvent, MouseEvent } from "react";

export interface ProductCardProps {
   name: string;
   email: string;
   location: string;
   image: string;
}

export interface ProductRowProps {
   propertyName: string;
   propertyValue: string;
   containerStyles?: string;
}

export interface ActionButtonProps {
   children: React.ReactNode;
   containerStyles?: string;
   handleAction: (e: MouseEvent<HTMLButtonElement>) => void;
}

export type ChangeEventType = (e: ChangeEvent<HTMLInputElement>) => void;
export type OnSubmitType = (e: FormEvent<HTMLFormElement>) => void;

export interface InputTextProps {
   type: string;
   name: string;
   onChange: ChangeEventType;
   placeholder?: string;
   error: string;
   label?: string;
   styles?: string;
   initialValue?: any;
}

export interface loginType {
   email: string;
   password: string;
}

export interface loginError extends loginType {
   general?: string;
}
export interface SubmitButtonProps {
   text: string;
   containerStyles?: string;
   disabled: boolean;
}

export interface registerType extends loginType {
   firstName: string;
   lastName: string;
   phone: string;
   confirm: string;
}

export interface registerErrorType extends loginError {
   firstName: string;
   lastName: string;
   phone: string;
   confirm: string;
}
