import React from "react";
import { LucideProps } from "lucide-react";

export interface ISidebarItems {
    name: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    color:string;
    path:string;
}