import { Search } from "lucide-react";

export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="relative w-full lg:w-[360px]">

      <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full h-12 rounded-full border border-border bg-background pl-12 pr-5 outline-none focus:border-primary transition"
      />

    </div>
  );
}