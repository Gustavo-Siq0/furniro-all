import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import room1 from '../../assets/img/room1.png';
import room2 from '../../assets/img/room2.jpg';
import room3 from '../../assets/img/room3.jpg';

const roomsData = [
  { id: 1, title: 'Inner Peace', category: '01 —— Bed Room', image: room1 },
  { id: 2, title: 'Modern Setup', category: '02 —— Living Room', image: room2 },
  { id: 3, title: 'Cozy Corner', category: '03 —— Guest Room', image: room3 },
];

export function Rooms() {
  return (
    <section className='relative flex w-full justify-center overflow-hidden bg-[#FCF8F3] py-11'>
      <style>{`
        .rooms-slider .splide__pagination {
          bottom: -10px;
        }
        .rooms-slider .splide__pagination__page {
          width: 11px;
          height: 11px;
          margin: 0 6px;
          background: #D8D8D8;
          transition: all 0.3s ease;
        }
        .rooms-slider .splide__pagination__page.is-active {
          background: #B88E2F;
        }
      `}</style>

      <div className='flex w-full max-w-[1183px] flex-col items-center gap-10 px-5 lg:flex-row lg:px-0'>
        <div className='flex w-full max-w-[422px] flex-col items-start lg:w-1/3'>
          <h2 className='mb-2 font-poppins text-[32px] font-bold leading-[1.2] text-[#3A3A3A] md:text-[40px] md:leading-[48px]'>
            50+ Beautiful rooms inspiration
          </h2>
          <p className='mb-6 font-poppins text-[16px] font-medium text-[#616161]'>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Link
            to='/shop'
            className='bg-[#B88E2F] px-9 py-3 font-poppins text-[16px] font-semibold text-white transition-colors hover:bg-[#9d7725]'
          >
            Explore More
          </Link>
        </div>

        <div className='ml-auto w-full lg:w-2/3'>
          <Splide
            className='rooms-slider pb-12'
            options={{
              type: 'loop',
              focus: 0,
              perPage: 2,
              perMove: 1,
              gap: '24px',
              pagination: true,
              arrows: true,
              updateOnMove: true,
              breakpoints: {
                1024: { perPage: 2 },
                768: { perPage: 1, gap: '16px' },
              },
            }}
          >
            {roomsData.map((room) => (
              <SplideSlide key={room.id}>
                <div className='group relative h-[400px] w-full md:h-[582px]'>
                  <img
                    src={room.image}
                    alt={room.title}
                    className='h-full w-full rounded-[4px] object-cover'
                  />
                  <div className='absolute bottom-6 left-4 flex min-w-[217px] flex-col gap-2 bg-white/70 p-4 backdrop-blur-sm transition-opacity duration-300 lg:left-6 lg:opacity-0 lg:group-hover:opacity-100 md:p-6'>
                    <span className='font-poppins text-[16px] font-medium text-[#616161]'>
                      {room.category}
                    </span>
                    <h3 className='font-poppins text-[24px] font-semibold text-[#3A3A3A] md:text-[28px]'>
                      {room.title}
                    </h3>
                    <button
                      type='button'
                      aria-label={`View ${room.title}`}
                      className='absolute -right-12 bottom-0 flex h-12 w-12 items-center justify-center bg-[#B88E2F] text-xl text-white transition-colors hover:bg-[#9d7725]'
                    >
                      →
                    </button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}

export default Rooms;