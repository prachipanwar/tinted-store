export default function SearchBar({
    search,
    setSearch,
  }) {
    return (
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full lg:w-[350px] h-12 rounded-full border border-border bg-background px-5 outline-none"
      />
    );
  }