import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { CiMenuFries } from "react-icons/ci";

const navItems = [
  { name: "About", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-2xl font-bold text-text-light dark:text-text-dark"
          prefetch={false}
        >
          <span className="sr-only">Portfolio</span>
          {`<DelightAS />`}
        </Link>
        <nav className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden bg-background-light dark:bg-background-dark hover:bg-box-light dark:hover:bg-box-dark"
              >
                <CiMenuFries className="h-6 w-6 text-background-dark dark:text-background-light" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 bg-background-light dark:bg-background-dark"
            >
              <div className="grid gap-4">
                {navItems.map((item) => (
                  <SheetClose key={item.name} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2  px-3 py-2 text-sm font-medium rounded-md bg-background-light dark:bg-background-dark transition-colors
                      hover:bg-shadow-light
                    hover:text-background-dark focus:bg-shadow-light focus:text-text-light
                      focus:outline-none 
                   dark:hover:bg-box-dark
                    dark:hover:text-background-light 
                    dark:focus:text-text-dark
                    dark:focus:bg-box-dark"
                      prefetch={false}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuLink key={item.name} asChild>
                  <Link
                    href={item.href}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background-light dark:bg-background-dark px-4 py-2 text-sm font-medium transition-colors 
                    hover:bg-shadow-light
                    hover:text-background-dark focus:bg-shadow-light focus:text-text-light focus:outline-none disabled:pointer-events-none disabled:opacity-50 
                    dark:hover:bg-box-dark
                    dark:hover:text-background-light 
                    dark:focus:text-text-dark
                    dark:focus:bg-box-dark"
                    prefetch={false}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
}
