import { MainHeader } from './MainHeader';
import { TopHeader } from './TopHeader';

export function Header() {
  return (
    <div className='w-full'>
      <TopHeader />
      <MainHeader />
    </div>
  );
}
