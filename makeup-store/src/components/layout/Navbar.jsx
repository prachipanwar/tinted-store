"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

import Container from "./Container";

export default function Navbar() {
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

            <Link
              href="/"
              className="hover:text-primary transition-colors"
            >
              Home
            </Link>

            <Link
              href="/"
              className="hover:text-primary transition-colors"
            >
              Shop
            </Link>

            <Link
              href="/"
              className="hover:text-primary transition-colors"
            >
              Collections
            </Link>

          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-5">

            <button className="hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <button className="relative hover:text-primary transition-colors">

              <ShoppingBag className="w-5 h-5" />

              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px]">
                0
              </span>

            </button>

          </div>

        </div>

      </Container>

    </header>
  );
}