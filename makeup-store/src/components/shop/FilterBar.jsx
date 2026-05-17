export default function FilterBar({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex flex-wrap gap-3">

      {categories.map((category) => {

        const isActive =
          selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`
              px-5 py-2 cursor-pointer rounded-full text-sm transition-all duration-300 border

              ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:border-primary"
              }
            `}
          >
            {category}
          </button>
        );
      })}

    </div>
  );
}