import Image from "next/image";

export default function CategoryCard({ category }) {
  return (
    <div className="group cursor-pointer">

      <div className="relative h-[320px] overflow-hidden rounded-[28px]">

        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         25vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />

      </div>

      <div className="mt-5 flex items-center justify-between">

        <h3 className="text-2xl font-medium">
          {category.name}
        </h3>

        <span className="text-sm text-muted-foreground">
          Explore
        </span>

      </div>

    </div>
  );
}