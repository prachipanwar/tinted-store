export default function SortDropDown({
    sortBy,
    setSortBy,
  }) {
    return (
      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
        className="h-12 rounded-full border border-border px-5 bg-background"
      >
        <option value="">
          Sort By
        </option>
  
        <option value="low">
          Price: Low to High
        </option>
  
        <option value="high">
          Price: High to Low
        </option>
  
      </select>
    );
  }