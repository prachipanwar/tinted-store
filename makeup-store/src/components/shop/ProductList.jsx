"use client";

import { useEffect, useMemo, useState } from "react";

import Container from "../layout/Container";
import ShopProductCard from "./ShopProductCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import SortDropdown from "./SortDropDown";

import { getProducts } from "@/services/products";

export default function ProductList() {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sortBy, setSortBy] = useState("");

  const [visibleCount, setVisibleCount] =
    useState(9);

  useEffect(() => {

    async function loadProducts() {

      const data = await getProducts();

      setProducts(data);
    }

    loadProducts();

  }, []);

  /*
    UNIQUE CATEGORIES
  */
  const categories = useMemo(() => {

    const allCategories = products.map(
      (product) => product.category
    );

    return ["All", ...new Set(allCategories)];

  }, [products]);

  /*
    FILTER + SEARCH + SORT
  */
  const filteredProducts = useMemo(() => {

    let updatedProducts = [...products];

    // SEARCH
    if (search) {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    // CATEGORY
    if (selectedCategory !== "All") {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.category === selectedCategory
      );
    }

    // SORT
    if (sortBy === "low") {
      updatedProducts.sort(
        (a, b) =>
          Number(a.price) - Number(b.price)
      );
    }

    if (sortBy === "high") {
      updatedProducts.sort(
        (a, b) =>
          Number(b.price) - Number(a.price)
      );
    }

    return updatedProducts;

  }, [products, search, selectedCategory, sortBy]);

  return (
    <section>

      <Container>

        {/* TOP BAR */}
        <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between mb-12">

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

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {filteredProducts
            .slice(0, visibleCount)
            .map((product) => (
              <ShopProductCard
                key={product.id}
                product={product}
              />
            ))}

        </div>

        {/* LOAD MORE */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-16">

            <button
              onClick={() =>
                setVisibleCount((prev) => prev + 6)
              }
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full"
            >
              Load More
            </button>

          </div>
        )}

      </Container>

    </section>
  );
}