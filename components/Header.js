import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Lang from "./Lang";

import MenuItem from "./MenuItem";
import MENU_ITEMS from "../data/menu_items";

const Header = () => {
  const router = useRouter();
  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  const toggleMobileNav = () => setMobileNavOpened(!mobileNavOpened);

  return (
    <header className="sticky top-0 z-30 bg-black text-white opacity-95">
      <div className="flex  items-center justify-between h-28 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="flex items-center w-full">
          <Link href="/" locale={router.local}>
            <a className="flex p-2 mr-auto lg:mr-2 font-bold">
              <Image
                src="/images/logo-white.svg"
                height="90px"
                width="180px"
                alt="logo"
              />
            </a>
          </Link>

          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={toggleMobileNav}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-end flex-shrink-0">
          <nav
            className="hidden lg:tracking-wide lg:text-xs lg:space-x-4 lg:flex lg:items-center uppercase"
            aria-label="Desktop Menu"
          >
            {MENU_ITEMS.map((item) => {
              let active;
              router.pathname === item.href
                ? (active = true)
                : (active = false);
              return (
                <MenuItem
                  key={item.href}
                  {...item}
                  locale={router.locale}
                  active={active}
                />
              );
            })}
            <Lang />
            {/* <li className="relative group list-none">
              <a
                className=" hover:opacity-90 transition-all duration-100"
                href="https://wa.me/38598000000"
              >
                <Image
                  src="/images/whatsapp.svg"
                  alt="language"
                  height="64px"
                  width="19px"
                />
              </a>
            </li> */}
          </nav>

          {/* MOBILNI MENU */}
          <nav aria-label="Mobile Menu">
            <ul
              onClick={toggleMobileNav}
              className={`bg-black/90 flex flex-col text-2xl tracking-wide justify-center fixed top-0 left-0 w-full h-full z-30 items-end px-4 translate-x-full ${
                !mobileNavOpened
                  ? "opacity-0"
                  : "opacity-100 -translate-x-0 ease-in-out"
              } transition-all duration-200`}
            >
              {MENU_ITEMS.map((item) => {
                let active;
                router.pathname === item.href
                  ? (active = true)
                  : (active = false);
                return (
                  <MenuItem
                    key={item.href}
                    {...item}
                    locale={router.locale}
                    active={active}
                  />
                );
              })}
              <Lang />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
