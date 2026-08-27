import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductBreadcrumb from '../components/product-breadcrumb';
import ProductDetailsSection from '../components/product-details-section';
import ProductTabsSection from '../components/product-tabs-section';
import RelatedProductsSection from '../components/related-products-section';
import { getMockProduct } from '../data/mockProducts';

export function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const product = getMockProduct(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <div className='min-h-screen w-full bg-white pt-[110px]'>
      <main>
        <ProductBreadcrumb productName={product?.name || 'Detalhes do Produto'} />
        <ProductDetailsSection />
        <ProductTabsSection />
        <RelatedProductsSection />
      </main>
    </div>
  );
}

export default SingleProduct;