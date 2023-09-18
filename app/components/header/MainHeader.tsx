import Link from 'next/link';

export function MainHeader() {
  return (
    <header className='flex h-16 pt-1 items-center justify-between ml-9 mr-[38px]'>
      <div className='flex items-center'>
        <Link href='/'>
          <svg
            aria-hidden='true'
            className='h-20 w-20'
            focusable='false'
            viewBox='0 0 24 24'
            role='img'
            width='24px'
            height='24px'
            fill='none'
          >
            <path
              fill='currentColor'
              fillRule='evenodd'
              d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
              clipRule='evenodd'
            ></path>
          </svg>
        </Link>
      </div>
      <nav className='flex space-x-6 font-medium flex-grow justify-center'>
        <Link href='/new'>New & Featured</Link>

        <Link href='/men'>Men</Link>

        <Link href='/women'>Women</Link>

        <Link href='/kids'>Kids</Link>

        <Link href='/accessories'>Accessories</Link>

        <Link href='/sale'>Sale</Link>
      </nav>

      <div className='relative flex items-center space-x-4'>
        <button className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full hover:bg-neutral-200 p-1.5'>
          <svg
            aria-hidden='true'
            className='h-6 w-6'
            focusable='false'
            viewBox='0 0 24 24'
            role='img'
            width='24px'
            height='24px'
            fill='none'
          >
            <path
              stroke='currentColor'
              strokeWidth='1.5'
              d='M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853'
            ></path>
          </svg>
        </button>
        <input
          type='text'
          placeholder='Search'
          className='outline-none rounded-full w-[180px] bg-neutral-100 px-12 py-2 hover:bg-neutral-200'
        />
        <div className='flex'>
          <Link
            href='/favorites'
            className='rounded-full hover:bg-neutral-200 p-2'
          >
            <svg
              aria-hidden='true'
              className='h-6 w-6'
              focusable='false'
              viewBox='0 0 24 24'
              role='img'
              width='24px'
              height='24px'
              fill='none'
            >
              <path
                stroke='currentColor'
                strokeWidth='1.5'
                d='M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451'
              ></path>
            </svg>
          </Link>

          <Link href='/cart' className='rounded-full hover:bg-neutral-200 p-2'>
            <svg
              aria-hidden='true'
              className='h-6 w-6'
              focusable='false'
              viewBox='0 0 24 24'
              role='img'
              width='24px'
              height='24px'
              fill='none'
            >
              <path
                stroke='currentColor'
                strokeWidth='1.5'
                d='M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5'
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
