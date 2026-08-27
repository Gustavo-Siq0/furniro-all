import { Link } from 'react-router-dom';
import diningImg from '../../assets/img/dining-range.png';
import livingImg from '../../assets/img/living-range.png';
import bedroomImg from '../../assets/img/bedroom-range.png';

export function BrowseRange() {
  return (
    <section className='flex w-full justify-center bg-white pb-[56px] pt-[56px]'>
      <div className='flex w-full max-w-[1440px] flex-col items-center'>
        <div className='mb-[62px] text-center'>
          <h2 className='mb-1 font-poppins text-[32px] font-bold text-[#333333]'>
            Browse The Range
          </h2>
          <p className='font-poppins text-[20px] text-[#666666]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className='grid w-full max-w-[1183px] grid-cols-1 gap-5 px-5 md:grid-cols-3 lg:px-0'>
          <div className='flex flex-col items-center gap-[30px]'>
            <Link to='/shop/dining' className='w-full'>
              <img
                src={diningImg}
                alt='Dining Room Setup'
                className='w-full cursor-pointer rounded-[10px] object-cover transition-transform hover:scale-105'
              />
            </Link>
            <h3 className='font-poppins text-[24px] font-semibold text-[#333333]'>
              Dining
            </h3>
          </div>

          <div className='flex flex-col items-center gap-[30px]'>
            <Link to='/shop/living' className='w-full'>
              <img
                src={livingImg}
                alt='Living Room Setup'
                className='w-full cursor-pointer rounded-[10px] object-cover transition-transform hover:scale-105'
              />
            </Link>
            <h3 className='font-poppins text-[24px] font-semibold text-[#333333]'>
              Living
            </h3>
          </div>

          <div className='flex flex-col items-center gap-[30px]'>
            <Link to='/shop/bedroom' className='w-full'>
              <img
                src={bedroomImg}
                alt='Bedroom Room Setup'
                className='w-full cursor-pointer rounded-[10px] object-cover transition-transform hover:scale-105'
              />
            </Link>
            <h3 className='font-poppins text-[24px] font-semibold text-[#333333]'>
              Bedroom
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrowseRange;