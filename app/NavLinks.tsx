"use client";

import React from "react";
import { categories } from "./lib/utils";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathName = usePathname();

    const isActive = (str: string) => {
        return pathName.split('/').pop() === str;
    }
    return <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-2 pb-4 max-w-6xl mx-auto border-b">
        {categories.map((category) => <NavLink key={category} category={category} isActive={isActive(category)} />)}
    </nav>
}

export default NavLinks;