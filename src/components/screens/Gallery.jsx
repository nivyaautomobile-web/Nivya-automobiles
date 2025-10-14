import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Footer } from '../../home';
import Navbar from '../Navbar';

export default function Gallery({ images = defaultImages }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Navbar />
      <section className='w-full min-h-screen px-4 py-12 mt-10 bg-gradient-to-br from-slate-900 to-gray-800'>
        <div className='mx-auto max-w-7xl'>
          {/* Header */}
          <header className='mb-12 text-center'>
            <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>
              Gallery
            </h1>
            <p className='max-w-2xl mx-auto mt-3 text-lg text-slate-300'>
              Explore our collection in an immersive, animated gallery.
            </p>
          </header>

          {/* Image Grid */}
          <ul className='grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {images.map((src, i) => (
              <li
                key={src}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 ${
                  i % 7 === 0 ? 'row-span-2' : ''
                }`}
                onClick={() => setSelected(i)}
              >
                <motion.img
                  src={src}
                  alt='Gallery item'
                  loading='lazy'
                  className='object-cover object-center w-full h-full group-hover:scale-110'
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />

                {/* Overlay */}
                <div className='absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100' />
              </li>
            ))}
          </ul>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <Dialog
              open={selected !== null}
              onClose={() => setSelected(null)}
              className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur'
            >
              <motion.div
                className='relative'
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <img
                  src={images[selected]}
                  alt='Enlarged gallery item'
                  className='max-h-[80vh] w-auto rounded-2xl shadow-2xl'
                />
                <button
                  onClick={() => setSelected(null)}
                  className='absolute flex items-center justify-center w-10 h-10 text-gray-900 rounded-full shadow-lg -right-4 -top-4 bg-white/90 backdrop-blur hover:bg-white'
                >
                  ✕
                </button>
              </motion.div>
            </Dialog>
          )}
        </AnimatePresence>
      </section>
      <Footer />
    </>
  );
}

const defaultImages = [
  'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg', // front view Verna
  'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D', // interior Verna
  'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', // rear Verna
  'https://trident-group.s3.ap-south-1.amazonaws.com/Maruti/models/display_images/1698924149.jpg', // luxury sedan
  'hhttps://www.Maruti.com/content/dam/Maruti/in/en/data/find-a-car/Exter/Highlights/smallimageexter2_5.jpg', // sports car on highway
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TDNEpUTHQoQUJMHLrErGJyHg89uy71MyuH&s', // rear car light
  'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2FMaruti%2Fcreta%2FMaruti-creta.jpg%3Fv%3D92&w=3840&q=75', // SUV driving
  'https://catalog-management.s3.ap-south-1.amazonaws.com/htmobile1/Maruti_tucson/images/exterior_Maruti-tucson2022_front-left-side_600x400.jpg', // nighttime car
  'https://images.unsplash.com/photo-1616789780815-8d1457e2dc79?auto=format&fit=crop&w=800&q=80', // interior shot
  'https://images.unsplash.com/photo-1570129477495-b56aedb1cf9b?auto=format&fit=crop&w=800&q=80', // modern EV
  'https://images.unsplash.com/photo-1617531653332-f694d602c70c?auto=format&fit=crop&w=800&q=80', // off-road jeep
];
