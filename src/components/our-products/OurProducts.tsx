import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../product-card';
import { getProducts } from '../../api/products';
import type { Product } from '../../types/product';

export function OurProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts({ limit: 8 })
      .then((response) => setProducts(response.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className='flex w-full flex-col items-center bg-white py-12'>
      <h2 className='mb-8 text-center font-poppins text-[40px] font-bold text-[#3A3A3A]'>
        Our Products
      </h2>

      {isLoading ? <div className='py-12 text-center font-poppins text-[#898989]'>Carregando produtos...</div> : <div className='mb-10 grid w-full max-w-[1183px] grid-cols-1 gap-8 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-0'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>}

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