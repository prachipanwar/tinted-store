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
      className="h-10 rounded-full border border-border px-4 bg-background outline-none focus:border-primary transition text-sm"
    >
      <option value="">
        Sort Products
      </option>

      <option value="low">
        Price: Low to High
      </option>

      <option value="high">
        Price: High to Low
      </option>

      <option value="az">
        Name: A-Z
      </option>

    </select>
  );
}