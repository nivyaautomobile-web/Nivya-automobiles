import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const carOffers = [
  {
    name: 'Maruti VICTORIS',
    price: '₹7,05,000*',
    image: 'https://www.skyautomobiles.in/thumbnail/victoris.png',
  },
  {
    name: 'Maruti Brezza',
    price: '₹55,000*',
    image: 'https://www.skyautomobiles.in/thumbnail/brezza-page.webp',
  },
  {
    name: 'Maruti Swift',
    price: '₹50,000*',
    image: 'https://www.skyautomobiles.in/thumbnail/swift02.webp',
  },
  {
    name: 'Maruti ALTO K10',
    price: '₹50,000*',
    image: 'https://www.skyautomobiles.in/thumbnail/altoK10.webp',
  },
    {
    name: 'Maruti Dzire',
    price: '₹7,05,000*',
    image: 'https://www.skyautomobiles.in/thumbnail/bluishblack.png',
  },
  {
    name: 'Maruti S-Presso',
    price: '₹55,000*',
    image: 'https://www.skyautomobiles.in/thumbnail/spresso.webp',
  },
  {
    name: 'Maruti WagonR',
    price: '₹50,000*',
    image: 'https://www.skyautomobiles.in/thumbnail/wagnor.webp',
  },
  {
    name: 'Maruti Ertiga',
    price: '₹50,000*',
    image: 'https://www.skyautomobiles.in/thumbnail/ertiga.webp',
  },
    {
    name: 'Maruti Celerio',
    price: '₹50,000*',
    image: 'https://www.skyautomobiles.in/thumbnail/celerio.webp',
  },
  {
    name: 'Maruti Eeco',
    price: '₹50,000*',
    image: 'https://www.skyautomobiles.in/thumbnail/Eeco.webp',
  },
];

function OffersCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className='py-12 bg-white'>
      <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
        Our Exclusive Offers
      </h2>

      <div className='relative px-6 mx-auto max-w-7xl'>
        {/* Previous Button */}
        <button
          ref={prevRef}
          className='absolute left-0 z-10 p-3 text-gray-900 transition -translate-y-1/2 bg-gray-200 rounded-full cursor-pointer top-1/2 hover:bg-gray-300'
        >
          ❮
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className='w-full'
        >
          {carOffers.map((car, index) => (
            <SwiperSlide key={index}>
              <div className='relative p-4 transition-transform duration-300 shadow-md bg-gray-50 rounded-xl hover:shadow-xl hover:scale-105'>
                <div className='absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white bg-blue-600 rounded-bl-lg'>
                  OFFER
                </div>
                <img
                  src={car.image}
                  alt={car.name}
                  className='object-cover w-full h-48 rounded-lg'
                />
                <h3 className='mt-4 text-lg font-semibold text-gray-900'>
                  {car.name}
                </h3>
                {/* <p className='mt-1 font-bold text-red-600'>
                  <span className='text-sm text-gray-700'>Save up to:</span>{' '}
                  {car.price}
                </p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <button
          ref={nextRef}
          className='absolute right-0 z-10 p-3 text-gray-900 transition -translate-y-1/2 bg-gray-200 rounded-full cursor-pointer top-1/2 hover:bg-gray-300'
        >
          ❯
        </button>
      </div>

      <p className='mt-4 text-sm text-right text-gray-500'>*TnC apply</p>
    </div>
  );
}

export default OffersCarousel;
