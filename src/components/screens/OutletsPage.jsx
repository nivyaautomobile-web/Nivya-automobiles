import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Footer } from '../../home';

// Replace the sample outlets below with your real outlet data & embed URLs
const outlets = [
  {
    id: 'showroom-hitech-city',
    name: 'Nivya Maruti – Hi‑Tech City Showroom',
    address: 'Plot No. 12, Hi‑Tech City Rd, Hyderabad, Telangana 500081',
    phone: '+91‑40‑4000‑1234',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.279829149002!2d78.38645187521628!3d17.44350128343009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d244b6b5c3%3A0x6b4d4f0ea5d81769!2sHitech%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1718781353499!5m2!1sen!2sin',
  },
  {
    id: 'service-banjara-hills',
    name: 'Nivya Maruti – Banjara Hills Service Centre',
    address: 'Road No. 2, Banjara Hills, Hyderabad, Telangana 500034',
    phone: '+91‑40‑4000‑5678',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.894070850826!2d78.45113417521553!3d17.41403428498465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb968e5d39a5d7%3A0x238374b3d3d1f3e2!2sBanjara%20Hills%20Rd%20Number%202%2C%20Banjara%20Hills%2C%20Hyderabad%2C%20Telangana%20500034!5e0!3m2!1sen!2sin!4v1718781462099!5m2!1sen!2sin',
  },
  {
    id: 'showroom-Gachibowli',
    name: 'Nivya Maruti – Gachibowli Showroom',
    address:
      '3,4,5,6 survey no 58/1, Gowliddodi, Gopan Pally, Financial District, Gachibowli, 500075',
    phone: '+91‑40‑4000‑5678',
    mapEmbedUrl:
      'https://www.google.com/maps/place/Nivya+-+Maruti+Showroom+Gachibowli/@17.429396,78.325809,14z/data=!4m6!3m5!1s0x3bcb9365686e933f:0x1796fc437a6d7381!8m2!3d17.4293962!4d78.3258087!16s%2Fg%2F11tk26gdvg?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: ' Sales And Service Nampally',
    name: 'Nivya Maruti – Sales And Service Nampally',
    address:
      '5-9-171, Chapel Road, Abids, Nampally, Hyderabad, Telangana 500001',
    phone: '+91‑40‑4000‑5678',
    mapEmbedUrl:
      'https://www.google.com/maps/place/Nivya+Maruti+Sales+And+Service+Nampally/@17.394838,78.473588,14z/data=!4m6!3m5!1s0x3bcb97ead36c82cf:0xaba6c6c7f521aeeb!8m2!3d17.3948375!4d78.4735878!16s%2Fg%2F11v0mxq7cm?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'Nivya Maruti Vikarabad',
    name: 'Nivya Maruti - Vikarabad',
    address:
      'Nivya Maruti Nivya Motocorp Pvt Ltd, 2-3-98/3, Shiva Reddypet, Vikarabad, Telangana 501101',
    phone: '+91‑40‑4000‑5678',
    mapEmbedUrl:
      'https://www.google.com/maps/place/Nivya+Maruti+Vikarabad/@17.328599,77.922093,14z/data=!4m6!3m5!1s0x3bc95f8c8b72bf1d:0xcb6645db19773022!8m2!3d17.3285987!4d77.9220933!16s%2Fg%2F11ty2tlg_y?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 'Nivya Maruti - Khammam',
    name: 'Nivya Maruti - Khammam',
    address: 'Sri Sri circle, Gopalapuram, Khammam, Telangana 507002',
    phone: '+91‑40‑4000‑5678',
    mapEmbedUrl:
      'https://www.google.com/maps/place/Nivya+Maruti+-+Khammam/@17.245119,80.1856,14z/data=!4m6!3m5!1s0x3a345758a218a28d:0x7cc50a086d5b03db!8m2!3d17.2451192!4d80.1856004!16s%2Fg%2F11px50bvnf?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: ' Sales And Service Kothagudem',
    name: 'Nivya Maruti – Kothagudem',
    address:
      'Gram Panchayat Office, D No 3-1,-194/1, S S Complex, Near Chunchupalli, Vidya Nagar, Kothagudem, Telangana 507101',
    phone: '+91‑40‑4000‑5678',
    mapEmbedUrl:
      'https://www.google.com/maps/place/Nivya+-+Maruti/@17.53527,80.612615,14z/data=!4m6!3m5!1s0x3a34174a2fe32dc1:0xfb4d754e2049b7be!8m2!3d17.5352701!4d80.6126151!16s%2Fg%2F11px1csgb_?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: ' Sales And Service Bhadrachalam',
    name: 'Nivya Maruti – Bhadrachalam',
    address:
      'D NO: 19-1-153/1, Charla Rd, beside KK Function Hall, Korrajula Gutta, Bhadrachalam, Telangana 507111',
    phone: '+91‑40‑4000‑5678',
    mapEmbedUrl:
      'https://www.google.com/maps/place/Nivya+Maruti/@17.673871,80.898192,14z/data=!4m6!3m5!1s0x3a36af3447629559:0xb702def5e29d2020!8m2!3d17.6738709!4d80.8981917!16s%2Fg%2F11k3hgtby5?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: ' Sales And Service Manuguru',
    name: 'Nivya Maruti – Manuguru',
    address: 'Manuguru Main Rd, Ashok Nagar, Manuguru (PT), Telangana 507117',
    phone: '+91‑40‑4000‑5678',
    mapEmbedUrl:
      'https://www.google.com/maps/place/Nivya+Maruti/@17.927244,80.825264,14z/data=!4m6!3m5!1s0x3a315609bfbb24f7:0x31d2a35c2d1b0f84!8m2!3d17.9272436!4d80.8252637!16s%2Fg%2F11sbwsrzy7?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: ' Sales And Service Sathupally',
    name: 'Nivya Maruti – Sathupally',
    address:
      '1, 1F, Sathupally Main Rd, near JVR Park, Sathupally, Telangana 507303',
    phone: '+91‑40‑4000‑5678',
    mapEmbedUrl:
      'https://www.google.com/maps?ll=17.209664,80.836404&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=11277685225612246973',
  },
];

export default function OutletsPage() {
  const [activeOutlet, setActiveOutlet] = useState(outlets[0]);

  return (
    <>
      <Navbar />
      <main className='max-w-6xl px-4 py-10 mx-auto text-gray-800'>
        {/* Header */}
        <h1 className='mb-2 text-4xl font-bold text-center'>Our Outlets</h1>
        <p className='mb-10 text-lg text-center'>
          Find the nearest Nivya Maruti showroom or service centre.
        </p>

        {/* Layout */}
        <div className='grid gap-8 lg:grid-cols-2'>
          {/* Outlet List */}
          <div className='order-2 space-y-6 lg:order-1'>
            {outlets.map((outlet) => (
              <button
                key={outlet.id}
                onClick={() => setActiveOutlet(outlet)}
                className={`w-full text-left p-5 rounded-2xl shadow-md transition-all hover:shadow-lg focus:outline-none ${
                  activeOutlet.id === outlet.id ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <h2 className='mb-1 text-xl font-semibold'>{outlet.name}</h2>
                <p className='text-sm text-gray-600'>{outlet.address}</p>
                <p className='text-sm font-medium'>📞 {outlet.phone}</p>
              </button>
            ))}
          </div>

          {/* Google Map Display */}
          <div className='order-1 lg:order-2'>
            <div className='relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg'>
              <iframe
                title={activeOutlet.name}
                src={activeOutlet.mapEmbedUrl}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='absolute inset-0 w-full h-full border-0'
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
