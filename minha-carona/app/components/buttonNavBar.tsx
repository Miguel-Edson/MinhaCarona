import React from "react";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href: string;
}


export default function ButtonNavbar({children, href} : ButtonProps) {


  return (
    <Link href={href} className="paragrafo text-white px-4 py-2  hover:text-secundary_blue">
        {children}
    </Link>
  ) 
}
