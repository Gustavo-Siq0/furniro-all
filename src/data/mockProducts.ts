import type { Product } from '../types/product';
import productImage from '../assets/img/fundo-home.png';

const createProduct = (
  id: number,
  name: string,
  category: string,
  description: string,
  price: number,
  oldPrice: string | null = null,
): Product => ({
  id,
  sku: `FURN-${String(id).padStart(3, '0')}`,
  name,
  category,
  description,
  price: `Rp ${price.toLocaleString('en-US')}`,
  oldPrice,
  image: productImage,
  gallery: [productImage, productImage],
  colors: [
    { name: 'Black', value: '#2F2F2F', priceModifier: 0 },
    { name: 'Gold', value: '#B88E2F', priceModifier: 100000 },
  ],
  sizes: [
    { name: 'S', priceModifier: 0 },
    { name: 'M', priceModifier: 150000 },
    { name: 'L', priceModifier: 300000 },
  ],
  badge: id % 4 === 0 ? 'New' : id % 3 === 0 ? '-30%' : null,
  badgeColor: id % 4 === 0 ? '#2EC1AC' : '#E97171',
  complementaryDescription: 'A refined piece designed to bring comfort and character to your home.',
  additionalInfo: 'Crafted with durable materials and a timeless finish.',
  rawPrice: price,
});

export const mockProducts: Product[] = [
  createProduct(1, 'Syltherine', 'Dining', 'Stylish cafe chair', 2500000, 'Rp 3,500,000'),
  createProduct(2, 'Leviosa', 'Living', 'Stylish cafe chair', 2500000),
  createProduct(3, 'Lolito', 'Bedroom', 'Luxury big sofa', 7000000, 'Rp 14,000,000'),
  createProduct(4, 'Respira', 'Living', 'Outdoor bar table and stool', 500000),
  createProduct(5, 'Grifo', 'Dining', 'Night lamp', 1500000),
  createProduct(6, 'Muggo', 'Dining', 'Small mug', 150000),
  createProduct(7, 'Pingky', 'Living', 'Cute bed set', 7000000, 'Rp 14,000,000'),
  createProduct(8, 'Potty', 'Bedroom', 'Minimalist flower pot', 500000),
];

export function getMockProduct(id: string | undefined): Product | undefined {
  return mockProducts.find((product) => product.id === Number(id || 1));
}