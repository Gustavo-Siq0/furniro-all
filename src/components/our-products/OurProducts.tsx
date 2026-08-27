import { Link } from 'react-router-dom';
import { ProductCard } from '../product-card';
import type { Product } from '../../types/product';

const productImage = 'https://i.imgur.com/DIi4hau.png';

const mockProducts: Product[] = [
  {
    id: 1,
    sku: 'FURN-001',
    name: 'Syltherine',
    category: 'Dining',
    description: 'Stylish cafe chair',
    price: 'Rp 2,500,000',
    oldPrice: 'Rp 3,500,000',
    image: productImage,
    gallery: [productImage],
    colors: [],
    sizes: [],
    badge: '-30%',
    badgeColor: '#E97171',
    complementaryDescription: '',
    additionalInfo: '',
    rawPrice: 2500000,
  },
  {
    id: 2,
    sku: 'FURN-002',
    name: 'Leviosa',
    category: 'Living',
    description: 'Stylish cafe chair',
    price: 'Rp 2,500,000',
    oldPrice: null,
    image: productImage,
    gallery: [productImage],
    colors: [],
    sizes: [],
    badge: null,
    badgeColor: null,
    complementaryDescription: '',
    additionalInfo: '',
    rawPrice: 2500000,
  },
  {
    id: 3,
    sku: 'FURN-003',
    name: 'Lolito',
    category: 'Bedroom',
    description: 'Luxury big sofa',
    price: 'Rp 7,000,000',
    oldPrice: 'Rp 14,000,000',
    image: productImage,
    gallery: [productImage],
    colors: [],
    sizes: [],
    badge: '-50%',
    badgeColor: '#E97171',
    complementaryDescription: '',
    additionalInfo: '',
    rawPrice: 7000000,
  },
  {
    id: 4,
    sku: 'FURN-004',
    name: 'Respira',
    category: 'Living',
    description: 'Outdoor bar table and stool',
    price: 'Rp 500,000',
    oldPrice: null,
    image: productImage,
    gallery: [productImage],
    colors: [],
    sizes: [],
    badge: 'New',
    badgeColor: '#2EC1AC',
    complementaryDescription: '',
    additionalInfo: '',
    rawPrice: 500000,
  },
  {
    id: 5,
    sku: 'FURN-005',
    name: 'Grifo',
    category: 'Dining',
    description: 'Night lamp',
    price: 'Rp 1,500,000',
    oldPrice: null,
    image: productImage,
    gallery: [productImage],
    colors: [],
    sizes: [],
    badge: null,
    badgeColor: null,
    complementaryDescription: '',
    additionalInfo: '',
    rawPrice: 1500000,
  },
  {
    id: 6,
    sku: 'FURN-006',
    name: 'Muggo',
    category: 'Dining',
    description: 'Small mug',
    price: 'Rp 150,000',
    oldPrice: null,
    image: productImage,
    gallery: [productImage],
    colors: [],
    sizes: [],
    badge: 'New',
    badgeColor: '#2EC1AC',
    complementaryDescription: '',
    additionalInfo: '',
    rawPrice: 150000,
  },
  {
    id: 7,
    sku: 'FURN-007',
    name: 'Pingky',
    category: 'Living',
    description: 'Cute bed set',
    price: 'Rp 7,000,000',
    oldPrice: 'Rp 14,000,000',
    image: productImage,
    gallery: [productImage],
    colors: [],
    sizes: [],
    badge: '-50%',
    badgeColor: '#E97171',
    complementaryDescription: '',
    additionalInfo: '',
    rawPrice: 7000000,
  },
  {
    id: 8,
    sku: 'FURN-008',
    name: 'Potty',
    category: 'Bedroom',
    description: 'Minimalist flower pot',
    price: 'Rp 500,000',
    oldPrice: null,
    image: productImage,
    gallery: [productImage],
    colors: [],
    sizes: [],
    badge: 'New',
    badgeColor: '#2EC1AC',
    complementaryDescription: '',
    additionalInfo: '',
    rawPrice: 500000,
  },
];

export function OurProducts() {
  return (
    <section className='flex w-full flex-col items-center bg-white py-12'>
      <h2 className='mb-8 text-center font-poppins text-[40px] font-bold text-[#3A3A3A]'>
        Our Products
      </h2>

      <div className='mb-10 grid w-full max-w-[1183px] grid-cols-1 gap-8 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-0'>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link
        to='/shop'
        className='border border-[#B88E2F] bg-white px-16 py-3 font-poppins text-[16px] font-semibold text-[#B88E2F] transition-colors hover:bg-[#B88E2F] hover:text-white'
      >
        Show More
      </Link>
    </section>
  );
}

export default OurProducts;