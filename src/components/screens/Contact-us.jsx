// ContactUs.jsx – Complete React page with ContactForm extracted as a reusable component
// Works in CRA / Vite. Requires Tailwind CSS + @heroicons/react.

import React from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { Footer } from '../../home';
import Navbar from '../Navbar';
import ContactForm from '../forms/ContactForm';

/*********************** Helper Components ************************/
function Input({ placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='w-full px-4 py-3 text-sm bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'
    />
  );
}

/*********************** ContactForm ******************************/
/**
 * Stand‑alone contact form extracted from the original ContactUs component.
 * Re‑use <ContactForm /> wherever you need a form (modal, sidebar, etc.).
 */

/*********************** Partner Logos ***************************/
const partnerLogos = [
  '/logos/logoipsum1.svg',
  '/logos/logoipsum2.svg',
  '/logos/logoipsum3.svg',
  '/logos/logoipsum4.svg',
];

/*********************** Main Page *******************************/
export default function ContactUs() {
  return (
    <>
      <Navbar />
      <main className='font-sans text-gray-800 mt-14'>
        {/* Hero heading */}
        <section className='relative px-4 py-24 overflow-hidden text-center text-white bg-gray-900'>
          {/* Decorative arrows */}
          <div className='absolute hidden left-4 top-8 md:block'>
            <svg
              width='80'
              height='20'
              viewBox='0 0 80 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-teal-600'
            >
              <path d='M0 10H70M70 10L60 2M70 10L60 18' strokeWidth='2' />
            </svg>
          </div>
          <div className='absolute hidden rotate-180 right-4 bottom-8 md:block'>
            <svg
              width='80'
              height='20'
              viewBox='0 0 80 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-teal-600'
            >
              <path d='M0 10H70M70 10L60 2M70 10L60 18' strokeWidth='2' />
            </svg>
          </div>
          <h1 className='mb-4 text-4xl font-extrabold md:text-6xl'>
            Contact Us
          </h1>
          <p className='max-w-xl mx-auto text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </section>

        {/* Partner logos bar */}
        <section className='relative z-10 -mt-10'>
          <div className='flex flex-wrap items-center justify-center w-11/12 gap-10 px-4 py-6 mx-auto bg-white rounded-t-lg shadow'>
            {partnerLogos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt='Partner Logo'
                className='w-auto h-8'
              />
            ))}
          </div>
        </section>

        {/* Contact form & Newsletter */}
        <section className='px-4 py-20 bg-white'>
          <div className='grid max-w-6xl gap-12 mx-auto lg:grid-cols-3'>
            {/* Contact Form */}
            <div className='lg:col-span-2'>
              <ContactForm />
            </div>

            {/* Newsletter box */}
            <aside className='p-8 text-white bg-gray-900 shadow-lg rounded-xl h-fit'>
              <h3 className='mb-3 text-2xl font-semibold'>Our Newsletters</h3>
              <p className='mb-6 text-sm text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className='flex gap-2'>
                <input
                  type='email'
                  placeholder='Email'
                  className='flex-grow px-4 py-2 text-sm bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'
                />
                <button className='px-6 text-white bg-teal-700 rounded-md hover:bg-teal-800'>
                  Submit Button
                </button>
              </div>
            </aside>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className='px-4 py-20 bg-teal-50'>
          <div className='grid max-w-6xl gap-8 mx-auto md:grid-cols-3'>
            {/* Phone */}
            <div className='flex items-start gap-4 p-8 bg-white rounded-lg shadow'>
              <div className='p-3 rounded-full bg-teal-600/10'>
                <PhoneIcon className='w-6 h-6 text-teal-700' />
              </div>
              <div>
                <h4 className='font-semibold'>7587666999</h4>
                <p className='mt-1 text-sm text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-start gap-4 p-8 bg-white rounded-lg shadow'>
              <div className='p-3 rounded-full bg-teal-600/10'>
                <EnvelopeIcon className='w-6 h-6 text-teal-700' />
              </div>
              <div>
                <h4 className='font-semibold'>nivyaautomobile@gmail.com</h4>
                <p className='mt-1 text-sm text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            {/* Address */}
            <div className='flex items-start gap-4 p-8 bg-white rounded-lg shadow'>
              <div className='p-3 rounded-full bg-teal-600/10'>
                <MapPinIcon className='w-6 h-6 text-teal-700' />
              </div>
              <div>
                <h4 className='font-semibold'>London Eye, London</h4>
                <p className='mt-1 text-sm text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className='px-4 mb-24'>
          <div className='max-w-6xl mx-auto overflow-hidden rounded-lg shadow h-96'>
            <iframe
              title='London Eye Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9710.69219199794!2d-0.12038278650104061!3d51.50329773231233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b4c77e4c7b%3A0x33c13cacda85e94a!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1686481440000!5m2!1sen!2suk'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
