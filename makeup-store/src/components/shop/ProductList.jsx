"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Container from "../layout/Container";
import ShopProductCard from "./ShopProductCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import SortDropdown from "./SortDropDown";

import { getProducts } from "@/services/products";

const INITIAL_PRODUCTS = 8;

export default function ProductList({initialSearch,initialCategory,}) {

  const loaderRef = useRef(null);

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState(initialSearch);

  const [selectedCategory, setSelectedCategory] =
  useState(initialCategory);

  const [sortBy, setSortBy] = useState("");

  const [visibleCount, setVisibleCount] =
    useState(INITIAL_PRODUCTS);

  /*
    FETCH PRODUCTS
  */
  useEffect(() => {

    async function loadProducts() {

      try {

        const data = await getProducts();

        setProducts(data);

      } catch (error) {

        console.error("Failed to fetch products", error);
      }
    }

    loadProducts();

  }, []);

  /*
    UNIQUE CATEGORIES
  */
    const categories = useMemo(() => {

        const allCategories = products
          .map((product) => product.category)
          .filter(Boolean);
      
        return ["All", ...new Set(allCategories)];
      
      }, [products]);

  /*
    FILTER + SEARCH + SORT
  */
  const filteredProducts = useMemo(() => {

    let updatedProducts = [...products];

    /*
      SEARCH
    */
    if (search) {

      updatedProducts = updatedProducts.filter(
        (product) =>
          product.name
            ?.toLowerCase()
            .includes(search.toLowerCase()) ||
      
          product.category
            ?.toLowerCase()
            .includes(search.toLowerCase()) ||
      
          product.brand
            ?.toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    /*
      CATEGORY FILTER
    */
    if (selectedCategory !== "All") {

      updatedProducts = updatedProducts.filter(
        (product) =>
        product.category?.toLowerCase() ===
        selectedCategory?.toLowerCase()
      );
    }

    /*
      SORTING
    */
    if (sortBy === "low") {

      updatedProducts.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    }

    if (sortBy === "high") {

      updatedProducts.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
    }
    if (sortBy === "az") {
        updatedProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

    return updatedProducts;

  }, [
    products,
    search,
    selectedCategory,
    sortBy,
  ]);

  /*
    RESET VISIBLE PRODUCTS
    WHEN FILTERS CHANGE
  */
  useEffect(() => {

    setVisibleCount(INITIAL_PRODUCTS);

  }, [filteredProducts]);

  /*
    INFINITE SCROLL
  */
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        const target = entries[0];

        if (
          target.isIntersecting &&
          visibleCount < filteredProducts.length
        ) {

          setVisibleCount((prev) =>
            Math.min(
              prev + 6,
              filteredProducts.length
            )
          );
        }
      },
      {
        rootMargin: "200px",
      }
    );

    if (loaderRef.current) {

      observer.observe(loaderRef.current);
    }

    return () => {

      if (loaderRef.current) {

        observer.unobserve(loaderRef.current);
      }
    };

  }, [visibleCount, filteredProducts.length]);

  console.log("categories---",filteredProducts)

  return (
    <section className="pt-18 pb-12">

    <Container>
  
      {/* PAGE HEADER */}
      <div className="mb-10">
  
        <p className="uppercase tracking-[4px] text-xs md:text-sm text-muted-foreground mb-4">
          Discover Collection
        </p>
  
        <h1 className="text-3xl md:text-5xl tracking-tight font-semibold">
          Shop Beauty Essentials
        </h1>
  
      </div>
  
      {/* TOP CONTROLS */}
      <div className="flex flex-col gap-6 mb-10">
  
        {/* SEARCH */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
  
        {/* FILTERS + SORT */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
  
          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={
              setSelectedCategory
            }
          />
  
          <SortDropdown
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
  
        </div>
  
      </div>
  
      {/* PRODUCT COUNT */}
      <div className="flex items-center justify-between mb-10 border-y border-border py-4">
  
        <p className="text-sm text-muted-foreground">
  
          Showing
  
          <span className="font-medium text-foreground mx-1">
            {filteredProducts.length}
          </span>
  
          products
  
        </p>
  
        {(search ||
          selectedCategory !== "All" ||
          sortBy) && (
  
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("All");
              setSortBy("");
            }}
            className="text-sm underline underline-offset-4 hover:text-primary transition"
          >
            Clear Filters
          </button>
  
        )}
  
      </div>
  
      {/* EMPTY STATE */}
      {filteredProducts.length === 0 ? (
  
        <div className="py-32 text-center">
  
          <h3 className="text-3xl font-semibold mb-4">
            No Products Found
          </h3>
  
          <p className="text-muted-foreground">
            Try changing your search or filters.
          </p>
  
        </div>
  
      ) : (
  
        /* PRODUCT GRID */
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8">
  
          {filteredProducts
            .slice(0, visibleCount)
            .map((product) => (
  
              <ShopProductCard
                key={product.id}
                product={product}
              />
  
            ))}
  
        </div>
  
      )}
  
      {/* INFINITE SCROLL TRIGGER */}
      <div
        ref={loaderRef}
        className="h-20"
      />
  
    </Container>
  
  </section>
  );
}