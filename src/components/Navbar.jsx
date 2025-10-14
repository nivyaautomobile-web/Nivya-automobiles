/*  src/components/Navbar.jsx  */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

/* ---------- centralised vehicle data ---------- */
const vehicleData = {
  SUV: [
    {
      name: 'Exter',
      path: '/vehicles/exter',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/exter_thumbnail_pc.png',
    },
    {
      name: 'Creta N Line',
      path: '/vehicles/creta-n-line',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/creta-thumbnail-pc.png',
    },
    {
      name: 'Venue',
      path: '/vehicles/venue',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/venue_thumbnail_pc.png',
    },
    {
      name: 'Venue N Line',
      path: '/vehicles/venue-n-line',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/venue_n_line_thumbnail_pc.png',
    },
    {
      name: 'Creta',
      path: '/vehicles/creta',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/creta-suvpc.png',
    },
    {
      name: 'Alcazar',
      path: '/vehicles/alcazar',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/thumbnail460x250.png',
    },
    {
      name: 'Tucson',
      path: '/vehicles/tucson',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/tucson_thumbnail_pc.png',
    },
  ],
  Sedan: [
    {
      name: 'Verna',
      path: '/vehicles/verna',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/verna_thumbanil_pc.png',
    },
    {
      name: 'Aura',
      path: '/vehicles/aura',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/aura_thumbnail_pc.png',
    },
  ],
  Hatchback: [
    {
      name: 'i20',
      path: '/vehicles/i20',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/i20pe_PC.png',
    },
    {
      name: 'Grand i10 NIOS',
      path: '/vehicles/nios',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/grandi10nios_thumbnail_pc.png',
    },
  ],
  Electric: [
    {
      name: 'IONIQ 5',
      path: '/vehicles/ioniq-5',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/Thumbnail/ioniq_thumbnail_pc.png',
    },
    {
      name: 'CRETA EV',
      path: '/vehicles/creta-ev',
      img: 'https://www.Maruti.com/content/dam/Maruti/in/en/data/vehicle-thumbnail/creta_thumbnail_pc.png',
    },
  ],
};
vehicleData.ALL = Object.values(vehicleData).flat();

/* ---------- mega‑menu fragment ---------- */
const VehicleMegaMenu = ({ closeSelf }) => {
  const [segment, setSegment] = useState('SUV');

  return (
    <div
      className='absolute  top-full z-50 mt-4 w-[150vw] -translate-x-[80px] rounded-xl  
                 bg-white p-3 shadow-2xl md:w-[100vw] md:left-[210px] lg:left-[40px] xl:left-[-300px] 2xl:left-[-848px]  '
    >
      {/* LABEL + CLOSE  */}
      <div className='flex items-center justify-between'>
        <h3 className='hidden text-2xl font-bold text-gray-900 uppercase md:block'>
          {segment}
        </h3>
        <button
          onClick={closeSelf}
          className='ml-auto text-gray-600 transition hover:text-red-600 md:ml-0'
        >
          <X size={24} />
        </button>
      </div>

      {/* SEGMENT TABS  */}
      <div className='mt-4 overflow-hidden bg-gray-900 rounded-lg'>
        <div className='flex flex-wrap justify-center'>
          {['SUV', 'Sedan', 'Hatchback', 'Electric', 'ALL'].map((seg) => (
            <button
              key={seg}
              onClick={() => setSegment(seg)}
              className={`flex-1 px-6 py-3 text-sm font-semibold uppercase tracking-wide
                          transition
                          ${
                            segment === seg
                              ? 'bg-white text-gray-900'
                              : 'text-white hover:bg-gray-800'
                          }`}
            >
              {seg}
            </button>
          ))}
        </div>
      </div>

      {/* VEHICLE GRID  */}
      <div className='grid gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6'>
        {vehicleData[segment].map((v) => (
          <Link
            key={v.name}
            to={v.path}
            className='flex flex-col items-center text-center group'
          >
            <img
              src={v.img}
              alt={v.name}
              className='w-auto h-32 transition-transform duration-200 group-hover:scale-105'
            />
            <span className='mt-3 text-sm font-semibold tracking-wide'>
              {v.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

/* ---------- main navbar ---------- */
const Navbar = () => {
  const [openVehicles, setOpenVehicles] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* helpers for hover + click toggle */
  const onHover = (setter) => () => setter(true);
  const onLeave = (setter) => () => setter(false);

  const [mobMore, setMobMore] = useState(false);
  const [mobVeh, setMobVeh] = useState(false);
  const [mobSrv, setMobSrv] = useState(false);
  return (
    <nav className='fixed inset-x-0 top-0 z-50 w-full shadow-md bg-white/40 backdrop-blur-lg'>
      <div className='flex items-center justify-between px-4 py-3 mx-auto max-w-7xl md:px-12 lg:px-16'>
        {/* Logo */}
        <Link to='/'>
          <img
            src={require('../images/logo.png')}
            className='object-contain h-12'
            alt='Maruti Logo'
          />
        </Link>

        {/* Hamburger – mobile only */}
        <button
          className='text-gray-800 md:hidden'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <div className='items-center hidden space-x-12 font-semibold text-gray-800 md:flex'>
          <Link className='hover:text-red-500' to='/about-us'>
            ABOUT&nbsp;US
          </Link>

          {/* -------- VEHICLES -------- */}
          <div className='relative'>
            <button
              className='hover:text-red-500'
              onClick={() => setOpenVehicles((o) => !o)}
            >
              VEHICLES ▼
            </button>
            {openVehicles && (
              <div className='absolute left-0 z-50 top-full'>
                <VehicleMegaMenu closeSelf={() => setOpenVehicles(false)} />
              </div>
            )}
          </div>

          {/* SERVICES */}
          <div className='relative'>
            <button
              className='hover:text-red-500'
              onClick={() => setOpenServices((o) => !o)}
            >
              SERVICES ▼
            </button>
            {openServices && (
              <div className='absolute z-50 w-48 mt-2 bg-white rounded-lg shadow-xl'>
                {[
                  ['Maintenance', '/services/maintenance'],
                  ['Gallery', '/gallery'],
                  ['Blogs', '/blogs'],
                  ['Body Shop', '/services/body-shop'],
                  ['Insurance', '/services/insurance'],
                ].map(([label, link]) => (
                  <Link
                    key={label}
                    to={link}
                    className='block px-4 py-2 text-sm transition hover:bg-gray-100'
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* MORE */}
          <div
            className='relative'
            onMouseEnter={onHover(setOpenMore)}
            onMouseLeave={onLeave(setOpenMore)}
          >
            <button
              className='hover:text-red-500'
              onClick={() => setOpenMore((o) => !o)}
            >
              MORE ▼
            </button>
            {openMore && (
              <div className='absolute z-50 mt-2 bg-white rounded-lg shadow-xl w-52'>
                {[
                  ['CNG Vehicles', '/vehicles/cng'],
                  ['Body Shop', '/services/body-shop'],
                  ['Insurance', '/services/insurance'],
                  ['Accessories', '/services/accessories'],
                ].map(([label, link]) => (
                  <Link
                    key={label}
                    to={link}
                    className='block px-4 py-2 text-sm transition hover:bg-gray-100'
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link className='hover:text-red-500' to='/contact-us'>
            CONTACT&nbsp;US
          </Link>
        </div>
      </div>

      {/* Mobile accordion (simplified) */}
      {menuOpen && (
        <div className='px-4 pb-6 space-y-2 font-semibold text-gray-800 bg-white shadow-lg md:hidden'>
          <Link to='/about-us' className='block pt-4 hover:text-red-500'>
            ABOUT US
          </Link>

          {/* phone Vehicles accordion */}
          <button
            onClick={() => setMobVeh(!mobVeh)}
            className='flex items-center justify-between w-full py-2'
          >
            VEHICLES{' '}
            <ChevronDown
              className={`ml-2 transition ${mobVeh && 'rotate-180'}`}
              size={18}
            />
          </button>
          {mobVeh && (
            <div className='ml-4 space-y-1'>
              {vehicleData.ALL.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className='block text-sm hover:bg-gray-100'
                >
                  {name}
                </Link>
              ))}
            </div>
          )}

          {/* phone Services accordion */}
          <button
            onClick={() => setMobSrv(!mobSrv)}
            className='flex items-center justify-between w-full py-2'
          >
            SERVICES{' '}
            <ChevronDown
              className={`ml-2 transition ${mobSrv && 'rotate-180'}`}
              size={18}
            />
          </button>
          {mobSrv && (
            <div className='ml-4 space-y-1'>
              {[
                ['Maintenance', '/services/maintenance'],
                ['Body Shop', '/services/body-shop'],
                ['Insurance', '/services/insurance'],
              ].map(([t, l]) => (
                <Link
                  key={t}
                  to={l}
                  className='block text-sm hover:bg-gray-100'
                >
                  {t}
                </Link>
              ))}
            </div>
          )}

          {/* phone More accordion */}
          <button
            onClick={() => setMobMore(!mobMore)}
            className='flex items-center justify-between w-full py-2'
          >
            MORE{' '}
            <ChevronDown
              className={`ml-2 transition ${mobMore && 'rotate-180'}`}
              size={18}
            />
          </button>
          {mobMore && (
            <div className='ml-4 space-y-1'>
              {[
                ['CNG Vehicles', '/vehicles/cng'],
                ['Body Shop', '/services/body-shop'],
                ['Insurance', '/services/insurance'],
              ].map(([t, l]) => (
                <Link
                  key={t}
                  to={l}
                  className='block text-sm hover:bg-gray-100'
                >
                  {t}
                </Link>
              ))}
            </div>
          )}

          <Link to='/contact-us' className='block pt-2 hover:text-red-500'>
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
