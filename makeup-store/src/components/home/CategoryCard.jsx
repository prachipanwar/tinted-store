import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={
        category.name.toLowerCase() === "makeup"
          ? "/shop"
          : `/shop?category=${category.name.toLowerCase()}`
      }
      className="group block"
    >
      {/* IMAGE */}
      <div className="relative h-[200px] sm:h-[260px] lg:h-[320px] overflow-hidden rounded-[28px]">
        <div className="absolute inset-0 bg-black/10 z-10" />

        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width:768px) 100vw,
                 (max-width:1200px) 50vw,
                 25vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
          {category.name}
        </h3>

        <span className="text-sm text-muted-foreground group-hover:text-foreground transition">
          Explore
        </span>
      </div>
    </Link>
  );
}
