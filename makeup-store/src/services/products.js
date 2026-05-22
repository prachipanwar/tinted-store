import products from "@/data/products";

export async function getProducts() {

  return products;
}

export async function getSingleProduct(id) {

  return products.find(
    (product) =>
      String(product.id) === String(id)
  );
}