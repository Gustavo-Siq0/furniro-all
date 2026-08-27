import setup1 from '../../assets/img/forniture-1.png';
import setup3 from '../../assets/img/forniture-2.png';
import setup2 from '../../assets/img/forniture-3.png';
import setup4 from '../../assets/img/forniture-4.png';
import setup5 from '../../assets/img/forniture-5.png';
import setup6 from '../../assets/img/forniture-6.png';
import setup8 from '../../assets/img/forniture-7.png';
import setup7 from '../../assets/img/forniture-8.png';
import setup9 from '../../assets/img/forniture-9.png';

export function Forniture() {
  return (
    <section className='flex w-full flex-col items-center overflow-hidden bg-white pb-12 pt-16'>
      <div className='mb-10 text-center'>
        <span className='font-poppins text-[20px] font-semibold text-[#616161]'>
          Share your setup with
        </span>
        <h2 className='font-poppins text-[40px] font-bold text-[#3A3A3A]'>
          #FuniroFurniture
        </h2>
      </div>

      <div className='relative w-full'>
        <div className='relative left-1/2 flex w-max -translate-x-1/2 items-center justify-center gap-4'>
          <div className='flex w-[811px] flex-col items-end justify-center gap-4'>
            <div className='flex items-end gap-4'>
              <img src={setup1} alt='Furniture setup' className='h-[382px] w-[274px] object-cover transition-transform hover:scale-105' />
              <img src={setup3} alt='Furniture setup' className='h-[312px] w-[451px] object-cover transition-transform hover:scale-105' />
            </div>
            <div className='flex items-start gap-4'>
              <img src={setup2} alt='Furniture setup' className='h-[323px] w-[381px] object-cover transition-transform hover:scale-105' />
              <img src={setup4} alt='Furniture setup' className='h-[242px] w-[344px] object-cover transition-transform hover:scale-105' />
            </div>
          </div>

          <div className='flex shrink-0 items-center justify-center'>
            <img src={setup5} alt='Furniture setup' className='h-[392px] w-[295px] object-cover transition-transform hover:scale-105' />
          </div>

          <div className='flex w-[811px] flex-col items-start justify-center gap-4'>
            <div className='flex items-end gap-4'>
              <img src={setup6} alt='Furniture setup' className='h-[348px] w-[290px] object-cover transition-transform hover:scale-105' />
              <img src={setup8} alt='Furniture setup' className='h-[433px] w-[425px] object-cover transition-transform hover:scale-105' />
            </div>
            <div className='flex items-start gap-4'>
              <img src={setup7} alt='Furniture setup' className='h-[242px] w-[178px] object-cover transition-transform hover:scale-105' />
              <img src={setup9} alt='Furniture setup' className='h-[196px] w-[258px] object-cover transition-transform hover:scale-105' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forniture;