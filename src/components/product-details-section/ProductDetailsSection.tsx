import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getProduct } from '../../api/products';
import type { Product, ProductColor, ProductSize } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import facebookIcon from '../../assets/svg/facebook.svg';
import linkedinIcon from '../../assets/svg/linkedin.svg';
import twitterIcon from '../../assets/svg/twitter.svg';
import starIcon from '../../assets/svg/star.svg';
import { useCartStore } from '../../store/useCartStore';

const parsePrice = (price: string) => Number.parseInt(price.replace(/\D/g, ''), 10) || 0;

export function ProductDetailsSection() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    getProduct(id || '1').then((data) => {
      setProduct(data);
      setSelectedImage(data.gallery[0] || data.image);
      setSelectedSize(data.sizes[0] || null);
      setSelectedColor(data.colors[0] || null);
    }).catch(() => setProduct(null)).finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <div className='w-full px-4 py-12 text-center font-poppins text-[#898989]'>Carregando produto...</div>;
  }

  if (!product) {
    return <div className='w-full px-4 py-12 text-center font-poppins text-red-500'>Product not found.</div>;
  }

  const totalPrice = parsePrice(product.price) + (selectedSize?.priceModifier || 0) + (selectedColor?.priceModifier || 0);
  const productToCart: Product = { ...product, price: formatPrice(totalPrice) };

  const handleAddToCart = () => {
    addItem(productToCart, quantity);
    toast.success(`${quantity}x ${product.name} added to cart!`, {
      style: { background: '#2EC1AC', color: '#fff' },
      iconTheme: { primary: '#fff', secondary: '#2EC1AC' },
    });
  };

  return (
    <section className='mx-auto w-full max-w-[1440px] px-4 py-9 font-poppins md:px-12 lg:px-[99px]'>
      <div className='flex flex-col gap-8 lg:flex-row lg:gap-[105px]'>
        <div className='flex shrink-0 flex-col-reverse gap-8 sm:flex-row'>
          <div className='flex gap-4 sm:flex-col'>
            {product.gallery.map((image, index) => (
              <button type='button' key={`${image}-${index}`} onClick={() => setSelectedImage(image)} className={`flex h-[80px] w-[76px] items-center justify-center rounded-[10px] border bg-[#F9F1E7] p-1 ${selectedImage === image ? 'border-[#B88E2F]' : 'border-transparent opacity-80'}`}>
                <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className='max-h-full max-w-full object-contain' />
              </button>
            ))}
          </div>
          <div className='relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-[10px] bg-[#F9F1E7] p-6 sm:w-[481px]'>
            {product.badge && <span style={{ backgroundColor: product.badgeColor || '#E97171' }} className='absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-bold text-white'>{product.badge}</span>}
            <img src={selectedImage} alt={product.name} className='max-h-full max-w-full object-contain' />
          </div>
        </div>

        <div className='flex w-full max-w-[606px] flex-col'>
          <h1 className='text-[42px] font-normal leading-tight text-black'>{product.name}</h1>
          <div className='mt-1 flex items-center gap-3'><p className='text-[24px] font-medium text-[#9F9F9F]'>{formatPrice(totalPrice)}</p>{product.oldPrice && <span className='text-[18px] text-[#B0B0B0] line-through'>{product.oldPrice}</span>}</div>
          <div className='mt-3 flex items-center gap-4'><div className='flex items-center gap-1'>{Array.from({ length: 5 }, (_, index) => <img key={index} src={starIcon} alt='Star rating' className='h-5 w-5' />)}</div><div className='h-[37px] w-px bg-[#9F9F9F]' /><span className='text-[13px] text-[#9F9F9F]'>5 Customer Review</span></div>
          <p className='mt-4 max-w-[424px] text-[13px] leading-[20px] text-black'>{product.complementaryDescription || product.description}</p>

          <div className='mt-6'><span className='mb-3 block text-[14px] text-[#9F9F9F]'>Size</span><div className='flex gap-3'>{product.sizes.map((size) => <button type='button' key={size.name} onClick={() => setSelectedSize(size)} className={`flex h-[30px] w-[30px] items-center justify-center rounded-[5px] text-[13px] ${selectedSize?.name === size.name ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7] text-black'}`}>{size.name}</button>)}</div></div>
          <div className='mt-5'><span className='mb-3 block text-[14px] text-[#9F9F9F]'>Color</span><div className='flex gap-4'>{product.colors.map((color) => <button type='button' key={color.name} title={color.name} onClick={() => setSelectedColor(color)} style={{ backgroundColor: color.value }} className={`h-[30px] w-[30px] rounded-full border border-black/10 ${selectedColor?.name === color.name ? 'ring-2 ring-[#B88E2F] ring-offset-2' : ''}`} />)}</div></div>

          <div className='mt-8 flex items-center gap-4'><div className='flex h-[64px] w-[123px] items-center justify-between rounded-[10px] border border-[#9F9F9F] px-4'><button type='button' onClick={() => setQuantity((value) => Math.max(1, value - 1))}>-</button><span>{quantity}</span><button type='button' onClick={() => setQuantity((value) => value + 1)}>+</button></div><button type='button' onClick={handleAddToCart} className='h-[64px] rounded-[15px] border border-black px-12 text-[20px] transition-colors hover:bg-black hover:text-white'>Add To Cart</button></div>
          <div className='my-10 h-px w-full bg-[#D9D9D9]' />
          <div className='flex flex-col gap-3 text-[16px] text-[#9F9F9F]'><div><span className='inline-block w-20'>SKU</span>: {product.sku}</div><div><span className='inline-block w-20'>Category</span>: {product.category}</div><div><span className='inline-block w-20'>Tags</span>: {product.category}, Home, Shop</div><div className='flex items-center'><span className='w-20'>Share</span>:<div className='ml-4 flex gap-6'>{[[facebookIcon, 'Facebook'], [linkedinIcon, 'LinkedIn'], [twitterIcon, 'Twitter']].map(([icon, label]) => <a href='#' onClick={(event) => event.preventDefault()} key={label} title={label}><img src={icon} alt={label} className='h-5 w-5' /></a>)}</div></div></div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsSection;