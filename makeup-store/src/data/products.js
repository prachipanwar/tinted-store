import { productImages } from "@/lib/productImages";

const categories = [
  "lipstick",
  "skincare",
  "blush",
  "fragrance",
];

const brands = [
  "Rhode",
  "Lumine",
  "Rosette",
  "Aether Beauty",
  "Rare Beauty",
  "Noir Beauty",
];

const productNames = [
  "Velvet Matte Lipstick",
  "Radiant Glow Foundation",
  "Hydrating Skin Serum",
  "Soft Rose Blush",
  "Silk Touch Concealer",
  "Luxury Satin Lip Cream",
  "Glossy Nude Lipstick",
  "Flawless Finish Powder",
  "Golden Hour Palette",
  "Dewy Skin Tint",
];

const products = Array.from(
  { length: 36 },
  (_, index) => {

    const category =
      categories[index % categories.length];

    const brand =
      brands[index % brands.length];

    const name =
      productNames[index % productNames.length];

    return {
      id: index + 1,

      name,

      brand,

      category,

      price: (
        Math.random() * 80 + 20
      ).toFixed(2),

      description:
        "Crafted for effortless beauty and timeless elegance, this premium formula enhances your everyday routine with luxurious texture and lasting comfort.",

      customImage: productImages[index],

      rating: (
        Math.random() * 2 + 3
      ).toFixed(1),

      stock: 20,
    };
  }
);

export default products;