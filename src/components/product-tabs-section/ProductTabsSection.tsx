import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/products';
import type { Product } from '../../types/product';

export function ProductTabsSection() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'additional'>('description');
  const images = product?.gallery.slice(0, 2) || [];

  useEffect(() => {
    getProduct(id || '1').then(setProduct).catch(() => setProduct(null));
  }, [id]);

  return (
    <section className='w-full border-t border-[#D9D9D9] pb-[66px] pt-[48px] font-poppins'>
      <div className='mx-auto w-full max-w-[1440px] px-4 md:px-12 lg:px-[99px]'>
        <div className='mb-[37px] flex items-center justify-center gap-6 md:gap-[52px]'><button type='button' onClick={() => setActiveTab('description')} className={`text-[20px] md:text-[24px] ${activeTab === 'description' ? 'font-medium text-black' : 'text-[#9F9F9F]'}`}>Description</button><button type='button' onClick={() => setActiveTab('additional')} className={`text-[20px] md:text-[24px] ${activeTab === 'additional' ? 'font-medium text-black' : 'text-[#9F9F9F]'}`}>Additional Information</button></div>
        <div className='mx-auto mb-[36px] w-full max-w-[1026px] text-justify text-[16px] leading-[24px] text-[#9F9F9F]'>{activeTab === 'description' ? <p>{product?.complementaryDescription || 'Discover thoughtful design and lasting comfort made for everyday living.'}</p> : <p>{product?.additionalInfo || 'No additional information available for this product.'}</p>}</div>
        <div className='mx-auto grid w-full max-w-[1239px] grid-cols-1 items-center justify-center gap-[30px] md:grid-cols-2'>{images.map((image, index) => <div key={`${image}-${index}`} className='mx-auto flex h-[348px] w-full max-w-[605px] items-center justify-center overflow-hidden rounded-[10px] bg-[#F9F1E7] p-6'><img src={image} alt={`Detail ${index + 1}`} className='max-h-full max-w-full object-contain' /></div>)}</div>
      </div>
    </section>
  );
}

export default ProductTabsSection;