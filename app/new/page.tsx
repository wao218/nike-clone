import Link from 'next/link';

export default function NewAndFeatured() {
  const products = [
    {
      id: 123,
      title: 'Nike Dunk Low Next Nature',
      imageUrl: 'testing.com',
      category: "Women's Shoes",
      colorVariations: ['blue', 'green', 'red'],
      price: 110,
    },
    {
      id: 123,
      title: 'Nike Dunk Low Next Nature',
      imageUrl: 'testing.com',
      category: "Women's Shoes",
      colorVariations: ['blue', 'green', 'red'],
      price: 110,
    },
    {
      id: 123,
      title: 'Nike Dunk Low Next Nature',
      imageUrl: 'testing.com',
      category: "Women's Shoes",
      colorVariations: ['blue', 'green', 'red'],
      price: 110,
    },
    {
      id: 123,
      title: 'Nike Dunk Low Next Nature',
      imageUrl: 'testing.com',
      category: "Women's Shoes",
      colorVariations: ['blue', 'green', 'red'],
      price: 110,
    },
    {
      id: 123,
      title: 'Nike Dunk Low Next Nature',
      imageUrl: 'testing.com',
      category: "Women's Shoes",
      colorVariations: ['blue', 'green', 'red'],
      price: 110,
    },
    {
      id: 123,
      title: 'Nike Dunk Low Next Nature',
      imageUrl: 'testing.com',
      category: "Women's Shoes",
      colorVariations: ['blue', 'green', 'red'],
      price: 110,
    },
  ];

  return (
    <div className='max-w-[1824px] mx-10'>
      <div className='mx-2'>
        <h1 className='mt-3 font-medium text-2xl text-[#111]'>
          New Releases <span>{`(${products.length})`}</span>
        </h1>
      </div>
      <div className='flex flex-wrap mt-2'>
        {products.map((product) => {
          return (
            <div className='w-1/3 px-2 mb-3'>
              <Link href={`/new/product/${product.id}`}>
                <img
                  src='/../image/example-product.webp'
                  alt='Product Listing'
                />
                <div className='my-4'>
                  <p className='font-medium text-[#111]'>{product.title}</p>
                  <p className='text-[#707072]'>{product.category}</p>
                  <p className='text-[#707072]'>
                    {product.colorVariations.length} colors
                  </p>
                  <p className='font-medium text-[#111] mt-3'>
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
