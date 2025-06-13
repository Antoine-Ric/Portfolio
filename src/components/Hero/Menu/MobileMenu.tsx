"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const inActiveStyle = "text-white/50 hover:bg-white/40 hover:text-white/80";
const activeStyle =
  "bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 px-4 py-1 rounded-full";

interface NavItem {
  name: string;
  href: string;
  isActive: boolean;
}

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [navMenu, setNavMenu] = useState<NavItem[]>([
    { name: "Home", href: "/", isActive: true },
    { name: "About Me", href: "#about", isActive: false },
    { name: "Projects", href: "#projects", isActive: false },
    { name: "Blog", href: "#blog", isActive: false },
    { name: "Hobbies", href: "#hobbies", isActive: false },
  ]);

  const setActiveNavItem = (selectedName: string) => {
    setNavMenu((prevNavMenu) =>
      prevNavMenu.map((item) => ({
        ...item,
        isActive: item.name === selectedName,
      }))
    );
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="relative z-10 flex items-center justify-between px-20 top-1"
        >
          <div className="flex lg:flex-1">
            <Link className="flex items-center gap-2" href="/">
              <Image
                src="/images/svg/diamond.svg"
                alt="logo"
                width={20}
                height={20}
              />
              <div className="text-white text-xl font-bold">
                Ricardi Antoine
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden gap-4 rounded-full bg-white/20 px-5 py-2 text-white lg:flex lg:w-full lg:flex-1 lg:items-center lg:gap-x-12">
            {/* Desktop Mobile Menu */}
            {navMenu.map((item) => (
              <span key={item.name} onClick={() => setActiveNavItem(item.name)}>
                <a
                  className={clsx({
                    "flex-2 relative rounded-full px-4 py-1 transition-all":
                      true,
                    [activeStyle]: item.isActive,
                    [inActiveStyle]: !item.isActive,
                  })}
                  href={item.href}
                >
                  {item.name}
                </a>
              </span>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="relative z-50">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Ricardi Antoine</span>
                  <Image
                    src="/images/svg/diamond.svg"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  <div className="text-lg font-seminbold text-white">
                    Ricardi Antoine
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navMenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* Separator */}
                <div className="flex flex-1 items-center justify-center">
                  <div className="h-[2px] w-[70vw] bg-white/100"></div>
                </div>
                {/* Social Links */}
                <div className="mt-10 grid gap-10">
                  <div className="align-center flex flex-1 justify-center gap-10">
                    <a
                      href="https://linkedin.com/in/ricardiantoine/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/svg/LinkedIn-Logo.svg"
                        alt="LinkedIn"
                        width={50}
                        height={50}
                      />
                    </a>
                    <a
                      className="grid items-center"
                      href="https://www.github.com/Antoine-ric"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/svg/Github-Logo.svg"
                        alt="GitHub Logo"
                        width={50}
                        height={50}
                      />
                    </a>
                    <a
                      href="https://twitter.com/b0rnsnner1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid items-center"
                    >
                      <Image
                        src="/images/svg/X-Twitter-Logo.svg"
                        alt="Twitter Logo"
                        width={50}
                        height={50}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/ricardiantoine/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid items-center"
                    >
                      <Image
                        src="/images/svg/Instagram-Logo.svg"
                        alt="Instagram Logo"
                        width={50}
                        height={50}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
