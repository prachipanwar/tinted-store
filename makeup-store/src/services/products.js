import { productImages } from "@/lib/productImages";

const BASE_URL =
  "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick";

export async function getProducts() {
  try {
    const response = await fetch(BASE_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    const filteredProducts = data
      .filter((product) => product.name)
      .slice(0, 100);

    return filteredProducts.map((product, index) => ({
      ...product,
      customImage:
        productImages[index % productImages.length],
    }));

  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getSingleProduct(id) {

  const products = await getProducts();


  return products.find(
    (product) => String(product.id) === String(id)
  );
}