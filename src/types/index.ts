import { MouseEvent } from "react";

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
