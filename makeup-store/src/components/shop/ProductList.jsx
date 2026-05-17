"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import Container from "../layout/Container";
import ShopProductCard from "./ShopProductCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import SortDropdown from "./SortDropDown";

import { getProducts } from "@/services/products";

const INITIAL_PRODUCTS = 8;

export default function ProductList() {

  const loaderRef = useRef(null);

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

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
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    /*
      CATEGORY FILTER
    */
    if (selectedCategory !== "All") {

      updatedProducts = updatedProducts.filter(
        (product) =>
          product.category === selectedCategory
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

  console.log("categories---",categories)

  return (
    <section className="py-20 md:py-15">

      <Container>

        {/* TOP BAR */}
        <div
          className="
            mb-12 flex flex-col gap-5
            lg:flex-row lg:items-center
            lg:justify-between
          "
        >

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <div className="flex flex-wrap gap-4">

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
        <div className="flex items-center justify-between mb-8">

  <p className="text-muted-foreground">
    Showing{" "}
    <span className="font-medium text-foreground">
      {filteredProducts.length}
    </span>{" "}
    products
  </p>

  {(search || selectedCategory !== "All" || sortBy) && (
    <button
      onClick={() => {
        setSearch("");
        setSelectedCategory("All");
        setSortBy("");
      }}
      className="text-sm underline underline-offset-4"
    >
      Clear Filters
    </button>
  )}

</div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (

          <div className="py-24 text-center">

            <p
              className="
                text-lg text-muted-foreground
              "
            >
              No products found.
            </p>

          </div>
        )}

        {/* PRODUCT GRID */}
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

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

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
          className="h-10"
        />

      </Container>

    </section>
  );
}