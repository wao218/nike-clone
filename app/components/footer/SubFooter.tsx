import Link from 'next/link';
import Image from 'next/image';
export function SubFooter() {
  return (
    <div className='flex h-[90px] justify-between'>
      <div className='flex items-end space-x-6 mb-4'>
        <Link
          href='https://www.nike.com/language_tunnel'
          className='flex items-center text-white text-sm space-x-1'
        >
          <svg
            aria-hidden='true'
            focusable='false'
            viewBox='0 0 24 24'
            role='img'
            width='18px'
            height='15px'
            fill='none'
          >
            <path
              fill='currentColor'
              fillRule='evenodd'
              d='M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span>United States</span>
        </Link>
        <span className='text-[#7e7e7e] text-sm'>
          © 2023 Nike, Inc. All Rights Reserved
        </span>
      </div>
      <div className='flex flex-col text-sm text-[#7e7e7e] items-end justify-end space-y-8 mb-4'>
        <ul className='flex space-x-8'>
          <Link href='/' className='hover:text-white'>
            Guides
          </Link>
          <Link href='/' className='hover:text-white'>
            Terms of Sale
          </Link>
          <Link href='/' className='hover:text-white'>
            Nike Privacy Policy
          </Link>
          <Link
            href='/'
            className='hover:text-white flex items-baseline space-x-1'
          >
            <img
              src='/../../image/privacy-image.png'
              alt='Your Privacy Choices'
              width={15}
              height={14}
            />
            <span>Your Privacy Choices</span>
          </Link>
        </ul>
        <div>
          <span className='hover:text-white'>CA Supply Chains Act</span>
        </div>
      </div>
    </div>
  );
}
