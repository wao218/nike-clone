export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  // TODO: Grab product by id using the params
  const product = {
    id: 123,
    title: 'Nike Dunk Low Next Nature',
    imageUrl: 'testing.com',
    category: "Women's Shoes",
    colorVariations: ['blue', 'green', 'red'],
    price: 110,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  };

  return (
    <div className='max-w-[1824px] flex justify-center'>
      <div className='flex my-40 space-x-9'>
        <div className='w-[calc(100%-456px)]'>
          <img
            className='rounded-xl'
            src='/../../../image/example-product.webp'
            alt='Product Image'
            height={669}
          />
        </div>
        <div className='w-[456px]'>
          <h1 className='font-medium text-[#111] text-2xl'>{product.title}</h1>
          <p className='text-[#111]'>{product.category}</p>
          <p className='font-medium text-[#111] mt-3'>${product.price}</p>
          <form className='mt-6'>
            <fieldset>
              <legend className='flex justify-between w-full'>
                <p className='font-medium'>Select Size</p>
                <p className='font-medium text-[#707072]'>Size Guide</p>
              </legend>
              <div className={'grid gap-2 my-4 grid-cols-3'}>
                {product.sizes.map((size, index) => (
                  <div key={size} className='flex justify-center items-center'>
                    <input
                      type='radio'
                      name='size'
                      id={`size_${size}`}
                      className='sr-only'
                    />
                    <label
                      htmlFor={`size_${size}`}
                      className='flex-grow w-16 h-12 border border-gray-300 cursor-pointer p-2 hover:border-black flex justify-center items-center shadow-sm rounded-md'
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>

            <div className='flex flex-col space-y-3'>
              <button className='bg-[#111] text-white rounded-full px-6 py-[18px] hover:bg-[#707072]'>
                Add to Bag
              </button>
              <button className='flex space-x-2 justify-center items-center border rounded-full px-6 py-[18px] border-[#CACACC] hover:border-[#111]'>
                <span>Favorite</span>
                <span>
                  <svg
                    aria-hidden='true'
                    className='h-4 w-4'
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
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
