import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductBreadcrumb from '../components/product-breadcrumb';
import ProductDetailsSection from '../components/product-details-section';
import ProductTabsSection from '../components/product-tabs-section';
import RelatedProductsSection from '../components/related-products-section';
import { getProduct } from '../api/products';

export function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const [productName, setProductName] = useState('');

  useEffect(() => {
    getProduct(id || '1').then((product) => setProductName(product.name)).catch(() => setProductName(''));
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <div className='min-h-screen w-full bg-white pt-[110px]'>
      <main>
        <ProductBreadcrumb productName={productName || 'Detalhes do Produto'} />
        <ProductDetailsSection />
        <ProductTabsSection />
        <RelatedProductsSection />
      </main>
    </div>
  );
}

export default SingleProduct;