import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../api/products';
import { ProductCard } from '../product-card';
import type { Product } from '../../types/product';

export function RelatedProductsSection() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts({ limit: 5 }).then((response) => {
      setProducts(response.data.filter((product) => String(product.id) !== id).slice(0, 4));
    });
  }, [id]);

  return (
    <section className='w-full border-t border-[#D9D9D9] bg-white pb-[88px] pt-[55px] font-poppins'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 md:px-12 lg:px-[99px]'><h2 className='mb-[26px] text-center text-[36px] font-medium leading-none text-black'>Related Products</h2><div className='mb-[44px] grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>{products.map((product) => <div key={product.id} className='mx-auto w-full max-w-[285px]'><ProductCard product={product} /></div>)}</div><button type='button' onClick={() => navigate('/shop')} className='flex h-[48px] w-[245px] items-center justify-center border border-[#B88E2F] text-[16px] font-semibold text-[#B88E2F] transition-colors hover:bg-[#B88E2F] hover:text-white'>Show More</button></div>
    </section>
  );
}

export default RelatedProductsSection;