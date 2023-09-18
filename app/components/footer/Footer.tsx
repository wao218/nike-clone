import { MainFooter } from './MainFooter';
import { SubFooter } from './SubFooter';

export function Footer() {
  return (
    <footer className='bg-[#111]'>
      <div className='mx-auto max-w-[1440px]'>
        <MainFooter />
        <SubFooter />
      </div>
    </footer>
  );
}
