import categories from "@/data/categories";

import Container from "../layout/Container";
import CategoryCard from "./CategoryCard";

export default function CategorySection() {
  return (
    <section className="py-20">

      <Container>

        {/* SECTION HEADER */}
        <div className="mb-12">

          <p className="uppercase tracking-[4px] text-sm text-muted-foreground mb-3">
            Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Shop By Category
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}