export default function FilterBar({
    categories,
    selectedCategory,
    setSelectedCategory,
  }) {
    return (
      <div className="flex flex-wrap gap-3">
  
        {categories.map((category) => (
  
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`px-5 py-2 rounded-full border text-sm transition
            ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-background"
            }`}
          >
            {category}
          </button>
  
        ))}
  
      </div>
    );
  }