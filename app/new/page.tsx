import { ProductItem } from '../components/product/productItem';

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
      <ProductItem products={products} />
    </div>
  );
}
