"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {useEffect,useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Search, ShoppingBag } from "lucide-react";
import Container from "./Container";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const cartItems = useSelector((state) => state.cart.items);
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
    }
  ];
  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(`/shop?search=${search}`);
  };
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  useEffect(() => {

    if (pathname !== "/") {
      setSearch("");
    }
  
  }, [pathname]);
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link
            href="/"
            className="logo-text text-3xl font-semibold tracking-wide"
          >
            Tinted
          </Link>

          {/* NAV LINKS */}
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

          {/* ACTIONS */}
          <div className="flex items-center gap-5">
            {pathname === "/" && (
              <form
                onSubmit={handleSearch}
                className="hidden lg:flex items-center border border-border rounded-full px-4 h-11"
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent outline-none text-sm w-[140px]"
                />

                <button type="submit">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            )}

            <Link href="/cart">
              <button className="relative hover:text-primary transition-colors cursor-pointer">
                <ShoppingBag className="w-5 h-5 " />

                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">
                  {totalQuantity}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
