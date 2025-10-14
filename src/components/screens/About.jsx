import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '../Navbar';
import { Footer } from '../../home';

const teamMembers = [
  {
    name: 'Adison Ray',
    role: 'Auction Coordinator',
    img: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e',
  },
  {
    name: 'Arthur Roy',
    role: 'Sales Representative',
    img: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e',
  },
  {
    name: 'Regina George',
    role: 'Bid Spotter',
    img: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e',
  },
  {
    name: 'William State',
    role: 'Marketing Specialist',
    img: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e',
  },
];

const partners = [
  '/logos/cartal.svg',
  '/logos/design-studio.svg',
  '/logos/cooperate.svg',
  '/logos/minimal.svg',
  '/logos/minim.svg',
  '/logos/sunshi.svg',
];

const testimonials = [
  {
    quote:
      'One of the standout features of Nivyah Maruti is its user‑friendly staff and modern facilities. The entire process, from enquiry to delivery, was smooth and transparent.',
    name: 'George Orwell',
    location: 'Arizona, AZ',
    img: '/images/testimonials/george.jpg',
    title: 'A Seamless Car Buying Experience',
  },
];

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className='font-sans text-gray-800'>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center bg-[url('https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg')]">
          <div className='absolute inset-0 bg-black/60'></div>
          <div className='relative z-10 px-4 text-center text-white'>
            <h1 className='mb-4 text-4xl font-extrabold md:text-6xl'>
              About Nivyah Maruti
            </h1>
            <p className='text-lg md:text-xl'>
              Empowering Your Drive — With Trust, Quality, and Excellence
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className='px-4 py-20 bg-white'>
          <div className='grid items-center max-w-6xl gap-12 mx-auto lg:grid-cols-2'>
            <div>
              <h2 className='mb-6 text-3xl font-bold'>Our Mission</h2>
              <p className='mb-6 leading-relaxed text-gray-600'>
                At Nivyah Maruti, our mission is to empower you to discover the
                joy of driving your dream Maruti. We aim to make your car-buying
                experience seamless and enjoyable, providing transparency,
                integrity, and reliability in all our interactions.
              </p>
              <p className='mb-6 leading-relaxed text-gray-600'>
                Since our inception, we've been dedicated to offering the best
                Maruti experience—from exploring advanced models to experiencing
                our state-of-the-art service facilities.
              </p>
              <div className='flex items-center gap-4'>
                <span className='text-6xl font-bold text-red-600'>24</span>
                <p className='font-medium text-gray-700'>
                  Years of Trusted Service in the Automobile Industry.
                </p>
              </div>
            </div>
            <div className='overflow-hidden rounded-lg shadow-lg h-96'>
              <img
                src='https://t3.ftcdn.net/jpg/04/98/81/32/360_F_498813253_1F67TUXp7RKXETW6ZdavRa3dzwsGNgEd.jpg'
                alt='Mission'
                className='object-cover w-full h-full'
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='px-4 py-20 bg-gray-100'>
          <div className='max-w-6xl mx-auto text-center'>
            <h2 className='mb-12 text-3xl font-bold'>Meet Our Team</h2>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className='transition bg-white shadow-md rounded-xl hover:shadow-xl'
                >
                  <div className='h-56 overflow-hidden rounded-t-xl'>
                    <img
                      src={member.img}
                      alt={member.name}
                      className='object-cover w-full h-full'
                    />
                  </div>
                  <div className='p-5'>
                    <h3 className='text-lg font-semibold'>{member.name}</h3>
                    <p className='mt-1 text-sm text-red-600'>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className='px-4 py-16 bg-white'>
          <div className='flex flex-wrap items-center justify-center max-w-5xl gap-10 mx-auto'>
            {partners.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Partner ${idx + 1}`}
                className='transition w-28 opacity-70 hover:opacity-100 grayscale'
              />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='px-4 py-20 bg-gray-100'>
          <div className='grid items-center max-w-6xl gap-12 mx-auto lg:grid-cols-5'>
            <div className='lg:col-span-2'>
              <h3 className='mb-2 font-medium tracking-wide text-red-600 uppercase'>
                Customer Stories
              </h3>
              <h2 className='mb-6 text-3xl font-bold'>
                What Our Customers Say About Us
              </h2>
              <button className='px-6 py-3 transition border border-black rounded hover:bg-black hover:text-white'>
                View Services
              </button>
            </div>

            <div className='lg:col-span-3'>
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 6000 }}
                pagination={{ clickable: true }}
                navigation
                loop
              >
                {testimonials.map((t) => (
                  <SwiperSlide key={t.name}>
                    <div className='p-8 text-center bg-white shadow-lg rounded-xl'>
                      <h4 className='mb-3 text-xl font-semibold'>{t.title}</h4>
                      <p className='mb-6 italic text-gray-600'>“{t.quote}”</p>
                      <div className='flex flex-col items-center'>
                        <img
                          src={t.img}
                          alt={t.name}
                          className='object-cover mb-2 rounded-full w-14 h-14'
                        />
                        <p className='font-medium'>{t.name}</p>
                        <span className='text-sm text-gray-500'>
                          {t.location}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
