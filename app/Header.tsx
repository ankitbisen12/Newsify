import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from 'next/link';
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeBtn from "./DarkModeBtn";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 px-6 py-10 md:p-10 items-center">
        <Bars3Icon className="w-8 h-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center underline decoration-6 decoration-nav-100">Newsify</h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/*Dark Mode*/}
          <DarkModeBtn />
          <button className="hidden md:inline bg-nav-100 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-nav-100">Subscibe Now</button>
        </div>
      </div>

      {/* NavLinks */}
      <NavLinks />

      <SearchBox />
    </header>);
}

export default Header;