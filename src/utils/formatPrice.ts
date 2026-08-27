export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString("en-US")}`;
}