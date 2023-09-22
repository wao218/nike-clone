import Link from 'next/link';

export function ProductItem({ products }: { products: any }) {
  return (
    <div className='flex flex-wrap mt-2'>
      {products.map((product: any) => {
        return (
          <div className='w-1/3 px-2 mb-3'>
            <Link href={`/new/product/${product.id}`}>
              <img src='/../image/example-product.webp' alt='Product Listing' />
              <div className='my-4'>
                <p className='font-medium text-[#111]'>{product.title}</p>
                <p className='text-[#707072]'>{product.category}</p>
                <p className='font-medium text-[#111] mt-3'>${product.price}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
