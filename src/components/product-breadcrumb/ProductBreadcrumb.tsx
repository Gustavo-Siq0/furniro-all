import { Link } from 'react-router-dom';
import arrowIcon from '../../assets/svg/arrow.svg';

interface ProductBreadcrumbProps {
  productName?: string;
}

export function ProductBreadcrumb({ productName = 'Asgaard sofa' }: ProductBreadcrumbProps) {
  return (
    <nav className='flex h-[100px] w-full items-center border-b border-[#E0D6C5] bg-[#F9F1E7]'>
      <div className='mx-auto flex w-full max-w-[1440px] items-center gap-3 px-4 md:gap-5 md:px-12 lg:px-[98px]'>
        <Link to='/' className='font-poppins text-[16px] text-[#9F9F9F] transition-colors hover:text-black'>Home</Link>
        <img src={arrowIcon} alt='' className='h-3 w-3 shrink-0' />
        <Link to='/shop' className='font-poppins text-[16px] text-[#9F9F9F] transition-colors hover:text-black'>Shop</Link>
        <img src={arrowIcon} alt='' className='h-3 w-3 shrink-0' />
        <div className='mx-1 h-[37px] w-[2px] bg-[#9F9F9F] md:mx-2' />
        <span className='max-w-[220px] truncate font-poppins text-[16px] text-black md:max-w-none'>{productName}</span>
      </div>
    </nav>
  );
}

export default ProductBreadcrumb;