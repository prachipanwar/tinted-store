"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Menu, Search, ShoppingBag } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import Container from "./Container";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const pathname = usePathname();

  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Best Sellers",
      href: "/#best-sellers",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(`/shop?search=${search}`);
  };

  useEffect(() => {
    if (pathname !== "/") {
      setSearch("");
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            href="/"
            className="logo-text text-3xl font-semibold tracking-wide"
          >
            Tinted
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    transition-colors

                    ${isActive ? "text-primary" : "hover:text-primary"}
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-5">
            {/* SEARCH */}
            {pathname === "/" && (
              <form
                onSubmit={handleSearch}
                className="hidden lg:flex items-center border border-border rounded-full px-4 h-11 bg-background"
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent outline-none text-sm w-[140px]"
                />

                <button type="submit" className="hover:text-primary transition">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* CART */}
            <Link
              href="/cart"
              className="relative hover:text-primary transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />

              {mounted && totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>

          {/* MOBILE NAV */}
          <div className="flex md:hidden items-center gap-5">
            {/* MOBILE CART */}
            <Link href="/cart" className="relative">
              <ShoppingBag className="w-6 h-6" />

              {mounted && totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* MOBILE MENU */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="hover:text-primary transition cursor-pointer">
                  <Menu className="w-7 h-7" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[320px] border-l border-border/50 bg-[#fffaf7] pt-20 px-8"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                {/* SIDEBAR HEADER */}
                <div className="mb-12">
                  <Link href="/" className="logo-text text-4xl font-semibold">
                    Tinted
                  </Link>

                  <p className="text-sm text-muted-foreground mt-3 leading-6">
                    Luxury beauty essentials crafted for timeless elegance.
                  </p>
                </div>

                {/* NAVIGATION */}
                <nav className="flex flex-col gap-2">
                  {navItems.slice(0, 2).map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`
                          flex items-center justify-between
                          rounded-2xl px-5 py-2
                          text-md font-medium
                          transition-all duration-300

                          ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-accent"
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* CART CTA */}
                <div className="border-t border-border mt-10 pt-8">
                  <Link
                    href="/cart"
                    className="flex items-center justify-between rounded-2xl bg-primary text-primary-foreground px-5 py-2"
                  >
                    <span className="font-medium">View Cart</span>

                    <span>{totalQuantity}</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
