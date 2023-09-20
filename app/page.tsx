import Link from 'next/link';

const leftSideLinks = [
  {
    url: '/',
    title: 'Air Force 1',
  },
  {
    url: '/',
    title: 'Jordan 1',
  },
  {
    url: '/',
    title: 'Metcon',
  },
  {
    url: '/',
    title: 'Air Max 270',
  },
];

const MiddleLeftSideLinks = [
  {
    url: '/',
    title: 'All Shoes',
  },
  {
    url: '/',
    title: 'Jordan Shoes',
  },
  {
    url: '/',
    title: 'Running Shoes',
  },
  {
    url: '/',
    title: 'Basketball Shoes',
  },
];

const MiddleRightideLinks = [
  {
    url: '/',
    title: 'All Clothing',
  },
  {
    url: '/',
    title: 'Tops & T-Shirts',
  },
  {
    url: '/',
    title: 'Shorts',
  },
  {
    url: '/',
    title: 'Hoodies & Pullovers',
  },
];

const rightideLinks = [
  {
    url: '/',
    title: 'Infant & Toddler Shoes',
  },
  {
    url: '/',
    title: 'Kids Shoes',
  },
  {
    url: '/',
    title: 'Kids Basketball Shoes',
  },
  {
    url: '/',
    title: 'Kids Running Shoes',
  },
];

export default function Index() {
  return (
    <div className='max-w-[1824px] mx-auto'>
      <div className='mx-12'>
        <section className='mt-16 flex flex-col'>
          <div className='mx-auto'>
            <h2 className='text-2xl font-medium h-[60px]'>New in Nike Tech</h2>

            <figure className='flex flex-col items-center'>
              <img
                src='/../image/hero-pic.webp'
                alt='Nike. Just Do It'
                width={1824}
                height={950}
              />
              <figcaption className='flex flex-col items-center space-y-9 mt-10'>
                <h3 className='text-7xl font-medium text-[#111] text-center'>
                  BOARD APPROVAL <br /> NOT REQUIRED
                </h3>
                <p className='text-base'>
                  Nike Tech is engineered to the exact specifications of
                  championship athletes.
                </p>
                <Link
                  href='/'
                  className='bg-[#111] text-white py-[6px] px-5 rounded-[30px]'
                >
                  Suit Up
                </Link>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className='mt-16 flex flex-col'>
          <h2 className='text-2xl font-medium h-[60px]'>Trending</h2>
          <ul className='flex justify-between'>
            <li>
              <figure>
                <Link href='/'>
                  <img
                    src='/../image/trending-1.webp'
                    className='min-w-[300px]'
                    alt='Nike Style Girl'
                    height={600}
                    width={600}
                  />
                </Link>
                <figcaption className='mt-4'>
                  <p className='text-xl font-medium'>Nike Style</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Link href='/'>
                  <img
                    src='/../image/trending-2.webp'
                    className='min-w-[300px]'
                    alt='Nike Bowerman'
                    height={600}
                    width={600}
                  />
                </Link>
                <figcaption className='mt-4'>
                  <p className='text-xl font-medium'>Nike Bowerman Pack</p>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <Link href='/'>
                  <img
                    src='/../image/trending-3.webp'
                    className='min-w-[300px]'
                    alt='Jordan Kids Back to School'
                    height={600}
                    width={600}
                  />
                </Link>
                <figcaption className='mt-4'>
                  <p className='text-xl font-medium'>
                    Jordan Kids' Back to School Essentials
                  </p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <section className='mt-16 flex flex-col'>
          <h2 className='text-2xl font-medium h-[60px]'>Featured</h2>
          <div className='flex justify-between'>
            <div className='flex-1 pr-2 relative'>
              <figure className='w-full h-[680px] relative mb-4'>
                <img
                  src='/../image/featured-1.webp'
                  alt='Air Force 1 Feature'
                />
                <figcaption className='absolute bottom-8 left-8 p-4 text-white'>
                  <p className='text-sm'>Iconic Forever</p>
                  <h3 className='text-xl font-semibold mb-11'>Air Force 1</h3>
                  <Link
                    href='/'
                    className='font-medium text-[#111] py-[6px] px-[20px] rounded-[30px] bg-white flex items-center justify-center space-x-2 hover:bg-[#b2b2b2]'
                  >
                    Shop All
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className='flex-1 pl-2 relative'>
              <figure className='w-full h-[680px] relative mb-4'>
                <img src='/../image/featured-2.jpeg' alt='Nike ACG Feature' />
                <figcaption className='absolute bottom-8 left-8 p-4 text-white'>
                  <p className='text-sm'>Nike ACG</p>
                  <h3 className='text-xl font-semibold mb-11'>
                    Hike-Ready Gear
                  </h3>
                  <div className='w-1/2'>
                    <Link
                      href='/'
                      className='font-medium text-[#111] py-[6px] px-[20px] rounded-[30px] bg-white flex items-center justify-center space-x-2 hover:bg-[#b2b2b2]'
                    >
                      Shop
                    </Link>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className='mt-16 flex flex-col mb-16'>
          <h2 className='text-2xl font-medium h-[60px]'>Nike Membership</h2>

          <div className='mb-8'>
            <figure className='relative'>
              <img
                src='/../image/nike-black-bg.webp'
                alt='Nike Swoosh'
                width={1824}
                height={407}
              />
              <figcaption className='absolute bottom-1/4 left-8'>
                <h3 className='text-[74px] text-white leading-[60px]'>
                  Become A <br />
                  Member
                </h3>
                <p className='text-white my-8'>
                  Sign up for Free. Join the community
                </p>
                <div className='flex space-x-2'>
                  <Link
                    href='/'
                    className='font-medium text-[#111] py-[6px] px-[20px] rounded-[30px] bg-white flex items-center justify-center space-x-2 hover:bg-[#b2b2b2]'
                  >
                    Join Us
                  </Link>
                  <Link
                    href='/'
                    className='font-medium text-[#111] py-[6px] px-[20px] rounded-[30px] bg-white flex items-center justify-center space-x-2 hover:bg-[#b2b2b2]'
                  >
                    Sign In
                  </Link>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className='mb-32'>
            <ul className='flex space-x-2'>
              <li>
                <figure className='relative'>
                  <img
                    src='/../image/member-1.webp'
                    alt='First Access'
                    height={735}
                    width={600}
                  />
                  <figcaption className='absolute bottom-0 left-10 w-3/4'>
                    <p>Member Shop</p>
                    <h3 className='text-2xl font-medium mb-11'>
                      Shop Member-exclusive styles.
                    </h3>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className='relative'>
                  <img
                    src='/../image/member-2.webp'
                    alt='Shopping As It Should Be'
                    height={735}
                    width={600}
                  />
                  <figcaption className='absolute bottom-0 left-10 w-3/4'>
                    <p>Shipping as It Should Be</p>
                    <h3 className='text-2xl font-medium mb-11'>
                      Free shipping on orders $50+
                    </h3>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className='relative'>
                  <img
                    src='/../image/member-3.webp'
                    alt='Nike By You'
                    height={735}
                    width={600}
                  />
                  <figcaption className='absolute bottom-0 left-10 w-3/4'>
                    <p>Nike By You</p>
                    <h3 className='text-2xl font-medium mb-11'>
                      Customize your so-you shoe.
                    </h3>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
          <div className='flex w-1/2 mx-auto'>
            <div className='w-1/4 px-[6px]'>
              <ul className='flex flex-col space-y-2'>
                <li className='mb-1'>
                  <Link href='/' className='font-medium'>
                    Featured
                  </Link>
                </li>
                {leftSideLinks.map((link, idx) => {
                  return (
                    <li key={`${link.title}${idx}`} className='mb-1'>
                      <Link
                        href={link.url}
                        className='text-[#7e7e7e] font-medium'
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='w-1/4 px-[6px]'>
              <ul className='flex flex-col space-y-2'>
                <li className='mb-1'>
                  <Link href='/' className='font-medium'>
                    Shoes
                  </Link>
                </li>
                {MiddleLeftSideLinks.map((link, idx) => {
                  return (
                    <li key={`${link.title}${idx}`} className='mb-1'>
                      <Link
                        href={link.url}
                        className='text-[#7e7e7e] font-medium'
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='w-1/4 px-[6px]'>
              <ul className='flex flex-col space-y-2'>
                <li className='mb-1'>
                  <Link href='/' className='font-medium'>
                    Clothing
                  </Link>
                </li>
                {MiddleRightideLinks.map((link, idx) => {
                  return (
                    <li key={`${link.title}${idx}`} className='mb-1'>
                      <Link
                        href={link.url}
                        className='text-[#7e7e7e] font-medium'
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='w-1/4 px-[6px]'>
              <ul className='flex flex-col space-y-2'>
                <li className='mb-1'>
                  <Link href='/' className='font-medium'>
                    Kids
                  </Link>
                </li>
                {rightideLinks.map((link, idx) => {
                  return (
                    <li key={`${link.title}${idx}`} className='mb-1'>
                      <Link
                        href={link.url}
                        className='text-[#7e7e7e] font-medium'
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
