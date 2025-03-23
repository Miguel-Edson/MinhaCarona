import React from "react";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
}


export default function Button({children, href} : ButtonProps) {


    return href? (
        <Link href={href} className="paragrafo bg-secundary_red text-white px-4 my-auto py-2 item rounded-lg hover:bg-primary_red">
            {children}
        </Link>
    ) : (
        <button className="paragrafo bg-secundary_red text-white px-4 my-auto py-2 rounded-lg hover:bg-primary_red">
            {children}
        </button>
    )
}
